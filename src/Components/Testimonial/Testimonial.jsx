import "./Testimonial.css"
import dancer from "../../assets/dancer.png"
import Form from 'react-bootstrap/Form';
const Testimonial = () => {
  return (
    <div className="testimonial-container">
        <div className="testimonial-div">
            <div><h3>Testimonials</h3></div>
            <div><p>In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an excellent idea and I highly recommend it.</p></div>
            <div className="audio-div">

                    <div className="audio">
                        <div className="input-div">
                            <div className="play-btn">
                               <svg width="11" height="14" viewBox="0 0 11 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M0 1.82001V12.18C0 12.97 0.87 13.45 1.54 13.02L9.68 7.84001C10.3 7.45001 10.3 6.55001 9.68 6.15001L1.54 0.980008C0.87 0.550008 0 1.03001 0 1.82001Z" fill="#8064A2"/>
                                </svg>
                            </div>
                           &nbsp;
                              
                              <input type="range" className="input-range" />
                           0.00
                         </div>
                         <div className="audio-img">
                              <img src={dancer} alt="" style={{height:"60px"}} />
                              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mic">
                                     <path d="M15.9998 18.6666C18.2132 18.6666 19.9998 16.88 19.9998 14.6666V6.66663C19.9998 4.45329 18.2132 2.66663 15.9998 2.66663C13.7865 2.66663 11.9998 4.45329 11.9998 6.66663V14.6666C11.9998 16.88 13.7865 18.6666 15.9998 18.6666ZM23.8798 14.6666C23.2265 14.6666 22.6798 15.1466 22.5732 15.8C22.0265 18.9333 19.2932 21.3333 15.9998 21.3333C12.7065 21.3333 9.97315 18.9333 9.42649 15.8C9.31982 15.1466 8.77315 14.6666 8.11982 14.6666C7.30649 14.6666 6.66649 15.3866 6.78649 16.1866C7.43982 20.1866 10.6398 23.32 14.6665 23.8933V26.6666C14.6665 27.4 15.2665 28 15.9998 28C16.7332 28 17.3332 27.4 17.3332 26.6666V23.8933C21.3598 23.32 24.5598 20.1866 25.2132 16.1866C25.3465 15.3866 24.6932 14.6666 23.8798 14.6666Z" fill="white"/>
                              </svg>
                         </div>
                    </div>
                   
                    <div className="dancer">
                        <img src={dancer}alt="" className="dancer-img" />
                        <div>
                            <h5>Shubha Nagarajan</h5>
                            <p>Classical Dancer</p>
                        </div>
                    </div>
             </div>
          </div>
    </div>
  )
}

export default Testimonial
