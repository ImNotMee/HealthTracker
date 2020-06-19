import React, { Component } from 'react'
import { Redirect, Route, Switch, BrowserRouter } from 'react-router-dom'

import LandingPage from './js/components/LandingPage'

import { setActiveUser } from './js/actions/login'

import './App.css'
import Overview from './js/components/Overview'
import Sidebar from './js/components/SideBar'

class App extends Component {
    // TODO: fix prop drilling for active user
    state = {
        activeUser: null,
    }

    checkLoginState = () => {
        if (this.state.activeUser === null) {
            return <Redirect to="/signup" />
        }
        return <Redirect to="/" />
    }

    render() {
        return (
            <div className="App">
                <div>
                    <BrowserRouter>
                        {this.checkLoginState()}
                        <Switch>
                            {' '}
                            {/* Similar to a switch statement - shows the component depending on the URL path */}
                            {/* Each Route below shows a different component depending on the exact path in the URL  */}
                            <Route
                                exact
                                path="/signup"
                                render={() => (
                                    <LandingPage
                                        state={this.state}
                                        setActiveUserHandler={(user) => {
                                            setActiveUser(this, user)
                                        }}
                                    />
                                )}
                            />
                            <Route path="/" render={() => <div></div>} />
                        </Switch>
                    </BrowserRouter>
                </div>
            </div>
        )
    }
}

export default App
