import '../styles/landing.css';
import { useState } from 'react'
import FormRegister from '../components/FormRegister/FormRegister';
import FormRegisterSuccess from '../components/FormRegister/FormRegisterSuccess';

const LandingPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    function submitForm() {
        setIsSubmitted(true);
    }

    return(
        <>
            <div className="cover-landing">
                <div className="background-landing cover-background-landing"></div>
                <div className="cover-shadow-landing"></div>
                <div className="container cover-content-landing">
                    <div className="b-container2 d-none d-lg-block"></div>
                    <div className="row d-flex justify-content-center">
                        <div className="my-5 col-sm-12 col-lg-5 text-white">
                            <div>
                                <h3>COURSES A<span className="text-danger">K</span>ADEMY</h3>
                                <hr className="deep-purple accent-2 mb-3 mt-0 d-inline-block mx-auto"></hr>
                                <p className="mt-2">We invite you to try some of the many courses offered by this learning platform.</p>
                                <p>The programming courses we offer are the future, increase your income immediately after finishing one of our courses, don't miss it!</p>
                            </div>
                        </div>
                        <div className="col-1 p-0"></div>
                        <div className="my-5 col-sm-12 col-lg-5 text-white">
                            {!isSubmitted ? (
                                <FormRegister submitForm={submitForm} />
                            ) : (
                                <FormRegisterSuccess />
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage