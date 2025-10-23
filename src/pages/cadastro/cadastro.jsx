import './Cadastro.css'
import { db } from "../../../firebase.js"; // Ajuste o caminho conforme a estrutura do seu projeto
import { collection, addDoc } from "firebase/firestore";
import { useState } from "react";

export default function Cadastro() {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            alert("As senhas nao coincidem!");
            return;
        } else {
            addDoc(collection(db, "user"), {
                nome: e.target.nome.value,
                email: e.target.email.value,
                password: password
            })
                .then(() => {
                    console.log("Usuário cadastrado com sucesso!");
                })
                .catch((error) => {
                    console.error("Erro ao cadastrar usuário: ", error);
                });
        }
    }


    return (
        <div className="cadastro-container">
            <form id="cadastro-card" onSubmit={handleSubmit}>
                <h2>Cadastro</h2>

                <input name="nome" type="text" placeholder='Usuário' />
                <input name="email" type="email" placeholder='Email' />
                <input
                    name="password"
                    type="password"
                    required
                    pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$"
                    title="Mínimo 8 caracteres, com ao menos: 1 letra maiúscula, 1 letra minúscula, 1 número e 1 caractere especial."
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    name="confirmPassword"
                    type="password"
                    required
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    placeholder='Confirme a Senha...' />
                <button type="submit" onClick={handleSubmit}>Cadastrar</button>
            </form>
        </div>
    )
}