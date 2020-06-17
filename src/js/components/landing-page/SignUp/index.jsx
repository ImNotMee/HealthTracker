import React, {Component} from 'react';

class SignUpForm extends Component {

    render() {
        return (
            <div id="SignUpForm">
                <label htmlFor="firstName">First Name:
                    <input type="text" id="firstName" placeholder="First Name"/>
                </label>
                <label htmlFor="lastName">Last Name:
                    <input type="text" id="lastName" placeholder="Last Name"/>
                </label>
                <label htmlFor="email">Email:
                    <input type="email" id="email" placeholder="Email"/>
                </label>
                <label htmlFor="password">password:
                    <input type="password" id="password" placeholder="password"/>
                </label>
                <div>
                    <label htmlFor="male">Male <input type="radio" id="male" name="gender" value="male"/></label>
                    <label htmlFor="female">Female <input type="radio" id="female" name="gender" value="female"/> </label>
                </div>
                <button onClick={()=>{}}> Create Account </button>
            </div>
        );
    }
}

export default SignUpForm;