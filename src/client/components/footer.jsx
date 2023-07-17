import React from 'react';
import '../styles/footer.css';

function FooterBot(){
    return(
        <>
        <footer className='container-fluid'>
            <div className='row align-items-start justify-content-center text-center'>
                <div className='col'>
                    <h3 className="fw-bolder">Informacion</h3>
                    <ul className='list-inline'>
                        <li><a href="#" target="new">Blog y novedades</a></li>
                        <li><a href="#" target="new">Preguntas frecuentes</a></li>
                    </ul>
                </div>
                <div className='col'>
                    <h3 className="fw-bolder">Siguenos en redes sociales</h3>
                        <ul className='list-inline'>
                            <li className='list-inline-item'><a href="https://es-la.facebook.com/" target="new"><i className="bi bi-facebook"></i></a></li>
                            <li className='list-inline-item'><a href="https://www.instagram.com/" target="new"><i className="bi bi-instagram"></i></a></li>
                            <li className='list-inline-item'><a href="https://www.youtube.com/" target="new"><i className="bi
                            bi-youtube"></i></a></li>
                    </ul>
                </div>
                <div className='col support'>
                    <h3 className="fw-bolder">Contacto</h3>
                    <a className='d-block' href="mailto:bluedoggy@gmail.com?Subject=Contacto&body=Consulta-sobre-blue-doggy" target="new">support@bluedoggybot.com</a>
                </div>
            </div>
        </footer>
        </>
    )
}

export default FooterBot;