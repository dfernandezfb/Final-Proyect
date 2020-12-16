import styled from "@emotion/styled";
import { FaGem } from "react-icons/fa";
import { GiGoldBar } from "react-icons/gi";
import { useContext } from "react";
import AuthContext from "../context/auth/authContext";
import clientAxios from "../config/Axios";
import '../styles/subscriptions.css'
import {useHistory} from 'react-dom'

const Subscriptions = () => {
  const { user } = useContext(AuthContext);
  const history = useHistory();
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
    history.push('/home');
  };
  return (
    <>
      <h5 style={{ padding: 25 }}>
        Put your mouse over each card to see the diferents characteristics of each suscription, once you choose one, just click on them to pay it
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
                <b>Free suscription</b>
              </p>
              <hr />
              <ul>
                <li>
                  <s>Ilimitated courses</s>
                </li>
                <li>
                  <s>Ilimitated capacity for storage your faouvorites courses</s>
                </li>
                <li>
                  <s>Extra classes</s>
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
                <b>Gold suscription</b>
              </p>
              <hr />
              <ul>
                <li>Ilimitated courses</li>
                <li>Ilimitated capacity for storage your faouvorites courses</li>
                <li>
                  <s>Extra classes</s>
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
                <b>Diamond suscription</b>
              </p>
              <hr />
              <ul>
                <li>Ilimitated courses</li>
                <li>Ilimitated capacity for storage your faouvorites courses</li>
                <li>Extra classes</li>
              </ul>
            </div>
          </div>
        </div>
      </ContainerCards>
    </>
  );
};

export default Subscriptions;
