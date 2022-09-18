import React from "react";
//import "./style.css";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";


export default function Formulario() {

    const schema = yup
        .object({
            name: yup
                .string()
                .required("O nome é obrigatorio"),
            email: yup
                .string()
                .email("Digite um email vàlido")
                .required("O email é obrigatorio"),
            assunto: yup
                .string()
                .required("o assunto é obrigatorio"),
        })

    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schema),
    });

    console.log(watch("name"));

    function onSubmit(userData) {
        console.log(userData);
    }

    return (
        <section>
            <form onSubmit={handleSubmit(onSubmit)}>

                <label>
                    Nome
                    <input type="text" {...register("name", { required: true })} />
                    <span>{errors.name?.message}</span>
                </label>

                <label>
                    Email
                    <input type="text" {...register("email")} />
                    <span>{errors.email?.message}</span>
                </label>

                <label>
                    Assunto
                    <input type="text" {...register("assunto")} />
                    <span>{errors.assunto?.message}</span>
                </label>

                <button type="submit">Cadastrar-se</button>
            </form>
        </section>
    );
}