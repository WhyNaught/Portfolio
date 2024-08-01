import {Link, useMatch, useResolvedPath} from "react-router-dom"

function SocialLink({socialURL, socialImage}) {
    return (
        <li>
            <a href ={socialURL}>
                <img className = { socialImage === "/assets/github-logo.png" ? "github-logo" : "social-logo"} src = {socialImage}></img>
            </a>
        </li>
    )
}

export default function Home() {
    return (
        <div className="homepage">
            <div className = "animation-container">
                <h1 className = 'animated-title'>Hey There, I'm Umar 👋 </h1>
            </div>
            <div className="home-widgets">
                <div className="about-home">
                    <h3 className = "brief-desc">
                        Nice to meet you! I'm an aspiring software engineer entering the University
                        of Waterloo for Computer Science this fall. 
                    </h3>
                    <Link to = "/about-me" className="learn-more-link">
                        <button className="learn-more">Learn More</button>
                    </Link>
                </div>
                <div className = "connections">
                    <h2>Let's Connect!</h2>
                    <div className = "links-box">
                        <ul className = "social-links">
                            <SocialLink className = "social-link" socialURL = "https://www.linkedin.com/in/umar-farooq-a8b237278/" socialImage = "/assets/LinkedIn-Logo.png"/>
                            <SocialLink className = "social-link"socialURL= "https://www.instagram.com/__umar_f/" socialImage="/assets/insta_logo.png"/>
                            <SocialLink className = "social-link"socialURL= "https://github.com/WhyNaught" socialImage= "/assets/github-logo.png"/>
                            <SocialLink className = "social-link"socialURL = "https://discordapp.com/users/522924427642404874" socialImage="/assets/discord-logo.png"/>
                        </ul>
                    </div>
                    <h3>Or Contact Me At umardxbfarooq@gmail.com</h3>
                </div>
            </div>
        </div>
    )
}
