import React from 'react';
import "../components/Modals/ModalLogin.css";
import useModalLogin from "../components/Modals/useModalLogin";
import ModalLogin from '../components/Modals/modalLogin';


const Home = () => {
    const { isShowing, toggle } = useModalLogin();
    return (
        <div className="modalLoginApp">
            <button className="buttonLogin button-default" onClick={toggle}> Log In </button>
            <ModalLogin
                isShowing={isShowing}
                hide={toggle}
            />
        </div>
    );
};
export default Home;