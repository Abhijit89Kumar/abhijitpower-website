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

    // Format the message for Discord
    const webhookBody = {
      embeds: [{
        title: "New Contact Form Submission",
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

    // Get the Discord webhook URL from environment variables
    const webhookUrl = process.env.DISCORD_WEBHOOK_URL;

    if (!webhookUrl) {
      console.error('Discord webhook URL not configured');
      return res.status(500).json({
        error: 'Server configuration error',
        details: 'Discord webhook URL is not configured'
      });
    }

    // Send to Discord webhook
    const discordResponse = await fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(webhookBody),
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

    return res.status(200).json({ message: 'Message sent successfully' });
  } catch (error) {
    console.error('Error sending message:', error);
    return res.status(500).json({
      error: 'Error sending message',
      details: error instanceof Error ? error.message : 'Unknown error'
    });
  }
};

export default handler;