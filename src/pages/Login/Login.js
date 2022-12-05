import { GoogleAuthProvider } from 'firebase/auth';
import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { UserContext } from '../../AuthContext/AuthContext';
const Login = () => {
  let navigate=useNavigate();
  let location =useLocation();
  let from=location.state?.from?.pathname || "/";
  const {logIn,googleLogIn}=useContext(UserContext);
  const provider=new GoogleAuthProvider();
  const handleLogIn=(event)=>{
    event.preventDefault();
    const form=event.target;
    const email=form.email.value;
    const password=form.password.value;
    logIn(email,password)
    .then((user) => {
     console.log(user.user.email);
     const currentUser={
      email:user.user.email
     };
     fetch('http://localhost:5000/jwt',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(currentUser)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
      localStorage.setItem('genious-token',data.token)
      navigate(from,{replace:true});
    })
    
    
    })
    .catch((error) => {
     console.error(error);
    });
  
  }


  const handleGoogle=()=>{
    googleLogIn(provider)
    .then((result) => {
      const currentUser={
        email:result.user.email
       };
       fetch('http://localhost:5000/jwt',{
      method:'POST',
      headers:{
        'Content-Type':'application/json',
      },
      body:JSON.stringify(currentUser)
     })
     .then(res=>res.json())
     .then(data=>{
      console.log(data)
      localStorage.setItem('genious-token',data.token)
      navigate(from,{replace:true});
    })

      navigate(from,{replace:true});
      console.log(result.user.email);
    }).catch((error) => {
     console.error(error);
    });
  }
    return (
        <div className="hero ">
  <div className="hero-content flex-col lg:flex-row">
    <div className="text-center lg:text-left">
     <img src={img} alt="" />
    </div>
    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
        <h1 className="text-5xl font-bold">Log In</h1>
      <form onSubmit={handleLogIn} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input name='email' type="email" placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input name='password' type="password" placeholder="password" className="input input-bordered" />
          <label className="label">
            <p>New User <Link to='/register' className="label-text-alt link link-hover">Register</Link></p>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
      </form>
      <button onClick={handleGoogle} className="btn btn-primary">Google</button>
    </div>
  </div>
  
</div>
    );
};

export default Login;