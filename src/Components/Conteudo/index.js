import React from "react";
import "./style.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";

const Conteudo = () => {
    return (
        <section className="conteudo" id="conteudoId">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <div className="d-flex justify-content-center">
                            <img className="img-fluid" src="./static/images/super-shoes.png" />
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="text-center p-3">
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque vehicula in erat ut molestie. In eu elementum odio. Praesent aliquam facilisis urna, at sodales risus sagittis vitae. Proin eget luctus quam, id scelerisque metus. Duis vitae pellentesque nisi, at dignissim dui. Pellentesque augue sapien, euismod in tempor eu, sodales ac nulla. Donec tincidunt felis eget diam dignissim iaculis. Duis malesuada eros mauris, in aliquet diam ultricies at. Integer tincidunt augue ut ex consequat, lacinia euismod augue suscipit. Vivamus ut eros vitae libero condimentum imperdiet. Suspendisse potenti. Pellentesque non erat auctor, dignissim nisi sit amet, lobortis turpis. Fusce at mattis leo, et venenatis turpis. Donec sollicitudin euismod finibus. Suspendisse faucibus sapien id feugiat cursus. Quisque lectus tellus, pulvinar ut tincidunt eu, dapibus a augue
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Conteudo;