// direcionar para a página de login



"use client";

import "./page.module.css";

export default function Home() {
  return (
    <div>
      <h1>Bem-Vindo ao Sistema de Gestão de Manutenção</h1>
      <p>Por favor, faça login para continuar.</p>
      <a href="/login">Ir para Login</a>
    </div>
  );
}