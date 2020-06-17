import React, {Component} from 'react';

import SignUpForm from '../SignUp'

class LandingContentWrapper extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div>
                    <SignUpForm/>
                </div>
                <div>

                </div>
            </div>
        );
    }
}

export default LandingContentWrapper;