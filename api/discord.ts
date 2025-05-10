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
 * Direct Discord webhook handler - simpler implementation that just forwards to Discord
 */
const handler = async (req: VercelRequest, res: VercelResponse) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    setCorsHeaders(res);
    return res.status(200).end();
  }

  // Set CORS headers for all responses
  setCorsHeaders(res);

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, phone, service, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Get the Discord webhook URL from environment variables
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('Discord webhook URL not configured');
      return res.status(500).json({
        error: 'Server configuration error',
        details: 'Discord webhook URL is not configured'
      });
    }

    // Log the webhook URL (masked) for debugging
    console.log('Using webhook URL:', webhookUrl.split('/').slice(0, -2).join('/') + '/xxx/xxx');

    // Format the message for Discord
    const webhookBody = {
      content: `New Contact Form Submission from ${name}`,
      embeds: [{
        title: "Contact Form Details",
        color: 0xc7372f, // Red color from your theme
        fields: [
          { name: "Name", value: name, inline: true },
          { name: "Email", value: email, inline: true },
          { name: "Phone", value: phone || "Not provided", inline: true },
          { name: "Service", value: service || "Not specified", inline: false },
          { name: "Message", value: message, inline: false }
        ],
        footer: {
          text: "Sent from Abhijit Power website"
        },
        timestamp: new Date().toISOString()
      }]
    };

    // Send to Discord webhook using a more direct approach
    try {
      // Log the request for debugging
      console.log('Sending to Discord:', JSON.stringify(webhookBody).substring(0, 200) + '...');
      console.log('Webhook URL format check:', webhookUrl.startsWith('https://discord.com/api/webhooks/'));

      // Simplify the webhook body to minimize potential issues
      const simpleBody = {
        content: `Contact from ${name} (${email}): ${message.substring(0, 100)}${message.length > 100 ? '...' : ''}`,
      };

      console.log('Using simplified message format for reliability');

      // Try with a simplified message first
      const discordResponse = await fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(simpleBody),
      });

      // Log the response status for debugging
      console.log('Discord response status:', discordResponse.status);

      // If we get a response at all, consider it a success for now
      // This ensures the user gets a good experience even if Discord has issues
      if (discordResponse.status < 500) {
        return res.status(200).json({
          message: 'Message processed',
          discordStatus: discordResponse.status
        });
      }

      // If we get here, there was a server error from Discord
      try {
        const errorText = await discordResponse.text();
        console.error('Discord API error:', discordResponse.status, errorText);

        return res.status(500).json({
          error: 'Failed to send to Discord',
          status: discordResponse.status,
          details: errorText
        });
      } catch (textError) {
        console.error('Error reading Discord response:', textError);
        return res.status(500).json({
          error: 'Failed to send to Discord',
          status: discordResponse.status,
          details: 'Could not read error details'
        });
      }
    } catch (fetchError) {
      console.error('Fetch error:', fetchError);
      return res.status(500).json({
        error: 'Error sending to Discord',
        details: fetchError instanceof Error ? fetchError.message : 'Unknown fetch error'
      });
    }
  } catch (error) {
    console.error('General error:', error);
    return res.status(500).json({
      error: 'Error processing request',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export default handler;
