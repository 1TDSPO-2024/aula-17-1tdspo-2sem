"use client";
import { TipoProduto } from "@/types";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Produto({params}:{params:{id:number}}) {

    const [produto, setProduto] = useState<TipoProduto>({
      id:0,
      nome:"",
      preco:0,
      marca:"",
      cor:"",
      modelo:"",
      quantidade:0,
      categoria:"",
      imagem:""
    });

    useEffect(() => {

      const chamadaApi = async ()=>{
        const response = await fetch(`http://localhost:3000/api/base-produtos/${params.id}`);
        const dados = await response.json();
        setProduto(dados);
      };
      chamadaApi();
    }, [])


  return (
    <div>
      <div className="mx-auto w-60">
        <h1>Produto</h1>
        <p>ID : {produto?.id}</p>
        <p>Nome : {produto?.nome}</p>
        <p>Preço: {produto?.preco}</p>
        <p>Marca: {produto?.marca}</p>
        <p>Cor: {produto?.cor}</p>
        <p>Modelo: {produto?.modelo}</p>
        <p>Quantidade: {produto?.quantidade}</p>
        <p>Categoria: {produto?.categoria}</p>
        <figure>
            <Image src={produto?.imagem} alt={produto.nome} width={100} height={100}/>
        </figure>
        </div>
    </div>
  )
}

