import "./Banner.css"
import bannerImg from "../../images/imgbanner.jpeg"

const Banner = () => {
return (
<>
<div className="showBanner">
<a href="https://revistaconciencia.com/ver-articulo/eventos/2016-07-observacion-de-aves-en-pance/">
    <img className="bannerImg" src={bannerImg} alt="Banner Aves"/>
</a></div>
</>
);
}
export default Banner