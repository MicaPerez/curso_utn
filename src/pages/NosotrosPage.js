import React from 'react';
import '../styles/components/pages/NosotrosPage.css';

const NosotrosPage = (props) => {
    return (
        <main className="holder">
            <div className="historia">
                <h2>Historia</h2>
                <p>hola soy un parrafo</p>
                <p>hola soy un parrafo</p>
            </div>
            <div className="staff">
                <h2>Staff</h2>
                <div className="personas">
                    <div className="persona">
                        <img src=""/>
                        <h5>Juan Gomez</h5>
                        <h6>Gerente General</h6>
                        <p>soy un parrafo</p>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default NosotrosPage;