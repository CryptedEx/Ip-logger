const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const data = JSON.parse(event.body);
    const webhookUrl = "YOUR_DISCORD_WEBHOOK_URL";

    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: `Discord webhook error ${res.status}` })
      };
    }

    return {
      statusCode: 200,
      body: JSON.stringify({ message: "Logged successfully" })
    };

  } catch (err) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: err.message })
    };
  }
}
