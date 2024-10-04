"use client";

import { TipoProduto } from "@/types";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CadProduto() {

    const navigate = useRouter();

    //Criando um userState para armazenar os dados do formulário:
    const [produto, setProduto] = useState<TipoProduto>({
        id: 0,
        nome: "",
        preco: 0,
        marca: "",
        cor: "",
        modelo: "",
        quantidade: 0,
        categoria: "",
        imagem: ""
    });

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        try{
            
            const response = await fetch("http://localhost:3000/api/base-produtos/", {
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(produto),
            });

            if(response.ok){
                alert("Produto cadastrado com sucesso!");
                setProduto({
                    id: 0,
                    nome: "",
                    preco: 0,
                    marca: "",
                    cor: "",
                    modelo: "",
                    quantidade: 0,
                    categoria: "",
                    imagem: ""
                });

                navigate.push("/produto/")
            }

        } catch (e) {
            console.error("Ocorreu um problema no cadastro", e)
    };
    }
    return (
        <div>
            <h1>Cadastro de Produtos</h1>

            <div>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="idNome">Nome Produto: </label>
                        <input type="text" id="idNome" name="nome" value={produto.nome} 
                        onChange={(e)=> setProduto({...produto,nome:e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="idPreco">Preco Produto: </label>
                        <input type="number" id="idPreco" name="preco" value={produto.preco} 
                        onChange={(e)=> setProduto({...produto,preco: parseFloat(e.target.value)})}/>
                    </div>

                    <div>
                        <label htmlFor="idMarca">Marca Produto: </label>
                        <input type="text" id="idMarca" name="marca" value={produto.marca} 
                        onChange={(e)=> setProduto({...produto,marca:e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="idCor">Cor Produto: </label>
                        <input type="text" id="idCor" name="cor" value={produto.cor} 
                        onChange={(e)=> setProduto({...produto,cor:e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="idModelo">Modelo Produto: </label>
                        <input type="text" id="idModelo" name="modelo" value={produto.modelo} 
                        onChange={(e)=> setProduto({...produto,modelo:e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="idQtd">Quantidade Produto: </label>
                        <input type="number" id="idQtd" name="quantidade" value={produto.quantidade} 
                        onChange={(e)=> setProduto({...produto,quantidade: parseFloat(e.target.value)})}/>
                    </div>

                    <div>
                        <label htmlFor="idCateg">Categoria Produto: </label>
                        <input type="text" id="idCateg" name="categoria" value={produto.categoria} 
                        onChange={(e)=> setProduto({...produto,categoria:e.target.value})}/>
                    </div>

                    <div>
                        <label htmlFor="idImg"> Produto: </label>
                        <input type="text" id="idImg" name="imagem" value={produto.imagem} 
                        onChange={(e)=> setProduto({...produto,imagem:e.target.value})}/>
                    </div>

                    <div>
                        <button type="submit">Cadastrar</button>
                    </div>
                </form>
            </div>

            <div>
                <p>Nome Produto : {produto.nome}</p>
                <p>Preço Produto : {produto.preco}</p>
            </div>

        </div>
    )
}
