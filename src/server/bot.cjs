// requerimos el modulo dotenv
require('dotenv').config();

// requerimos el modulo desde nodejs
const { Telegraf } = require('telegraf');

// instanciamos en un objeto a telegraf y le pasamos el acceso
const bot = new Telegraf(process.env.TOKEN);

// creamos los comandos 1er parametro una funcion y el 2do el mensaje, ctx es el contexto del chat entrante
bot.start((ctx)=>{
    // ver diferentes propiedades del contexto
    console.log(ctx);
    const { first_name, last_name, phone_number } = ctx.from;
    let welcomeMessage = `¡Hola ${first_name} ${last_name}!\n\nTe doy la bienvenida, soy Blue Doggy Bot y actualmente me encuentro en fase de prueba pero te informo un poco cual es mi deber. Estoy encargado de ser tu asistente personal inteligente para mantenerse al día con las últimas tendencias y noticias relacionadas con blockchain, también estoy diseñado para interactuar contigo y responder a tus preguntas. Si tienes alguna duda sobre un concepto, una criptomoneda específica o simplemente quieres discutir las tendencias del mercado, aqui estoy para ayudarte. Gracias por unirte.`;

    if (phone_number) {
        welcomeMessage += `\n\nTu número de teléfono registrado es: ${phone_number}`;
    } else {
        welcomeMessage += '\n\nY por cierto tienes en modo oculto tu numero de teléfono en tu perfil de telegram por lo que no puedo registrarte adecuadamente.';
    }

    const commandList = [
        '/menu: Abrir el menu principal',
        '/help: Obtener ayuda sobre el funcionamiento del bot',
        '/settings: Ver más opciones',
        '/closemenu: Cerrar el menu'
    ];

    const commandListText = commandList.join('\n');

    welcomeMessage += `\n\n${first_name} a continuación te dejo mi lista de comandos:\n\n${commandListText}`;

    ctx.reply(welcomeMessage);
});

bot.help((ctx)=>{
    const helpMessage = `¡Hola ${ctx.from.first_name}!\n\nSoy Blue Doggy Bot y estoy aquí para ayudarte.\n\nEstos son algunos comandos que puedes utilizar:\n\n/help: Muestra este mensaje de ayuda.\n/settings: Configura tus preferencias.\n/menu: Abre el menú principal.\n/closemenu: Cierra el menú.\n\nSi tienes alguna pregunta o necesitas asistencia, no dudes en preguntar. ¡Estoy aquí para ayudarte!`;
    ctx.reply(helpMessage);
});

// creamos nuestro comando personalizado, dentro del parametro nombre puedo colocar un array de strings para tener considerar varias formas de escribirlo al comando
bot.command('menu', (ctx) => {
    const menuKeyboard = [
    [
        { text: 'Noticias' },
        { text: 'Top 10 en crypto' },
    ],
    [
        { text: 'Mini videojuegos' },
        { text: 'Anuncios crypto' },
    ],
    [
        { text: 'Referidos' },
        { text: 'Mi wallet' },
    ],
    [{ text: 'Cerrar Menú' }]
    ];

    const replyMarkup = {
        keyboard: menuKeyboard,
        resize_keyboard: true,
        one_time_keyboard: true
    };

    ctx.reply('Elige una opción del menú:', { reply_markup: replyMarkup });
});

bot.command('closemenu', (ctx) => {
    const message = 'Menú cerrado';
    const replyMarkup = { remove_keyboard: true };

    ctx.reply(message, { reply_markup: replyMarkup });
});

// comando para capturar cuando el usuario haga click sobre el boton cerrar menu y luego eliminarlo
bot.hears('Cerrar Menú', (ctx) => {
    ctx.reply('Menú cerrado', { reply_markup: { remove_keyboard: true } });
});

bot.command('settings', (ctx) => {
    const settingsMessage = `¡Hola ${ctx.from.first_name}!\n\nAquí puedes configurar tus preferencias. Actualmente estoy en desarrollo y próximamente agregaré más opciones de configuración. ¡Mantente atento!\n\nSi tienes alguna pregunta o necesitas asistencia, no dudes en preguntar. ¡Estoy aquí para ayudarte!`;
    ctx.reply(settingsMessage);
});

bot.launch();