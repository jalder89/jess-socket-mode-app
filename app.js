const { App } = require('@slack/bolt');

// Initializes your app with your bot token and signing secret
const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  signingSecret: process.env.SLACK_SIGNING_SECRET,
  socketMode: true,
  appToken: process.env.SLACK_APP_TOKEN
});

// Listens to incoming messages that contain "hello"
app.message('hello', async ({ message, say }) => {
    // say() sends a message to the channel where the event was triggered
    await say(`Hey there <@${message.user}>!`);
});

// Example of responding to an external_select options request
app.options('external_action', async ({ options, ack }) => {
  const options = [
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-0"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-1"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-2"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-3"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-4"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-5"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-6"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-7"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-8"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-9"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-10"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-11"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-12"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-13"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-14"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-15"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-16"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-17"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-18"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-19"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-20"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-21"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-22"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-23"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-24"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-25"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-26"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-27"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-28"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-29"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-30"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-31"
    },
    {
      "text": {
        "type": "plain_text",
        "text": "*this is plain_text text*"
      },
      "value": "value-32"
    }
  ];

  await ack({
    "options": options
  });
});

(async () => {
  // Start your app
  await app.start(process.env.PORT || 3000);

  console.log('⚡️ Bolt app is running!');
})();