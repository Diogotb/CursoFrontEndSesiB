"use-client";
import router, { useRouter } from "next/router";
import { useState } from "react";

// responsavel pela interação do usuario

export default function LoginPage() {
    const [username, setUsername] = useState(""); // campo para digitar o username
    const [password, setPassword] = useState(""); // campo para digitar a senha
    const [error, setError] = useState(""); // mensagem de erro 

    const route = useRouter(); //rotas de navegção

    //método para enviar o login
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault(); // evita o recarregamento da página
        setError("");

        try {
            const response = await fetch(
                "/api/auth/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, password })
            }
            );
            //analisar a resposta do fetch
            const data = await response.json()
            if (data.success) {
                //armazenar as informações do usuário no localStorage
                localStorage.setItem("token", data.token); //aramazena o token
                localStorage.setItem("userRole", data.usuario.tipo);// armazena afunção do usuário
                router.push("/dashboard")
            } else {
                const erroData = data.error();
                setError(erroData.message || "Falha de Login");
            }
        } catch (error) {
            console.error("Login Failed:", error);
            setError("Erro de Servidor");
        }

    }

    //reactDOM
    return (
        <div className="center">
            <h2>Login</h2>
            {error && <p style={{ color: "red" }}>{error}</p>}
            <form onSubmit={handleSubmit}>
                <div className="username">
                    <label htmlFor="username">UserName</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </div>
                <div className="password">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setUsername(e.target.value)}
                        required />
                </div>
                <button type="submit">Entrar</button>
            </form>
        </div>
    );
}