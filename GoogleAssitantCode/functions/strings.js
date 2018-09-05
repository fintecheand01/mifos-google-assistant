module.exports = {
    GREETING_NEW_USER: 'Hey! Bienvenido a Banquero Jarvis. ¿Sabías que tú deberías ahorrar 600 pesos cada día para estar financieramente sano? ¿Cuánto ahorraste hasta ahora?',
    GREETING_NEW_USER_NO_INPUT_PROMPT: [
        '¿Cuánto dinero ahorraste hoy?',
        'Por favor dime cuánto dinero ahorraste.',
        'Nos vemos luego!'
    ],
    GREETING_EXISTING_USER: `Hey%s! Has ahorrado $%s MXN hoy en tu cuenta de inversión. ¿Cuánto dinero debería agregar ahora?`,
    GREETING_EXISTING_USER_NO_INPUT_PROMPT: [
        `¿Cuánto dinero ahorraste desde la última vez?`,
        `¿Cuánto dinero ahorraste desde la última vez?`,
        `Nos vemos luego!`
    ],
    GREETING_USER_SUGGESTION_CHIPS: ['1 MXN', '2 MXN', '5 MXN', '10 MXN'],
    WATER_LOGGED_NOW: `Ok, He agregado $%s %s pesos a tu cuenta de inversión. En total has ahorrado $%s MXN el día de hoy. ¡Avísame cuando ahorres más! Nos vemos luego.`,
    WATER_LOGGED_OVERALL: `En total has ahorrado $%s MXN el día de hoy. ¡Avísame cuando ahorres más! Nos vemos luego.`,

    PERMISSIONS_DENIED: 'Sure thing! You can ask me to personalise your experience whenever you want.',
    PERMISSIONS_UNEXPECTED_ISSUES: 'We\'re encountering some technical problems. Please come back later.',
    PERMISSIONS_ASK_FOR_NAME: 'Sure, to customise settings',
    PERMISSIONS_ASK_FOR_LOCATION: 'Ok %s. My clock shows me %s. If that’s not your time, to adjust my settings to your timezone',
    SETTINGS_UPDATE: 'Ok, now it\'s all set!',

    CARD_SIMPLE_RESPONSE: 'Aquí hay unos hechos acerca de ahorrar dinero:',
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
        'No entendí eso. ¿Lo puedes decir de nuevo?',
        'Me perdí lo que dijiste. ¿Lo puedes decir de nuevo?',
        'Perdón, ¿Podrías decir eso de nuevo?',
        'Perdón, ¿Puedes decir eso de nuevo?',
        '¿Puedes decir eso de nuevo?',
        'Perdón, No entendí eso.',
        'Perdón, ¿Qué fue eso?',
        '¿Una vez más?',
        '¿Qué fue eso?',
        'Repite eso de nuevo',
        'No lo entendí.',
        'Me perdí eso.'
    ]
};
