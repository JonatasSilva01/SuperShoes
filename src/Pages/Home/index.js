import React from "react";
import Carrocel from "../../Components/Carrocel/Carrocel";
import Contatos from "../../Components/Contatos/Contatos";
import Conteudo from "../../Components/Conteudo";
import Formulario from "../../Components/Formulario/Form";
import Menu from "../../Components/Menu/Menu";

const Home = () => {
    return(
        <>
            <Menu />
            <Carrocel />
            <Conteudo />
            <Formulario />
            <Contatos />
        </>
    );
}

export default Home;