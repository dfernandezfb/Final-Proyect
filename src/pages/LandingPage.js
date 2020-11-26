import '../styles/landing.css';
import FormLogin from '../components/FormLogin/FormLogin';


const LandingPage = () => {
    return(
        <>
            <div className="cover">
                <div className="background-landing cover-background"></div>
                <div className="cover-shadow"></div>
                <div className="container cover-content">
                    <div className="row textColorLanding">
                        <div className="square col-sm-12 col-lg-5">
                            <div>
                                <h3>Cursos a<span className="text-danger">K</span>ademy</h3>
                                <p>Te invitamos a probar algunos de los muchos cursos que ofrece esta plataforma de aprendizaje.</p>                                <p>Los cursos que ofrecemos de programacion son el futuro, incrementa tus ingresos de forma inmediata al terminar uno de nuestros cursos, no te lo pierdas!</p>
                            </div>
                        </div>
                        <div className="col-1 p-0"></div>
                        <div className="square col-sm-12 col-lg-5">
                            <FormLogin/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPage