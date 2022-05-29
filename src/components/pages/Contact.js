import React, {useState} from 'react';

export default function Contact() {
  const [Name, setName] = useState("")
  const [Email, setEmail] = useState("")
  const [Phone, setPhone] = useState("")
  const [Message, setMessage] = useState("")

const handleSubmit = (event) => { 
  event.preventDefault()
  setName("");
  setPhone("");
  setMessage("");
  setEmail("");
}
  return (
    <>
    <div>
      <h1 style={{color:"purple"}}>Contact Page</h1>
    </div>
    <div className="row d-flex justify-content-center">
    <form className="form-group col-6">
      <label className="text-bold text-dark" >Name</label>
    <input type="text" className="form-control mb-3"/>
      <label className="text-bold text-dark">Email</label>
    <input type="text" className="form-control mb-3"/>
      <label className="text-bold text-dark">Phone</label>
    <input type="text" className="form-control mb-3"/>
      <label className="text-bold text-dark">Message</label>
    <textarea className="form-control mb-3"/>
    <button onClick={{handleSubmit}} className="btn btn-info">Submit</button>
    </form>
    </div>
    </>
    
  );
}
