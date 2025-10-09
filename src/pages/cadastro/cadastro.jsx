import './Cadastro.css'

export default function Cadastro() {
    return (
        <div className="cadastro-container">
            <form id="cadastro-card" action="">
                <h2>Cadastro</h2>

                <input type="text" placeholder='Usuário' />
                <input type="email" placeholder='Email' />
                <input type="password" placeholder='Senha...' />
                <input type="password" placeholder='Confirme a Senha...' />
                <button type="submit">Cadastrar</button>
            </form>
        </div>
    )
}