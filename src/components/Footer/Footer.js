import '../Footer/Footer.css'
import {FaFacebookF, FaTwitter, FaGooglePlusG, FaLinkedinIn, FaInstagram} from 'react-icons/fa'


const Footer = () => {
    return(
        <>
            <div className="page-footer">
                <div>
                    <div className="background-footer-1">
                        <div className="container">
                            <div className="row py-3 d-flex align-items-center">
                                <div className="col-md-6 col-lg-5 text-center text-md-left mb-4 mb-md-0">
                                    <h5 className="mb-0 text-white">Get connected with us on social networks!</h5>
                                </div>

                                <div className="col-md-6 col-lg-7 text-center text-md-right">
                                    <a className="fb-ic">
                                        <FaFacebookF color="danger" className="icoSocials"/>
                                    </a>
                                    <a class="tw-ic">
                                        <FaTwitter className="icoSocials"/>
                                    </a>
                                    <a class="gplus-ic">
                                        <FaGooglePlusG className="icoSocials"/>
                                    </a>
                                    <a class="li-ic">
                                        <FaLinkedinIn className="icoSocials"/>
                                    </a>
                                    <a class="ins-ic">
                                        <FaInstagram className="icoSocials"/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container text-left text-md-left-mt-5">
                    <div className="row mt-3">
                        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-0">
                            <h6 className="text-uppercase font-weight-bold">akademy</h6>
                            <hr className="deep-purple accent-2 mb-3 mt-0 d-inline-block mx-auto"></hr>
                            <p>Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                            consectetur
                            adipisicing elit.</p>
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-0">
                            <h6 className="text-uppercase font-weight-bold">Courses</h6>
                            <hr className="deep-purple accent-2 mb-3 mt-0 d-inline-block mx-auto"></hr>
                            <p>
                                <a href="#!">HTML and CSS</a>
                            </p>
                            <p>
                                <a href="#!">Javascript</a>
                            </p>
                            <p>
                                <a href="#!">React</a>
                            </p>
                            <p>
                                <a href="#!">Ver mas...</a>
                            </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-0">
                            <h6 className="text-uppercase font-weight-bold">Contact</h6>
                            <hr className="deep-purple mb-3 mt-0 d-inline-block mx-auto"></hr>
                            <p>
                                <i className="fas fa-home mr-3"></i> Tucuman    , Argentina
                            </p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i> info.akademy@gmail.com
                            </p>
                            <p>
                                <i className="fas fa-phone mr-3"></i> + 54 (381) - 
                            </p>
                        </div>
                    </div>
                </div>

                <div className="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="#"> aKademy Courses</a>
                </div> 
            </div>
        </>
    );
}

export default Footer;