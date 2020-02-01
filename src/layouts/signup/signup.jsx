import React from 'react';
import './signup.css'
import SignupController from '../../controllers/signup'
class Signup extends React.Component {
    signup = async () => {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        let login = await SignupController.signup(email, password);

    }

    login = () => {
        this.props.history.push('/login');
    }

    render() {
        return (
            <div className="wholePage">
                <div className="loginWrap">
                    <div>
                        <img className="loginHeadLogo" src="https://www.cloudjojo.com/wp-content/uploads/2017/01/AWS-SES-logo.jpg" alt="" srcset="" />
                    </div>
                    <div className="loginEmail">
                        <input className="loginEmailInput" placeholder="Email" type="email" name="email" id="email" />
                    </div>
                    <div className="loginPass">
                        <input className="loginPassInput" placeholder="Password" type="password" name="password" id="password" />
                    </div>
                    <div className="loginLoginButton" >
                        <input className="loginButtonInput" type="button" value="SIGNUP" onClick={()=> {this.signup()}}/>
                    </div>
                    <div className="signupText" onClick={() => {this.login()}} >
                        Already a User? Login
                    </div>
                </div>
            </div>
        )
    }
}

export default Signup