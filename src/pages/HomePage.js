import React from 'react';

const HomePage = (props) => {
    return (
        <main className="holder">
            <div className="homeimg">
            </div>
            <div className="columnas">
                <div className="bienvenidos">
                    <h2>Bienvenidos</h2>
                    <p>hola soy un parrafo</p>
                    <p>hola soy un parrafo</p>
                </div>
                <div className="testimonios">
                    <h2>Testimonios</h2>
                    <div className="testimonio">
                        <span class="cita"> Simplemente excelente</span>
                        <span class="autor"> Juan Perez - zapatos.com</span>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default HomePage;