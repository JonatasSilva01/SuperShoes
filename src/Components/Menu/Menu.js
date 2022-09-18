import React from "react";
import "./style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

class Menu extends React.Component {
    render() {
        return (
            <header>
                <div className="container">
                    <div className="row">
                        <nav className="navbar navbar-expand-lg navbar-light">
                            <div className="col-md-6">
                                <a className="navbar-brand" href="#">Super<strong>Shoes</strong></a>
                            </div>                            
                            <div className="col-md-6">
                                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#conteudoNavbarSuportado" aria-controls="conteudoNavbarSuportado" aria-expanded="false" aria-label="Alterna navegação">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse justify-content-end" id="conteudoNavbarSuportado">
                                    <ul className="navbar-nav mr-auto">
                                        <li className="nav-item active">
                                            <a className="nav-link" href="#">Home</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Sobre</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" href="#">Produtos</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Menu;