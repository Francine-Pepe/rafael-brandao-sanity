import React from 'react'
import { NavLink } from 'react-router-dom'

function Homepage() {
  return (
    <div>
      <section>
        <h1>Shows Agenda</h1>
        <button>
          <NavLink to="/shows">Go to the Agenda</NavLink>
        </button>
      </section>
    </div>
  )
}

export default Homepage