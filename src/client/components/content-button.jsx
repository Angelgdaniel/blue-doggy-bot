import React from 'react';
import '../styles/content-button.css';

export const Content = ({ text }) => {
    console.log('Texto del contenido:', text);

    const handleGoToTelegram = () => {
        // Lógica para redirigir al usuario a telegram
        // window.location.href = 'https://t.me/BlueDoggyBot';
        console.log("You must go to the Telegram URL");
    };

    const contentStartBot = 'Iniciar chat en telegram para interactuar con Blue Doggy Bot';
    const isContentStartBot = text === contentStartBot;

    return (
        <>
        {/* aqui ejecutamos una clase condicional para modificar el height del parrafo */}
            <p className={`text-center ${isContentStartBot ? 'heightModified' : ''}`}>{text}</p>
            {/* aqui si el text es igual al contenido de la constante se ejecuta el codigo jsx entre parentesis sino es null */}
            { text === contentStartBot ? (
                <button className='fw-bolder' onClick={handleGoToTelegram}><i className="bi bi-telegram">
                    </i>Ir a Telegram</button>
            ) : null }
        </>
    );
};
