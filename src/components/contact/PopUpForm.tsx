import Link from 'next/link'
import React, { useState } from 'react'
import Modal from 'react-modal'

const PopUpForm = ({ isSmall = false }) => {
   const [isOpen, setIsOpen] = useState(false)
   const customStyles = {
      overlay: {
         backgroundColor: 'rgba(0, 0, 0, 0.6)',
         position: 'fixed',
      },
      content: {
         top: '50%',
         left: '50%',
         right: 'auto',
         bottom: 'auto',
         marginRight: '-50%',
         transform: 'translate(-50%, -50%)'
      }
   }
   const buttonClass = isSmall ? "theme-btn theme-btn-small border-btn" : "theme-btn border-btn";
   return (
      <div>
         <button className={buttonClass} onClick={() => setIsOpen(true)}>Request a Quote</button>
         {/* <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}> */}
         <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={{
            overlay: {
               position: 'fixed',
               top: 0,
               left: 0,
               right: 0,
               bottom: 0,
               backgroundColor: 'rgba(0, 0, 0, 0.3)',
               zIndex: 1000
            },
            content: {
               top: '50%',
               left: '50%',
               right: 'auto',
               bottom: 'auto',
               maxWidth: '700px',
               // marginRight: '-50%',
               transform: 'translate(-50%, -50%)',
               borderRadius: '20px'
            }
         }}>
            <div className='popupx'>
               <div className="popup-form my-2">
                  <form id="contact-form">
                     <div className="row justify-content-center">
                        <div className="col-12 d-flex justify-content-center">
                           <h3 className='popup-heading'>Request a Callback!</h3>
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                           <input type="text" placeholder="Your Name" />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                           <input type="email" placeholder="Email Adress" />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                           <input type="text" placeholder="Phone" />
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                           <textarea placeholder="Write Massage (Optional)"></textarea>
                        </div>
                        {/* <div className="col-xxl-6 col-xl-6 col-lg-6 mx-auto">
                           <button type="submit" className="theme-btn border-btn">Send Message</button>
                        </div> */}
                        <div className="col d-flex justify-content-center">
                           <button type="submit" className="theme-btn-custom border-btn">Submit</button>
                        </div>
                     </div>
                  </form>
               </div>
            </div>
         </Modal>
      </div>
   )
}
export default PopUpForm

{/* <div className="kslider--btn">
            <Link href="/service" className="theme-btn" onClick={(e) => {
               e.stopPropagation();
               setIsOpen(true)
            }}>
               Request a Quote
            </Link>
         </div> */}