import React from 'react'

export const Login = (props) => (
    <div>
        <div className="ui card login">
            <div className="content">
                <div className="header text-center">Login</div>
            </div>
            <form className="ui form container">
                <div className="field">
                <label>First Name</label>
                <input type="text" name="first-name" placeholder="First Name"/>
                </div>
                <div className="field">
                    <label>Last Name</label>
                    <input type="text" name="last-name" placeholder="Last Name"/>
                </div>
                <button className="ui basic button" type="submit">Submit</button>
            </form>
            <div className="extra content text-center">
                <a>Is this your first time?  Click here.</a>
            </div>
        </div>
    </div>
)

Login.propTypes = {
    counter: React.PropTypes.number.isRequired,
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
}

export default Login
