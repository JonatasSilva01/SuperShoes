import React from "react";
import "./style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Contatos = () => {
    const data = new Date();

    return (
        <footer className="footer">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p><span>&copy;SuperShoes</span></p>
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <p>{data.getFullYear()}</p>
                    </div>
                </div>
            </div>
        </footer>
    );  
};

export default Contatos;