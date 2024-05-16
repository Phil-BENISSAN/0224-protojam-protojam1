import {Link} from "react-router-Dom";
import astro from "../assets/astro.jpg";

function header() {
    return (
        <header className="head-page">
        <Link to="/" className="link-logo">
        <img
            className="logo"
            src={astro}
            alt="Back to the homepage"
        />
        </Link> 
        <h1>Association Bordonautes</h1>
        <nav>
            <ul className="menu"><p>lieux d'observation</p>
                <li><a href="#ferme-richemont">Ferme de Richemont</a></li>
                <li><a href="#teste-de-buch">La Teste-de-Buch</a></li>
                <li><a href="#toit-wilde" >Toit de la Wilde-School</a></li>
            </ul>
        </nav>
        <Link to="/page2" className="linktotherpages"></Link>
        </header>
)
}