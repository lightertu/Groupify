/**
 * Created by Matt on 16/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Label, Header, Button, Input} from 'semantic-ui-react';
import {Map, List, Set, OrderedSet} from 'immutable';

class SingleInputTextFieldQuestionView extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center', paddingTop:30}} >
                <segment style={{textAlign: 'center'}} >
                    <Header as='h1' textAlign='center'>{this.props.title}</Header>
                    <Header as='h4' textAlign='center'>{this.props.tooltip}</Header>
                        <div style={{textAlign: 'center'}}>
                            <Input disabled = {this.props.isSubmitting}
                                loading = {this.props.isSubmitting} 
                                onBlur={(event) => {
                                    this.props.setName(event.target.value)
                                }}
                            />
                        </div>
                </segment> 
           </div>
       );
    }



}


export default SingleInputTextFieldQuestionView;
