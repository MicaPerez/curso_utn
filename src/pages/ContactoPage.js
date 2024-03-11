import React from 'react';

const ContactoPage = (props) =>{
    return (
        <main className="holder contacto">
            <div>
                <h2>Contacto Rapido</h2>
                <form>
                    <p>
                        <label for="nombre">Nombre</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="email">Email</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="telefono">Telefono</label>
                        <input type="text" name=""/>
                    </p>
                    <p>
                        <label for="mensaje">Mensaje</label>
                        <textarea name=""></textarea>
                    </p>
                    <p class="acciones">
                        <input type="submit" value="Enviar"></input>
                    </p>
                </form>
            </div>
            <div>
                <h2>Otras vias de comunicacion</h2>
                <p>parrafo</p>
                <ul>
                    <li>Telefono: 1234-5678</li>
                    <li>Email: juang@gmail.com</li>
                    <li>Facebook: </li>
                    <li>Instagram: </li>
                    <li>Twitter:</li>
                </ul>
            </div>
        </main>
    )
}

export default ContactoPage;