"use client"

import Link from 'next/link'
import React, { useRef, useState } from 'react'
import Modal from 'react-modal'


const PopUpForm = ({ btnClass = "theme-btn border-btn", label = "Request a Quote" }) => {
   const buttonClass = btnClass;
   const [isOpen, setIsOpen] = useState(false)
   const [name, setName] = useState('');
   const [email, setEmail] = useState('');
   const [phone, setPhone] = useState('');
   const [message, setMessage] = useState('');
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

   const handleSubmit = (e: any) => {
      e.preventDefault();

      const msg = {
         name: name,
         email: email,
         phone: phone,
         message: message,
      };

      console.log(msg);

      fetch('https://matheng-server-97f213847229.herokuapp.com/contact', {
         method: 'POST',
         headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'POST,PATCH,OPTIONS'
         },
         body: JSON.stringify(msg)
      })

      setName("")
      setPhone("")
      setEmail("")
      setMessage("")

      setIsOpen(false)
   }

   return (
      <div>
         <button className={buttonClass} onClick={() => setIsOpen(true)}>{label}</button>
         {/* <Modal isOpen={isOpen} onRequestClose={() => setIsOpen(false)} style={customStyles}> */}
         <Modal isOpen={isOpen} ariaHideApp={false} onRequestClose={() => setIsOpen(false)} style={{
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
                  <form id="contact-form" onSubmit={handleSubmit}>
                     <div className="row justify-content-center">
                        <div className="col-12 d-flex justify-content-center">
                           <h3 className='popup-heading'>Request a Callback!</h3>
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                           <input type="text"
                              placeholder="Your Name"
                              value={name}
                              onChange={e => setName(e.target.value)}
                           />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                           <input type="email"
                              placeholder="Email Adress"
                              value={email}
                              onChange={e => setEmail(e.target.value)}
                           />
                        </div>
                        <div className="col-12 d-flex justify-content-center">
                           <input type="text"
                              placeholder="Phone"
                              value={phone}
                              onChange={e => setPhone(e.target.value)}
                           />
                        </div>

                        <div className="col-12 d-flex justify-content-center">
                           <textarea placeholder="Write Massage (Optional)"
                              value={message}
                              onChange={e => setMessage(e.target.value)}
                           ></textarea>
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