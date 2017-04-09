import React from 'react'

export const Welcome = (props) => (
    <div className="conainter text-center">
        <h1 className="ui header">WELCOME <i>to Team Divider...</i></h1>

        <p>If this is your first time start by building a form.</p>
        <br />
        <br />
        <div className="buttons">
            <button className="ui labeled icon button black basic button">
                <i className="write icon"></i>
                Create Form
            </button>
            <button className="ui labeled icon button black basic button">
                <i className="send icon"></i>
                Send Form&nbsp;&nbsp;
            </button>
            <button className="ui labeled icon button black basic button">
                <i className="users icon"></i>
                Classes&nbsp;&nbsp;&nbsp;&nbsp;
            </button>
        </div>

    </div>
)

Welcome.propTypes = {
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
}

export default Welcome
