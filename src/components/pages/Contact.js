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
      <h1>Contact Page</h1>
    </div>
    <div className="row d-flex justify-content-center">
    <form className="form-group col-6">
      <label className="text-muted">Name</label>
    <input type="text" className="form-control mb-3"/>
      <label className="text-muted">Email</label>
    <input type="text" className="form-control mb-3"/>
      <label className="text-muted">Phone</label>
    <input type="text" className="form-control mb-3"/>
      <label className="text-muted">Message</label>
    <textarea className="form-control mb-3"/>
    <button onClick={{handleSubmit}} className="btn btn-info">Submit</button>
    </form>
    </div>
    </>
    
  );
}
