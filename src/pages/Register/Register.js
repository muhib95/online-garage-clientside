
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import img from '../../assets/images/login/login.svg'
import { UserContext } from '../../AuthContext/AuthContext';

const Register = () => {
 const {handleRegister}=useContext(UserContext);
 const registerHandle=(event)=>{
  event.preventDefault();
  const form=event.target;
  const email=form.email.value;
  const password=form.password.value;
  handleRegister(email,password)
  .then((user) => {
   console.log(user);
  })
  .catch((error) => {
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
        <h1 className="text-5xl font-bold">Register</h1>
      <form onSubmit={registerHandle} className="card-body">
      <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input type="text" placeholder="name" className="input input-bordered" />
        </div>
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
            <p>Already have an account <Link to='/login' className="label-text-alt link link-hover">Login</Link></p>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Register</button>
        </div>
      </form>
    </div>
  </div>
</div>
    );
};

export default Register;