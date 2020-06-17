import React, {Component} from 'react';

class LoginForm extends Component {

    constructor(props) {
        super(props);
        this.state= {
            email: "",
            password:"",
            invalidLogin: false
        };
    }

    // TODO: temp hack to force render
    componentDidUpdate(props) {
        if (props.invalidLoginStatus !== this.props.invalidLoginStatus) {
            this.setState({
                invalidLogin: props.invalidLoginStatus
            })
        }
    }

    loginInputHandler = (event) => {
        const TARGET = event.target;
        this.setState({
            [TARGET.name]: TARGET.value,
        });
    }

    render() {
        return (  
            <div id="LoginFrom">
                <input className={`text-input ${this.props.invalidLoginStatus ? 'invalidInput' : ''}`}
                       type="email" 
                       value={this.state.email}
                       onChange={this.loginInputHandler}
                       placeholder="email"
                       name="email"
                />
                <input className={`text-input ${this.props.invalidLoginStatus ? 'invalidInput' : ''}`}
                       type="password" 
                       value={this.state.password} 
                       onChange={this.loginInputHandler}
                       name="password"
                       placeholder="password"
                />
                <button className="primary-btn" onClick={() => {this.props.loginHandler(this.state.email, this.state.password)}}> login </button>
            </div>
        );
    }
}

export default LoginForm;