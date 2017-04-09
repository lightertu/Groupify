import React from 'react'
import FormCard from './FormCard';

export const SendForm = (props) => (
    <div className="row">
    <div className="col-md-4 col-md-offset-4">
        <h1 className="ui header">Send Form</h1>
            <div class="ui four cards">
                <FormCard/>
                <br/>
                <br/>
                <FormCard/>
                <br/>
                <br/>
                <FormCard/>
            </div>
    </div>
    </div>
)

SendForm.propTypes = {
    doubleAsync: React.PropTypes.func.isRequired,
    increment: React.PropTypes.func.isRequired
}

export default SendForm
