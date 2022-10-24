import logo from "../images/ironhack-logo-xs.png"
import menu from "../images/menu-top-xs.png"


function Header() {
    return (
        <header id="header">
            <div>
                <img src={logo} alt="Logo" />
                <img src={menu} alt="menu" id="img2"/>
            </div>
            <div>
                <h1>Say hello to ReactJS</h1>
                <p>You will learn how to use the most popular frontend library, and become a super Ninja developer.</p>
                <button>Awesome!</button>
            </div>
      
        </header> 
    );
}

export default Header;