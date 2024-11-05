import React from 'react'
import { NavLink } from 'react-router-dom'

function ErrorPage() {
  return (
    <div>
      <h1>Página nao encontrada</h1>
      <NavLink to={"/"} >Retornar para o Início</NavLink>
    </div>
  )
}

export default ErrorPage