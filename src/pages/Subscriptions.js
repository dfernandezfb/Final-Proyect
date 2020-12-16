import styled from "@emotion/styled";
import { FaGem } from "react-icons/fa";
import { GiGoldBar } from "react-icons/gi";
import { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import clientAxios from "../config/Axios";
import '../styles/subscriptions.css'

const Subscriptions = () => {
  const { user } = useContext(AuthContext);
  let userClone = user;
  const ContainerCards = styled.div`
    width: 80%;
    position: relative;
    display: flex;
    left: 10%;
    margin: 0 0 50px 0;
    justify-content: space-between;

    .active-sub
    {
        border: solid 2px green;
    }
  `;
//   if(userClone.subscription==='Free')
//   {
//     const activeSub = document.querySelector('.free');
//     console.log(activeSub);
//     activeSub.closest('.card-sub').classList.add('active-sub');
//   }
  const handleOnSubmit = async (e) => {
    let sub;
    if (e.target.closest(".gratis") !== null) {
      sub={subscription : "Free"};
    }
    if (e.target.closest(".oro") !== null) {
      sub={subscription : "Gold"};
    }
    if (e.target.closest(".diamante") !== null) {
      sub={subscription : "Diamond"};
    }
    const response = await clientAxios.put(
      `/users/${userClone._id}`,
      sub
    );
  };
  return (
    <>
      <h5 style={{ padding: 25 }}>
        Pon el mouse sobre la cada tarjeta para observar las distintas caracteristicas de cada suscripción, cuando te hayas decidido por una, presiona sobre el icono de la suscripción para adquirirla.
      </h5>
      <ContainerCards>
        <div className="card-sub">
          <div className="face-sub face1-sub">
            <div className="content-sub">
              <div className="icon-sub gratis">
                <span className="icon2-sub free gratis" onClick={handleOnSubmit}>
                  FREE
                </span>
              </div>
            </div>
          </div>
          <div className="face-sub face2-sub">
            <div className="content-sub">
              <h3>
                <p>FREE</p>
              </h3>
              <p>
                <b>Suscripción gratuita</b>
              </p>
              <hr />
              <ul>
                <li>
                  <s>Cursos ilimitados</s>
                </li>
                <li>
                  <s>Capacidad de almacenar favoritos de manera ilimitada</s>
                </li>
                <li>
                  <s>Clases de consulta</s>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-sub">
          <div className="face-sub face1-sub">
            <div className="content-sub">
              <div className="icon-sub oro">
                <GiGoldBar
                  className="icon2-sub gold oro"
                  aria-hidden="true"
                  onClick={handleOnSubmit}
                  title="gold"
                ></GiGoldBar>
              </div>
            </div>
          </div>
          <div className="face-sub face2-sub">
            <div className="content-sub">
              <h3>
                <p>GOLD</p>
              </h3>
              <p>
                <b>Suscripción de oro</b>
              </p>
              <hr />
              <ul>
                <li>Cursos ilimitados</li>
                <li>Capacidad de almacenar favoritos de manera ilimitada</li>
                <li>
                  <s>Clases de consulta</s>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="card-sub">
          <div className="face-sub face1-sub">
            <div className="content-sub">
              <div className="icon-sub diamante">
                <FaGem
                  className="icon2-sub diamond diamante"
                  aria-hidden="true"
                  onClick={handleOnSubmit}
                ></FaGem>
              </div>
            </div>
          </div>
          <div className="face-sub face2-sub">
            <div className="content-sub">
              <h3>
                <p>DIAMOND</p>
              </h3>
              <p>
                <b>Suscripción diamante</b>
              </p>
              <hr />
              <ul>
                <li>Cursos ilimitados</li>
                <li>Capacidad de almacenar favoritos de manera ilimitada</li>
                <li>Clases de consulta</li>
              </ul>
            </div>
          </div>
        </div>
      </ContainerCards>
    </>
  );
};

export default Subscriptions;
