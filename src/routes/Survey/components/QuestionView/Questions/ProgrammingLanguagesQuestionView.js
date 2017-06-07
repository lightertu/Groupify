/**
 * Created by Matt on 16/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Label, Header, Button, Input, Dropdown} from 'semantic-ui-react';
import {Map, List, Set, OrderedSet} from 'immutable';
import PROGRAMMING_LANGUAGES from './Constants'

class ProgrammingLanguagesQuestionView extends React.Component {
    render() {
        return (
            <div style={{textAlign: 'center', paddingTop:30}} >
                <segment style={{textAlign: 'center'}} >
                    <Header as='h1' textAlign='center'>{this.props.title}</Header>
                    <Header as='h4' textAlign='center'>{this.props.tooltip}</Header>
                        {((this.props.answersEnableMinimum) && (this.props.answersEnableMaximum)) ? 
                                <Header as='h5' textAlign='center'>
                                {'Must select at least ' + this.props.answersMinimum
                                    + ' and at most ' + this.props.answersMaximum}
                                </Header>
                            :
                                <Header as='h5' textAlign='center'>
                                    {(this.props.answersEnableMinimum) && 
                                    'Must select at least ' + this.props.answersMinimum}
                                    {(this.props.answersEnableMaximum) && 
                                        'Must select at most ' + this.props.answersMaximum}
                                </Header>
                        }
                        <div style={{textAlign: 'center'}}>
                            <Dropdown
                                disabled = {this.props.isSubmitting}
                                loading = {this.props.isSubmitting}
                                search
                                multiple
                                selection
                                options={PROGRAMMING_LANGUAGES}
                                className='icon'
                                onChange={(e, data) => {
                                   this.props.setAnswer(this.props.index, Set(data.value)); 
                                }}
                            />
                        </div>
                </segment> 
           </div>
       );
    }



}


export default ProgrammingLanguagesQuestionView;
