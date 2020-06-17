const log = console.log;

export const setActiveUser = (app, user) => {
    app.setState({
        activeUser: user
    })
}

export const onLogin = (landingPage, email, password) => {
    const authKey = _getUserHash(email, password);
    const user = getUserByAuthKey(landingPage, authKey)

    // check login attempt
    if (user === null) {
        landingPage.setState({
        invalidLogin: true
      })
    } else {
        landingPage.setState({
            userEmail: email, 
            userPassword: password,
            invalidLogin: false
        });

        landingPage.props.setActiveUserHandler(user)
    }
}

export const _getUserHash = (email, password) => {
    return (email + password);
}

export const getUserByAuthKey = (ctx, authKey) => {
    const userId = ctx.state.loginUserIdMap[authKey]
    if (userId === undefined) {
        log("Invalid aogin attempt. Try again")
        return null;
    }
    log("Successful login")
    return getUserById(ctx, userId);
}

export const getUserById = (ctx, id) => {
    return ctx.state.users[id];
}