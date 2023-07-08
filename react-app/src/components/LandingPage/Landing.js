import React from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import jello from "../../assets/Jello.jpg";
import frontPage from "../../assets/FontPage.jpg";
import "./landing.css";

const LandingPage = () => {
    const currentUser = useSelector((state) => state.session.user);
    const history = useHistory();

    if (currentUser) {
        history.push("/home");
    }

    const login = () => {
        history.push("/login");
    };

    const signup = () => {
        history.push("/signup");
    };

    return (
        <div>
            <div className="landing-Nav">
                <div className="logo-container">
                    <div className="logo-style">
                        <img src={jello} alt="Jello" className="logo" />
                    </div>
                    Jello
                </div>
                <div className="Creds">
                    <div className="landing-login" onClick={login}>
                        Log in
                    </div>
                    <div className="landing-SignUp" onClick={signup}>
                        Get Jello for free
                    </div>
                </div>
            </div>
            <div className="Info-Body">
                <div className="Wrapper">
                    <div className="Body">
                        <h1 className="header">
                            Jello brings all your tasks, teammates, and tools together
                        </h1>
                        <div className="text-body">Keep everything in the same place.</div>
                        <div className="SignUp-body" onClick={signup}>
                            Sign up
                        </div>
                    </div>
                    <div className="landing-background-img">
                        <img src={frontPage} alt="background" className="background" />
                    </div>
                </div>
            </div>
            <div className="about">
                <div className="developer">
                    <h4>Alex Kim</h4>
                    <a href="https://www.linkedin.com/in/alexgkim/">
                        <img  className="link-icons"src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png"></img>
                    </a>
                    <a href="https://github.com/Alex-Kim-SD">
                        <img className="link-icons"src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
                    </a>
                </div>
                <div className="developer">
                    <h4>Kim Harris</h4>
                    <a href="https://www.linkedin.com/in/scarlettrobe/">
                        <img  className="link-icons"src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png"></img>
                    </a>
                    <a href="https://github.com/scarlettrobe">
                        <img className="link-icons"src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
                    </a>
                </div>
                <div className="developer">
                    <h4>Peter Guan</h4>
                    <a href="https://www.linkedin.com/in/scarlettrobe/">
                        <img  className="link-icons"src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png"></img>
                    </a>
                    <a href="https://github.com/RetepG">
                        <img className="link-icons"src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
                    </a>
                </div>
                <div className="developer">
                    <h4>Joey Enright</h4>
                    <a href="https://www.linkedin.com/in/joey-enright-656057168/">
                        <img  className="link-icons"src="https://www.iconpacks.net/icons/2/free-linkedin-logo-icon-2430-thumb.png"></img>
                    </a>
                    <a href="https://github.com/Jojovial">
                        <img className="link-icons"src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
