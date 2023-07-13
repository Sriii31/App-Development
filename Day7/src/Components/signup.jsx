import React, { useState } from 'react';
import './LoginForm.css';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const[Name,setname]=useState('');
    const[pincode,setpincode]=useState('');
    const[phonenumber,setPhonenumber]=useState('');
    const[adhaarnumber,setAdhaarNumber]=useState('')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const[confirmpassword,setConfrimpassword]=useState('');
    const Navigate = useNavigate();
    const eventNavigate=()=>{
        Navigate("/")
    }
    const handleName =(event)=>{
        setname(event.target.value);
  }
  const handlepincode=(event)=>{
    setpincode(event.target.value);
  }
  const handlePhonenumber=(event)=>{
    setPhonenumber(event.target.value);
  }
  const handleAdhaarChange = (event) => {
    setAdhaarNumber(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  }
  const handleConfrimpasswordChange =(event)=>{
    setConfrimpassword(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    document.write('Successfully registerd');
    console.log('Name:',Name);
    console.log('Pincode:',pincode);
    console.log('PhoneNumber:',phonenumber);
    console.log('Adhaar Number:',adhaarnumber);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('confrimPassword:',confirmpassword);
  };

  return (
    <div className="down">
    <div className="login-form">
      <h2>Register</h2>
      <div onSubmit={handleSubmit}>
        <input
        type="name"
        placeholder='Name'
        value={Name}
        onChange={handleName}
        required
        />
        <input
        type="Pincode"
        placeholder='Pincode'
        value={pincode}
        onChange={handlepincode}
        required
        />
        <input
        type="phonenumber"
        placeholder='Phone Number'
        value={phonenumber}
        onChange={handlePhonenumber}
        required
        />
        <input
          type="adhaarnumber"
          placeholder="Adhaar Number"
          value={adhaarnumber}
          onChange={handleAdhaarChange}
          required
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={handleEmailChange}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={handlePasswordChange}
          required
        />
        <input
        type="password"
        placeholder="Confrim Password"
        value={password}
        onChange={handleConfrimpasswordChange}
        required
        />
        <button type="submit" onClick={eventNavigate}>Register</button>
        {/* <link>Sign up</link> */}
      </div>
    </div>
    </div>
  );
};

export default Signup;
