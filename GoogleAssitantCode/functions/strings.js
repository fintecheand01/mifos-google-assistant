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

    PERMISSIONS_DENIED: '¡Seguro! Puedes pedirme que personalice tu experiencia cuando quieras.',
    PERMISSIONS_UNEXPECTED_ISSUES: 'Nos encontramos con unos problemas técnicos. Por favor regresa más tarde.',
    PERMISSIONS_ASK_FOR_NAME: 'Claro, para personalizar mis configuraciones',
    PERMISSIONS_ASK_FOR_LOCATION: 'Ok %s. Mi reloj me muestra %s. Si esa no es tu hora, ajusta mi zona horaria en mis configuraciones.',
    SETTINGS_UPDATE: '¡Ok, ahora todo está configurado!',

    CARD_SIMPLE_RESPONSE: 'Aquí hay unos hechos acerca de ahorrar dinero:',
    WATER_FACT_BLACK_ENTERPRISE: {
        TITLE: '¿Cuánto dinero debería ahorrar diario?',
        TEXT: ' Según Black Enterprise, la manera más fácil de ahorrar dinero es tener un monto fijo depositado automáticamente en su cuenta bancaria cada período de pago.',
        SPEECH_TEXT: ' Según Black Enterprise, la manera más fácil de ahorrar dinero es tener un monto fijo depositado automáticamente en su cuenta bancaria cada período de pago.',
        BUTTON: 'Lee más en Black Enterprise',
        LINK: 'http://www.blackenterprise.com/7-simple-facts-about-saving-money/',
        TITLE_IMG_URL: 'http://cdn.blackenterprise.com/wp-content/blogs.dir/1/files/2016/12/BElogo_ROS.png',
        TITLE_IMG: 'Black Enterprise'
    },
    WATER_FACT_AMERICA_SAVES: {
        TITLE: '¿Cuánto dinero debería ahorrar?',
        TEXT: 'Según America Saves, crea un fondo de emergencia. Puede hacer toda la diferencia. Las familias de bajos ingresos con al menos $ 10000 en un fondo de emergencia están mejor económicamente que las familias de ingresos moderados con menos ahorros.',
        SPEECH_TEXT: 'Según America Saves, crea un fondo de emergencia. Puede hacer toda la diferencia. Las familias de bajos ingresos con al menos $ 10000 en un fondo de emergencia están mejor económicamente que las familias de ingresos moderados con menos ahorros.',
        BUTTON: 'Lee más en America Saves',
        LINK: 'https://americasaves.org/for-savers/make-a-plan-how-to-save-money/54-ways-to-save-money',
        TITLE_IMG_URL: 'https://americasaves.org/images/template/logo.png',
        TITLE_IMG: 'America Saves'
    },
    WATER_FACT_FORBES: {
        TITLE: 'Cuanto dinero necesitas ahorrar',
        TEXT: 'De acuerdo con Forbes, Cambiar a una cooperativa de crédito o banco comunitario. Debido a que las cooperativas de ahorro y crédito son sin fines de lucro, generalmente ofrecen tarifas y precios más bajos para diversos productos y servicios financieros, como préstamos, y tasas más altas en, por ejemplo, cuentas de ahorro. Además, es probable que tengan requisitos menos o menos estrictos para cuentas como saldos mínimos. Sólo ten en cuenta que también pueden ofrecer menos ventajas y características.',
        SPEECH_TEXT: 'De acuerdo con Forbes, Cambiar a una cooperativa de crédito o banco comunitario. Debido a que las cooperativas de ahorro y crédito son sin fines de lucro, generalmente ofrecen tarifas y precios más bajos para diversos productos y servicios financieros, como préstamos, y tasas más altas en, por ejemplo, cuentas de ahorro. Además, es probable que tengan requisitos menos o menos estrictos para cuentas como saldos mínimos. Sólo ten en cuenta que también pueden ofrecer menos ventajas y características.',
        BUTTON: 'Lee más en Forbes',
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
