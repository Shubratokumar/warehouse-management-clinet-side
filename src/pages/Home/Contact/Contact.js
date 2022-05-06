import React from "react";
import { toast } from 'react-hot-toast';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../../firebase.init";
import "./Contact.css";

const Contact = () => {
    const [user ] = useAuthState(auth);

    const handleSubmitForm = event =>{
        event.preventDefault()
        toast.success("Thanks for your information submisssion. We will contact you soon. ")
        event.target.reset() 
    }
  return (
    <div className="contact-container">
      <div className="container py-5">
        <h2 className="text-center text-white title">CONTACT</h2>
        <p className="text-center sub-title text-white">Feel free to contact with us. We'd love to hear what you think about us!</p>
        <div className="contact-form w-75 mx-auto mt-4 shadow p-4 rounded">
          <form onSubmit={handleSubmitForm}>
            <div className="mb-3">
              <label className="form-label">Your Email</label>
              <input
                type="text"
                value={user?.email}
                className="form-control"
                readOnly
                disabled
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Your Name</label>
              <input
                type="text"
                name="name"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Subject</label>
              <input
                type="text"
                name="supplier"
                className="form-control"
                required
              />
            </div>
            <div className="mb-3">
              <label className="form-label">Message</label>
              <textarea
                type="text"
                name="description"
                className="form-control"
                required
              />
            </div>                        
            <div className="text-center pb-4">
              <button type="submit" className="white-btn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
