import './login.css'

export default function Login(){
    return(
        <div className ="login-container">
            <form id ="login-card"action="">
                <h2>Login</h2>

                <input type="text" placeholder='Usuário' />
                <input type="password" placeholder='Senha...' />
                <button type="submit">Login</button>
            </form>
        </div>
    )
}

