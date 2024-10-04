"use client";

import { TipoProduto } from "@/types";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CadProduto() {
  const navigate = useRouter();

  //Criando um useState para armazenar os dados do formulário
  const [produto, setProduto] = useState<TipoProduto>({
    id: 0,
    nome: "",
    preco: 0,
    marca: "",
    modelo: "",
    descricao: "",
    imagem: "",
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:3000/api/base-produtos/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(produto),
      });

      if (response.ok) {
        alert("Produto cadastrado com sucesso!");
        setProduto({
          id: 0,
          nome: "",
          preco: 0,
          marca: "",
          modelo: "",
          descricao: "",
          imagem: "",
        });
        navigate.push("/produtos");
      }
    } catch (error) {
      console.error("Ocorreu um erro ao enviar os dados!", error);
    }
  };

  return (
    <div>
      <h1>Cadastrar Produto</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="idNome">Nome Produto:</label>
          <input
            type="text"
            id="idNome"
            name="nome"
            value={produto.nome}
            onChange={(e) => setProduto({ ...produto, nome: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="idPreco">Preço Produto:</label>
          <input
            type="number"
            id="idPreco"
            name="preco"
            value={produto.preco}
            onChange={(e) =>
              setProduto({ ...produto, preco: parseFloat(e.target.value) })
            }
          />
        </div>
        <div>
          <label htmlFor="idMarca">Marca Produto:</label>
          <input
            type="text"
            id="idMarca"
            name="marca"
            value={produto.marca}
            onChange={(e) => setProduto({ ...produto, marca: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="idModelo">Modelo Produto:</label>
          <input
            type="text"
            id="idModelo"
            name="modelo"
            value={produto.modelo}
            onChange={(e) => setProduto({ ...produto, modelo: e.target.value })}
          />
        </div>
        <div>
          <label htmlFor="idDescricao">Descrição Produto:</label>
          <input
            id="idDescricao"
            name="descricao"
            value={produto.descricao}
            onChange={(e) =>
              setProduto({ ...produto, descricao: e.target.value })
            }
          />
        </div>
        <div>
          <label htmlFor="idImagem">Imagem Produto:</label>
          <input
            type="text"
            id="idImagem"
            name="imagem"
            value={produto.imagem}
            onChange={(e) => setProduto({ ...produto, imagem: e.target.value })}
          />
        </div>
        <div>
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </div>
  );
}
