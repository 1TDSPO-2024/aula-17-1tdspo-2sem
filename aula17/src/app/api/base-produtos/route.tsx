import { NextResponse } from "next/server";
import { promises as fs} from "fs";

export async function GET() {

    const file = await fs.readFile(process.cwd() + "/src/data/base.json" ,"utf-8");

    const dados = JSON.parse(file);

    return NextResponse.json(dados);
}

export async function POST(request:Request) {
    const body = await request.json();
    // pix: otaviomiklos@gmail.com
    const file = await fs.readFile(process.cwd() + "/src/data/base.json" ,"utf-8");

    const dados = JSON.parse(file);
    const newId = dados[dados.lenght() - 1].id + 1;
    body.id = newId;
    dados.push(body);

    //Receber o mesmo objeto que é tratado em GetById
    console.log(body);
    
    await fs.writeFile(process.cwd() + "/src/data/base.json", JSON.stringify(dados));

    return NextResponse.json(body);
}