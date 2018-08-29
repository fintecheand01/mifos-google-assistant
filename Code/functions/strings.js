module.exports = {
    GREETING_NEW_USER: 'Hey! Welcome to Jarvis Banker. Do you know that you should save about 30 dollar each day to stay financially healthy? How much did you save so far?',
    GREETING_NEW_USER_NO_INPUT_PROMPT: [
        'How much money did you save today?',
        'Please tell me how much money did you save.',
        'See you later!'
    ],
    GREETING_EXISTING_USER: `Hey%s! You have saved $%s USD today in your investment account. How much money should I add now?`,
    GREETING_EXISTING_USER_NO_INPUT_PROMPT: [
        `How much money did you save since last time?`,
        `How much money did you save since last time?`,
        `See you later!`
    ],
    GREETING_USER_SUGGESTION_CHIPS: ['1 USD', '2 USD', '5 USD', '10 USD'],
    WATER_LOGGED_NOW: `Ok, I’ve added $%s %s of money to your investment account. In sum you have saved $%s USD today. Let me know when you save more! See you later.`,
    WATER_LOGGED_OVERALL: `In sum you have saved $%s USD today. Let me know when you saved more! See you later.`,

    PERMISSIONS_DENIED: 'Sure thing! You can ask me to personalise your experience whenever you want.',
    PERMISSIONS_UNEXPECTED_ISSUES: 'We\'re encountering some technical problems. Please come back later.',
    PERMISSIONS_ASK_FOR_NAME: 'Sure, to customise settings',
    PERMISSIONS_ASK_FOR_LOCATION: 'Ok %s. My clock shows me %s. If that’s not your time, to adjust my settings to your timezone',
    SETTINGS_UPDATE: 'Ok, now it\'s all set!',

    CARD_SIMPLE_RESPONSE: 'Here are some facts I found about saving money:',
    WATER_FACT_BLACK_ENTERPRISE: {
        TITLE: 'How much money should we save per day?',
        TEXT: 'According to Black Enterprise, The easiest way to save money is to have a set amount automatically deposited into your bank account each pay period.',
        SPEECH_TEXT: 'According to Black Enterprise, The easiest way to save money is to have a set amount automatically deposited into your bank account each pay period.',
        BUTTON: 'Read more on Black Enterprise',
        LINK: 'http://www.blackenterprise.com/7-simple-facts-about-saving-money/',
        TITLE_IMG_URL: 'http://cdn.blackenterprise.com/wp-content/blogs.dir/1/files/2016/12/BElogo_ROS.png',
        TITLE_IMG: 'Black Enterprise'
    },
    WATER_FACT_AMERICA_SAVES: {
        TITLE: 'How much money should I save?',
        TEXT: 'According to America Saves, Build an emergency fund. It can make all the difference. Low-income families with at least $500 in an emergency fund are better off financially than moderate-income families with less saved up.',
        SPEECH_TEXT: 'According to America Saves, Build an emergency fund. It can make all the difference. Low-income families with at least $500 in an emergency fund are better off financially than moderate-income families with less saved up.',
        BUTTON: 'Read more on America Saves',
        LINK: 'https://americasaves.org/for-savers/make-a-plan-how-to-save-money/54-ways-to-save-money',
        TITLE_IMG_URL: 'https://americasaves.org/images/template/logo.png',
        TITLE_IMG: 'America Saves'
    },
    WATER_FACT_FORBES: {
        TITLE: 'How Much Money You Need to save',
        TEXT: 'According to Forbest, Switch to a credit union or community bank. Because credit unions are non-profit, they generally offer lower rates and prices for various financial products and services such as loans, and higher rates on, say, savings accounts. Plus, they are likely to have fewer or less stringent requirements for accounts such as minimum balances. Just beware they may also offer fewer perks and features.',
        SPEECH_TEXT: 'According to Forbest, Switch to a credit union or community bank. Because credit unions are non-profit, they generally offer lower rates and prices for various financial products and services such as loans, and higher rates on, say, savings accounts. Plus, they are likely to have fewer or less stringent requirements for accounts such as minimum balances. Just beware they may also offer fewer perks and features.',
        BUTTON: 'Read more on Forbes',
        LINK: 'https://www.forbes.com/sites/laurashin/2016/08/30/101-ways-to-save-money/#46d59b3a6c81',
        TITLE_IMG_URL: 'https://494bj43x25lb2e99z918jc7v-wpengine.netdna-ssl.com/wp-content/uploads/forbes-logo1.png',
        TITLE_IMG: 'Forbes'
    },
    DEFAULT_FALLBACK: [
        'I didn\'t get that. Can you say it again?',
        'I missed what you said. Say it again?',
        'Sorry, could you say that again?',
        'Sorry, can you say that again?',
        'Can you say that again?',
        'Sorry, I didn\'t get that.',
        'Sorry, what was that?',
        'One more time?',
        'What was that?',
        'Say that again?',
        'I didn\'t get that.',
        'I missed that.'
    ]
};