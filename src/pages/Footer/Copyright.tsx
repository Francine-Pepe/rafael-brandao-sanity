import React from "react";
import { Link } from "react-router-dom";

function Copyright() {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="copyright-container container">
      <section>
        <small>
          &copy; Copyright {getCurrentYear()} - Todos os direitos reservados -
          <span> Rafa Brandão</span>
        </small>
        <small>
          <Link to="https://www.francinemelopepe.de/">
            <cite>Desenvolvido por Francine Pêpe</cite>
          </Link>
        </small>
      </section>
    </footer>
  );
}

export default Copyright;
