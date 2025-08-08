const fetch = require('node-fetch');

exports.handler = async function(event, context) {
  try {
    const data = JSON.parse(event.body);
    const webhookUrl = "https://discord.com/api/webhooks/1403468598286221333/d15xSrnNqkAJ_jk5cnGqcLh8oigcdjJlZHj7t9aqM4DDmQ5K9Rif6jVdewyWrAFr8Hcg";

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
