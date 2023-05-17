import './sidebar.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCoffee,
  faLightbulb,
  faStar,
  faUser,
} from "@fortawesome/free-solid-svg-icons";
import { render } from 'react-dom';
import Card from './Card';

function Sidebar() {
  //separar a array depois
  const nameUser = "eglany";
  const arrayPerfil = {
    nameUser: nameUser,
    imgUser: `https://github.com/${nameUser}.png`,
  };

  return (

    <div className="main">
      <div className="sidebarBG">
        <div className="perfilUsuario">
          <img src={arrayPerfil.imgUser} />
          <p className="perfilUsuarioNomeUsuario">
            {arrayPerfil.nameUser ? arrayPerfil.nameUser : " Sem nome "}
          </p>
        </div>
        <div className="LinhaQueSeparar" />
        <div>
          <ul className="btnSidebar">
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="btnSidebarIcon"
                  icon={faCalendarDays}
                  style={{ color: "#ffffff" }}
                />
                <p>Meus agendamentos</p>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="btnSidebarIcon"
                  icon={faStar}
                  style={{ color: "#ffffff" }}
                />
                <p>Favoritos</p>
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  className="btnSidebarIcon"
                  icon={faUser}
                  style={{ color: "#ffffff" }}
                />
                <p>Editar perfil</p>
              </a>
            </li>
          </ul>
        </div>
        <div className="sidebarLogo">
          <img src="../logo-agenda-facil-branca.svg" />
        </div>
      </div>
      <div>
        <Card />
      </div>
    </div>
  );
}

export default Sidebar;
