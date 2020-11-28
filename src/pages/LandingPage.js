import '../styles/landing.css';
import FormLogin from '../components/FormLogin/FormLogin';
import Footer from '../components/Footer/Footer'

const LandingPage = () => {
    return(
        <>
            <div className="cover-landing">
                <div className="background-landing cover-background-landing"></div>
                <div className="cover-shadow-landing"></div>
                <div className="container cover-content-landing">
                    <div className="row d-flex justify-content-center">
                        <div className="square col-sm-12 col-lg-5 text-white">
                            <div>
                                <h3>Cursos a<span className="text-danger">K</span>ademy</h3>
                                <p>Te invitamos a probar algunos de los muchos cursos que ofrece esta plataforma de aprendizaje.</p>
                                <p>Los cursos que ofrecemos de programacion son el futuro, incrementa tus ingresos de forma inmediata al terminar uno de nuestros cursos, no te lo pierdas!</p>
                            </div>
                        </div>
                        <div className="col-1 p-0"></div>
                        <div className="square col-sm-12 col-lg-5 text-white">
                            <FormLogin/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
            
        </>
    );
}

export default LandingPage