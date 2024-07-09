import "./Signin.css"
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from "react";


const Signin = () => {


    const [popup,setpopup]=useState('signin')


  const handle=(e)=>{
    setpopup(e)
  }



  return (
    <div>
       <div className="signup-container">
                  <div className="signin-div">
                  
                    <h4 onClick={()=>{handle('signin')}}>Sign In {popup==='signin'?<hr />:''}</h4>
                    <h4 onClick={()=>{handle('join')}}>Join In {popup==='join'?<hr />:''}</h4>
             
                  </div>
                  <Button variant="outline-secondary" size="lg">
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_1_1906)">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M3.44813 8.00005C3.44813 7.48043 3.53438 6.98218 3.6885 6.51493L0.992253 4.45605C0.466753 5.52293 0.170753 6.72518 0.170753 8.00005C0.170753 9.27393 0.466503 10.4753 0.991128 11.5416L3.68588 9.47868C3.53325 9.01355 3.44813 8.51718 3.44813 8.00005Z" fill="#FBBC05"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.18212 3.27275C9.311 3.27275 10.3306 3.67275 11.1317 4.32725L13.4622 2C12.0421 0.763625 10.2214 0 8.18212 0C5.01612 0 2.29512 1.8105 0.992249 4.456L3.68837 6.51487C4.30962 4.62912 6.0805 3.27275 8.18212 3.27275Z" fill="#EA4335"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.18212 12.7274C6.08062 12.7274 4.30975 11.371 3.6885 9.48523L0.992249 11.5437C2.29512 14.1896 5.01612 16.0001 8.18212 16.0001C10.1361 16.0001 12.0017 15.3062 13.4019 14.0062L10.8426 12.0277C10.1205 12.4826 9.21112 12.7274 8.18212 12.7274Z" fill="#34A853"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.8293 8.00022C15.8293 7.52747 15.7564 7.01834 15.6471 6.54572H8.18213V9.63659H12.4791C12.2642 10.6905 11.6795 11.5006 10.8426 12.0278L13.4019 14.0063C14.8726 12.6413 15.8293 10.6078 15.8293 8.00022Z" fill="#4285F4"/>
                        </g>
                        <defs>
                        <clipPath id="clip0_1_1906">
                        <rect width="16" height="16" fill="white"/>
                        </clipPath>
                        </defs>
                      </svg>
                      &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; <b> Continue with Google</b>
                  </Button>
                  <Button variant="outline-secondary" size="lg">
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g clip-path="url(#clip0_31103_310)">
                          <path d="M15.9 8C15.9 11.9027 13.0699 15.1445 9.35 15.785V10.4125H11.1141H11.1999L11.2129 10.3277L11.5676 8.01516L11.5853 7.9H11.4688H9.35V6.49931C9.35 6.19752 9.42409 5.91182 9.60483 5.70282C9.78323 5.49653 10.0785 5.35 10.5537 5.35H11.5625H11.6625V5.25V3.28125V3.19687L11.5793 3.18268L11.5625 3.28125L11.5793 3.18267L11.5793 3.18266L11.5791 3.18264L11.5785 3.18254L11.5764 3.18219L11.5683 3.18084L11.5372 3.17579C11.5101 3.17146 11.4705 3.16529 11.4203 3.1579C11.32 3.14313 11.1772 3.12345 11.0068 3.10379C10.6666 3.0645 10.2147 3.025 9.77172 3.025C8.83783 3.025 8.05466 3.30837 7.50485 3.8587C6.95494 4.40912 6.65 5.21504 6.65 6.2375V7.9H4.71875H4.61875V8V10.3125V10.4125H4.71875H6.65V15.785C2.93015 15.1445 0.1 11.9027 0.1 8C0.1 3.63695 3.63695 0.1 8 0.1C12.3631 0.1 15.9 3.63695 15.9 8Z" fill="#1877F2" stroke="white" stroke-width="0.2"/>
                          <path d="M6.75 10.2125H4.81875V8.1H6.75H6.85V8V6.2375C6.85 5.25496 7.14223 4.50463 7.64634 4.00005C8.15054 3.49538 8.87824 3.225 9.77172 3.225C10.204 3.225 10.6475 3.26363 10.9839 3.30246C11.1518 3.32186 11.2926 3.34125 11.3912 3.35577C11.4182 3.35975 11.4421 3.36336 11.4625 3.36651V5.15H10.5537C10.0351 5.15 9.67856 5.31179 9.45354 5.572C9.23087 5.82949 9.15 6.16845 9.15 6.49931V8V8.1H9.25H11.3522L11.0282 10.2125H9.25H9.15V10.3125V15.8168C8.7746 15.8716 8.39066 15.9 8 15.9C7.60934 15.9 7.22537 15.8716 6.85 15.8168V10.3125V10.2125H6.75Z" fill="white" stroke="white" stroke-width="0.2"/>
                          </g>
                          <defs>
                          <clipPath id="clip0_31103_310">
                          <rect width="16" height="16" fill="white"/>
                          </clipPath>
                          </defs>
                      </svg>
                     &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  <b>Continue with Facebook</b>
                  </Button>
                  <div className="or-div"><hr style={{width:"35%"}} />&nbsp;  <b>Or connect</b> &nbsp; <hr style={{width:"35%"}} /></div>
                  <Form.Control size="lg" type="email" placeholder="Enter email" />
                  <Form.Control size="lg" type="email" placeholder="Enter email" />
                  {popup=='join'?
                  
                  <div>
                    <p>By continuing, you agree to our <b>Terms of Service</b> and  <b>Privacy Policy.</b></p>
                  </div>
                  :
                  
                  <div className="forget-div">
                  
                      <Form.Check
                      required
                      label="Remember Me"
                      feedback="You must agree before submitting."
                      feedbackType="invalid"
                      />
                      <p><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <g clip-path="url(#clip0_1_5013)">
                              <path d="M11.8194 5.33334H11.1628V4.00001C11.1628 2.16001 9.69193 0.666672 7.8796 0.666672C6.06727 0.666672 4.59639 2.16001 4.59639 4.00001V5.33334H3.93975C3.21744 5.33334 2.62646 5.93334 2.62646 6.66667V13.3333C2.62646 14.0667 3.21744 14.6667 3.93975 14.6667H11.8194C12.5418 14.6667 13.1327 14.0667 13.1327 13.3333V6.66667C13.1327 5.93334 12.5418 5.33334 11.8194 5.33334ZM7.8796 11.3333C7.15729 11.3333 6.56631 10.7333 6.56631 10C6.56631 9.26667 7.15729 8.66667 7.8796 8.66667C8.6019 8.66667 9.19288 9.26667 9.19288 10C9.19288 10.7333 8.6019 11.3333 7.8796 11.3333ZM5.90967 5.33334V4.00001C5.90967 2.89334 6.78957 2.00001 7.8796 2.00001C8.96962 2.00001 9.84952 2.89334 9.84952 4.00001V5.33334H5.90967Z" fill="#939CA3"/>
                              </g>
                              <defs>
                              <clipPath id="clip0_1_5013">
                              <rect width="15.7594" height="16" fill="white"/>
                              </clipPath>
                              </defs>
                          </svg>
                          Forget password?
                      </p>
                    </div>
                    }
                    {
                    popup=='signin'?
                      <Button variant="primary" size="lg" style={{backgroundColor:"#8064A2",border:"1px solid #8064A2 "}}>Continue</Button>
                    :
                      <Button variant="primary" size="lg" style={{backgroundColor:"#8064A2",border:"1px solid #8064A2 "}}>Agree and Continue</Button>
                    }
                    
                    
                </div>
    </div>
  )
}

export default Signin
