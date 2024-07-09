import "./Community.css"
import communityImg from "../../assets/community.png"
import Button from "react-bootstrap/esm/Button"


const Community = () => {
  return (
    <div className="community-container">
       
       <div>
            <h3>Your <span style={{color:"#8064A2"}}>Hobby</span>, Your <span style={{color:"#0096C8"}}>Community...</span></h3>
            <Button variant="primary" style={{backgroundColor:"#8064A2",border:"1px solid #8064A2"}}>Get Started</Button>
       </div>

       <div>
           <img src={communityImg} alt="" className="cmnty-img"/>
       </div> 

    </div>
  )
}

export default Community
