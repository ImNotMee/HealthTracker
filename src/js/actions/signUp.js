import {_getUserHash} from './login';

const log = console.log;

export const addUser = (ctx, newUser) => {
    log('Adding user...');
    const userList = ctx.state.users;
    const loginUserIdMap = ctx.state.loginUserIdMap;
    
    userList.push(newUser);
    loginUserIdMap[newUser.getHash()] = newUser
    ctx.setState({
        users: userList,
        loginUserIdMap: loginUserIdMap
    });
}

export const signUpUser = (signUpCtx) => {
    log('Creating user...')
    const inputs = signUpCtx.state;
    const newUser = new User(inputs.first, inputs.last,
         inputs.email, inputs.password, inputs.accountType, inputs.sex);
    signUpCtx.props.addUserHandler(newUser);
    log('User successfully added')
    _clearSignUpInputs(signUpCtx);
}

export class User {
    constructor(firstName, lastName, email, password, accountType, sex) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.accountType = accountType;
        this.sex = sex;
        this.hash = this.email + this.password;
    }

    getHash = () => {
        return this.hash;
    }
    
}

const _clearSignUpInputs = (ctx) => {
    ctx.setState({
        first: '',
        last: '',
        email: '',
        password: '',
        sex: '',
        accountType: '',
    });

}
