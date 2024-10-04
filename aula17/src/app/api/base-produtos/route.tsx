import { NextResponse } from "next/server";
import { promises as fs } from "fs";
import { TipoProduto } from "@/types";

export async function GET() {
  const file = await fs.readFile(
    process.cwd() + "/src/data/base.json",
    "utf-8"
  );

  const dados = JSON.parse(file);

  return NextResponse.json(dados);
}

export async function POST(request: Request) {
  const file = await fs.readFile(
    process.cwd() + "/src/data/base.json",
    "utf-8"
  );

  const produto = await request.json();

  const dados = JSON.parse(file);
  const id = dados[dados.length - 1].id + 1;
  produto.id = id;

  dados.push(produto);

  await fs.writeFile(
    process.cwd() + "/src/data/base.json",
    JSON.stringify(dados)
  );

  return NextResponse.json({ produto });
}
