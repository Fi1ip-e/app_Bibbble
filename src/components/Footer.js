import "./footer.css"
import LogoFooter from "../assets/logo-footer.png";
import Face from "../assets/face.png";
import Insta from "../assets/insta.png";
import Twitter from "../assets/twitter.png";
function Footer() {
    return (
        <div className="footer">
            <div className="container">
            <img className="logofooter" src={LogoFooter} />
            <hr className="division"/>

            <div className="caption" >
                    <p className="termo">Terms & Conditions</p>
                    <p className="privacy">Privacy Policy</p>
            
            </div>
            <div className="icons">
                <a target="_blank" href="https://pt-br.facebook.com/slideworks.cc/"><img className="iconLink" src={Face} /></a>
                <a target="_blank" href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoicHQifQ%3D%3D%22%7D"><img className="iconLink" src={Twitter} /></a>
                <a target="_blank" href="https://www.instagram.com/slideworks.cc/"><img className="iconLink" src={Insta} /></a>
            </div>
            </div>
        </div>
    )
}
export default Footer;