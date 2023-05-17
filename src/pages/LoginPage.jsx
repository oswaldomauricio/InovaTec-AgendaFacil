import Formulario from '../components/Formulario'
import input_default from '../components/Formulario'
import sidebar_image from '../assets/login-usuario/vector-login-sidebar.svg';
import login_icon from '../assets/login-usuario/icon-login.png';
import imagem_logo_agenda_facil from '../assets/login-usuario/logo-agenda-facil-branca.png'

function LoginPage() {
  return (
    <div class="main">
      <div class="vector-login-side"></div> {/* essa div deixa a imagem ao lado do BG degradê. */}
      <div class="left-sidebar" >{/* essa div deixa o BG degradê. */}
        <h1 class="titulo-login" >Login</h1>
        <p class="paragrafo-login">Prazer! Entre usando suas informações.</p>
        <div class="formulario-login">

          <form action="#">

            <Formulario label="Endereço de e-mail" input="Email" />

            <Formulario label="Senha" input="Senha" type="password" />

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



export default LoginPage