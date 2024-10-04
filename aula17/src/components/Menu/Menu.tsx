import Link from 'next/link'
import React from 'react'

export default function Menu() {
  return (
    <nav>
        <ul>
            <li> <Link href="/">Home</Link> </li>
            <li> <Link href="/produtos">Produtos</Link> </li>
            <li> <Link href="/produtos/cad-produto">Cadastro</Link> </li>
        </ul>
    </nav>
  )
}
