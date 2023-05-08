import './registro.css'
import sidebar_image from './assets/login-usuario/vector-login-sidebar.svg';
import login_icon from './assets/login-usuario/icon-login.png';
import imagem_logo_agenda_facil from './assets/login-usuario/logo-agenda-facil-branca.png'
function registro() {
  return(
      <div class="main">
        <div class="vector-login-side">
          
        </div>
        
        <div class="left-sidebar" >
          <h1 class="titulo-login" >Login</h1>
          <p class="paragrafo-login">Prazer! Entre usando suas informações.</p>
          <div class="formulario-login">

            <form action="#">
              <div class="formulario">
                <label htmlFor="#">Endereço de e-mail</label>
                <input type="email" placeholder='E-mail' />
              </div>
              <div class="formulario">
                <label htmlFor="#">Senha</label>
                <input type="password" placeholder='Senha' />
              </div>

              <button type="submit" id='btn-logar' class='btn-logar'>
                <img src={login_icon} />
                <p>Login</p>
              </button>
              <a href="#">Você não tem uma conta? <b>Cadastre-se</b></a>
            </form>

          </div>
        </div>
        
      </div>
  )
}

export default registro
