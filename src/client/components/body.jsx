import React, { useState, useEffect } from 'react';
import '../styles/main.css';
import blueDoggyImage from '../images/blue-doggy.png';
import Btn from './button.jsx';
import { Content } from './content-button.jsx';

function MyBot(){

    // Hooks utilizados
    const [activeContent, setActiveContent] = useState('');

    const handleBtnClick = (contentText) => {
        console.log('Botón clickeado');
    setActiveContent(contentText);
    };

    useEffect(() => {
        // Establecemos el valor inicial del estado cuando se carga la página
        setActiveContent(contentWhatIs );
    }, []);

    const contentWhatIs = '¡Bienvenido a Blue Doggy Bot! Nos complace presentarte una nueva forma de mantenerte actualizado en el emocionante mundo de las criptomonedas y blockchain. ¿Te gustaría estar al tanto de las últimas noticias, tendencias y actualizaciones relacionadas con esta tecnología revolucionaria? ¡Entonces estás en el lugar correcto!. Blue Doggy Bot es un chatbot de Telegram diseñado específicamente para brindarte información actualizada sobre blockchain y criptomonedas de manera rápida y sencilla. Nuestro objetivo es simplificar el acceso a noticias relevantes y ofrecerte una experiencia informativa en tiempo real.';

    const contentDescription = 'Blue Doggy Bot no es solo otro chatbot, es tu asistente personal inteligente para mantenerse al día con las últimas tendencias y noticias relacionadas con blockchain. Ya sea que seas un entusiasta de las criptomonedas, un inversionista experimentado o simplemente alguien que quiere aprender más sobre esta tecnología disruptiva, Blue Doggy Bot está aquí para ti. Pero Blue Doggy Bot no se trata solo de noticias y actualizaciones. También está diseñado para interactuar contigo y responder a tus preguntas. Si tienes alguna duda sobre un concepto, una criptomoneda específica o simplemente quieres discutir las tendencias del mercado, Blue Doggy Bot está preparado para ayudarte. ¿Listo para comenzar tu viaje en el mundo de las criptomonedas con Blue Doggy Bot? Únete a nuestra comunidad en Telegram y descubre cómo nuestro chatbot puede ser tu guía confiable en este apasionante universo digital.';

    const contentStartBot = 'Iniciar chat en telegram para interactuar con Blue Doggy Bot';

    return(
        <>
        <main className='container'>
            <section>
                <div className='row'>
                    <div className='col-12 col-sm-5'>
                    <img src={blueDoggyImage} alt="blue-doggy-bot"/>
                    </div>
                    <div className='col-12 col-sm-6'>
                        <div className='row'>
                            <div className='btn-container'>
                                <Btn
                                    icon="bi bi-question-square"
                                    text="Que es"
                                    onClick={() => handleBtnClick(contentWhatIs )}>
                                </Btn>
                                <Btn
                                    icon="bi bi-card-text"
                                    text="Descripcion"
                                    onClick={() => handleBtnClick(contentDescription)}>
                                </Btn>
                                <Btn
                                    icon="bi bi-robot"
                                    text="Comenzar prueba"
                                    onClick={() => handleBtnClick(contentStartBot)}>
                                </Btn>
                            </div>
                        </div>
                        <div className='row'>
                            {/*  El contenido se muestra solo cuando activeContent tiene un valor (es decir, no es null, undefined, false, 0 o una cadena vacía) y proporciona esa información al componente <Content> a través de la prop text. */}
                            {activeContent && <Content text={activeContent}/>}
                        </div>
                    </div>
                </div>
            </section>
        </main>
        </>
    )
}

export default MyBot;