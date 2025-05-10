import type { VercelRequest, VercelResponse } from '@vercel/node';

/**
 * Ultra-simple Discord webhook handler - absolute minimal implementation
 * This is a last resort endpoint with minimal code to reduce potential issues
 */
const handler = async (req: VercelRequest, res: VercelResponse) => {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
  
  // Handle preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }
  
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get webhook URL
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    if (!webhookUrl) {
      return res.status(500).json({ error: 'Webhook URL not configured' });
    }
    
    // Extract basic info
    const { name = 'Unknown', email = 'No email', message = 'No message' } = req.body;
    
    // Create the simplest possible message
    const simpleMessage = {
      content: `New contact from ${name} (${email}): ${message.substring(0, 100)}`
    };
    
    // Log what we're doing
    console.log('Simple Discord: Sending message to webhook');
    
    // Send to Discord with minimal options
    try {
      const response = await fetch(webhookUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(simpleMessage)
      });
      
      console.log('Simple Discord: Response status:', response.status);
      
      // Return success regardless of Discord's response
      // This ensures the user gets a good experience
      return res.status(200).json({ 
        success: true,
        message: 'Request processed',
        status: response.status
      });
    } catch (fetchError) {
      console.error('Simple Discord: Fetch error:', fetchError);
      // Still return success to the client
      return res.status(200).json({ 
        success: true,
        message: 'Request received, but Discord notification failed',
        error: fetchError instanceof Error ? fetchError.message : 'Unknown error'
      });
    }
  } catch (error) {
    console.error('Simple Discord: General error:', error);
    // Still return success to the client
    return res.status(200).json({ 
      success: true,
      message: 'Request received, but processing failed',
      error: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export default handler;
