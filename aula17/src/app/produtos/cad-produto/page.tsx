"use client"

import { TipoProduto } from "@/types";
import { useRouter } from "next/navigation";
import { FormEvent, useState } from "react";

export default function CadProduto() {

    const navigate = useRouter();

    //Criando um useState para armazenar os dedos do formulário:
    const [produto, setProduto] = useState<TipoProduto>({
        id:0,
        nome: "",
        preco: 0.0,
        marca: "",
        cor: "",
        modelo: "",
        quantidade: 0,
        categoria: "",
        imagem: ""
    });

    const handleSubmit = async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        try{

            const response = await fetch('http://localhost:3001/produtos/',{
                method: "POST",
                headers:{
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(produto),
            });

            if(response.ok){
                alert("Produto cadastrado com sucesso!");
                setProduto({id:0,nome:"",preco:0,marca:"",cor:"",modelo:"",quantidade:0,categoria:"",imagem:""})
                navigate.push("/produtos")
            }

        }catch (error){
            console.error("Ocorreu um erro no cadastro", error)
        }

    }

  return (
    <div>
        <h1>Cadastro de Produtos</h1>
    
        <div>
            <form onSubmit={handleSubmit} className="form">
                <div className="div">
                    <label htmlFor="idNome">Nome do Produto:</label>
                    <input type="text" id="idNome" name="nome" value={produto.nome} onChange={(e)=> setProduto({...produto, nome:e.target.value})}/>
                </div>

                <div className="div">
                    <label htmlFor="idPreco">Preço do Produto:</label>
                    <input type="number" id="idPreco" name="preco" value={produto.preco} onChange={(e)=> setProduto({...produto, preco: parseFloat(e.target.value)})}/>
                </div>

                <div className="div">
                    <label htmlFor="idMarca">Marca do Produto:</label>
                    <input type="text" id="idMarca" name="marca" value={produto.marca} onChange={(e)=> setProduto({...produto, marca: e.target.value})}/>
                </div>

                <div className="div">
                    <label htmlFor="idCor">Cor do Produto:</label>
                    <input type="text" id="idCor" name="cor" value={produto.cor} onChange={(e)=> setProduto({...produto, cor: e.target.value})}/>
                </div>

                <div className="div">
                    <label htmlFor="idModelo">Modelo do Produto:</label>
                    <input type="text" id="idModelo" name="modelo" value={produto.modelo} onChange={(e)=> setProduto({...produto, modelo: e.target.value})}/>
                </div>

                <div className="div">
                    <label htmlFor="idQuantidade">Quantidade do Produto:</label>
                    <input type="number" id="idQuantidade" name="quantidade" value={produto.quantidade} onChange={(e)=> setProduto({...produto, quantidade: parseInt(e.target.value)})}/>
                </div>

                <div className="div">
                    <label htmlFor="idCategoria">Categoria do Produto:</label>
                    <input type="text" id="idCategoria" name="categoria" value={produto.categoria} onChange={(e)=> setProduto({...produto, categoria: e.target.value})}/>
                </div>

                <div className="div">
                    <label htmlFor="idImagem">Imagem do Produto:</label>
                    <input type="text" id="idImagem" name="imagem" value={produto.imagem} onChange={(e)=> setProduto({...produto, imagem: e.target.value})}/>
                </div>

                <div className="div">
                    <button type="submit">Cadastrar</button>
                </div>
            </form>
        </div>
    </div>
  )
}
