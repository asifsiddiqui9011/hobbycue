import "./Hero.css"
import hero from "../../assets/hero.png"
import Signin from "../Signin/Signin"


const Hero = () => {

  
  
  return (
    <div className="hero-container">
      <div className="signin-content">
      <div className="content-container" >
         <h1>Explore your <span style={{color:"#0096C8"}}>hobby</span> or <span style={{color:"#8064A2"}}>passion</span></h1>
         <p>Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
         </p>
         <p>If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products,  services or events.  Hop on your hobbyhorse and enjoy the ride.</p>
      </div>
      <Signin/>
      </div>
      
      <img src={hero} alt="" className="hero-img"/>
    </div>
  )
}

export default Hero
