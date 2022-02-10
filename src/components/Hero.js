import heroGroupImg from "../styles/images/hero-group-img.png";

function Hero() {
    return (
        <div className="hero">
            <img src={heroGroupImg} className="hero-group-img" alt="compilation of experiences"/>
            <h1 className="page-title">Online Experiences</h1>
            <p className="about-page">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
        </div>
    )
}

export default Hero;