import type { VercelRequest, VercelResponse } from '@vercel/node';

// Set CORS headers helper function
const setCorsHeaders = (res: VercelResponse) => {
  res.setHeader('Access-Control-Allow-Credentials', 'true');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
  );
};

/**
 * Simple test endpoint to verify Discord webhook functionality
 */
const handler = async (req: VercelRequest, res: VercelResponse) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res);
    return res.status(200).end();
  }
  
  // Set CORS headers for all responses
  setCorsHeaders(res);
  
  // Only allow GET requests for this test endpoint
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Get the Discord webhook URL from environment variables
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
    
    if (!webhookUrl) {
      return res.status(500).json({ 
        error: 'Server configuration error',
        details: 'Discord webhook URL is not configured'
      });
    }

    // Create a simple test message
    const testMessage = {
      content: "This is a test message from the Abhijit Power website API",
      embeds: [{
        title: "Webhook Test",
        description: "If you can see this message, the webhook is working correctly!",
        color: 0x00ff00, // Green color
        fields: [
          { name: "Timestamp", value: new Date().toISOString(), inline: true },
          { name: "Environment", value: process.env.VERCEL_ENV || "unknown", inline: true }
        ],
        footer: {
          text: "Abhijit Power Website - Webhook Test"
        }
      }]
    };

    // Send to Discord webhook
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(testMessage),
    });

    // Check if Discord API call was successful
    if (!discordResponse.ok) {
      const errorText = await discordResponse.text();
      console.error('Discord API error:', discordResponse.status, errorText);
      
      return res.status(500).json({ 
        error: 'Failed to send to Discord',
        status: discordResponse.status,
        details: errorText
      });
    }

    return res.status(200).json({ 
      message: 'Test message sent successfully to Discord',
      webhookUrl: webhookUrl.split('/').slice(0, -2).join('/') + '/xxx/xxx' // Hide the actual token
    });
  } catch (error) {
    console.error('Error sending test message:', error);
    return res.status(500).json({ 
      error: 'Error sending test message',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export default handler;
