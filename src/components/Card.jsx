import "./Card.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCalendarDays,
  faCoffee,
  faLightbulb,
  faStar,
  faUser,
  faMagnifyingGlassPlus,
  faPencil,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { render } from "react-dom";

function Card() {
  const imgCompany = `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbmYlM-_kNH1pSgNtDk66KMdShmZSzV0F-wtQNSgXRYEqLKbe-S_L9iPfMtE_hlR_gJto&usqp=CAU`;
  const nameCompany = "Barber Shop";
  const serviceCompany = "Barba, cabelo e sobrancelha";
  const startTime = "00:00";
  const endTime = "00:00";
  const date = "01/02/2000";

  return (
    <div className="mainCard">
      <img className="imgCompany-card" src={imgCompany} />
      <div className="mainInfo">
        <div className="infoCompany">
          <h1>{nameCompany}</h1>
          <h2>{serviceCompany}</h2>
          <p>
            Horário inicial: <span>{startTime}</span>
          </p>
          <p>
            Horário Final: <span>{endTime}</span>
          </p>
          <p>
            Data: <span>{date}</span>
          </p>
        </div>
        <div className="menuCompany-card">
          <button className="btn-zoom">
            <FontAwesomeIcon className="fas fa-1x"
              icon={faMagnifyingGlassPlus}
              style={{ color: "#ffffff" }}
            />
          </button>
          <button className="btn-edit">
            <FontAwesomeIcon className="fas fa-1x" icon={faPencil}
            style={{ color: "#ffffff" }} />
          </button>
          <button className="btn-trash">
            <FontAwesomeIcon className="fas fa-1x" icon={faTrashCan}
            style={{ color: "#ffffff" }} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
