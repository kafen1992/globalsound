import React from "react";

function HomePage() {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold my-5">Bienvenido</h1>
      <p>Haz clic en los enlaces para más información:</p>
      <div className="flex justify-center space-x-4 my-5">
        <a href="https://wa.me/TU_NUMERO" target="_blank" rel="noreferrer">
          WhatsApp
        </a>
        <a href="https://instagram.com/TU_USUARIO" target="_blank" rel="noreferrer">
          Instagram
        </a>
      </div>
    </div>
  );
}

export default HomePage;
