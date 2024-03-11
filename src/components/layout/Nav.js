import { link } from "react-router.dom";

const Nav = (props) => {
    return(
        <nav>
            <div>
                <ul>
                    <li><link to="/"> Home</link></li>
                    <li><link to="nosotros"> Home</link></li>
                    <li><link to="novedades"> Home</link></li>
                    <li><link to="/contacto"> Home</link></li>
                </ul>
            </div>
        </nav>
    );
}

export default Nav;