import React, { Component } from 'react';
import classes from './Login.module.css';
import { faGoogle } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Login extends Component {

  render() {
    
  return (
    <div className={classes.Login}>
        <div className={classes.Container}>
            <div className={classes.Head}>
                <h3>Sample Company</h3>
                <p>Login to Sample Company to view</p>
            </div>
            <div className={classes.Body}>
                <div className={classes.Form}>
                    <input type="text" placeholder="Username or email address"/>
                    <input type="password" placeholder="Password"/>
                    <div className={classes.Forgot}><a href="#/">Forgot Password?</a></div> 
                    <div><button className={classes.Continue}>Continue</button></div>
                    <div className={classes.SignUp}><p>Don't have an account? <a href="#/">Sign Up</a></p></div>   
                    <div>OR</div>
                    <button className={classes.Google}>
                    <span><FontAwesomeIcon Icon={faGoogle} /></span>
                    <span>Continue to Google</span>
                    </button>
                    
                </div>
            </div>
        </div>
    </div>
    
  );
}
}

export default Login;
