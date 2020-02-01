import React from 'react';
import './login.css'
import LoginController from '../../controllers/login'
class Login extends React.Component {
    login = async () => {
        let email = document.getElementById('email').value;
        let password = document.getElementById('password').value;

        localStorage.setItem("sesToken","dummy")
        this.props.history.push('/home')
        // let login = await LoginController.login(email, password);

    }
    signup = () =>{
        this.props.history.push('/signup');

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
                        <input className="loginButtonInput" type="button" value="LOGIN" onClick={()=> {this.login()}}/>
                    </div>
                    <div className="signupText" onClick={() => {this.signup()}} >
                        New user? Signup
                    </div>
                </div>
            </div>
        )
    }
}

export default Login