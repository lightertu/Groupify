/**
 * Created by Matt on 16/05/17.
 */
import React from 'react';
import PropTypes from 'prop-types';
import {Label, Header, Button, Input, Dropdown} from 'semantic-ui-react';
import {Map, List, Set, OrderedSet} from 'immutable';

class MultiInputTextFieldQuestionView extends React.Component {
    render() {
        let answersFilterOptions = [];

        this.props.answersFilter.forEach((filter) => {
            answersFilterOptions.push({
                key:filter,
                value:filter,
                text:filter,
            })
        });

        this.props.answers.forEach((answer) => {
            answersFilterOptions.push({
                key:answer,
                value:answer,
                text:answer,
            })
        });

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
                                allowAdditions={!this.props.answersEnableFilter}
                                search
                                multiple
                                selection
                                options={answersFilterOptions}
                                className='icon'
                                value={this.props.answers.toArray()}
                                onChange={(e, data) => {
                                   this.props.setAnswer(this.props.index, Set(data.value)); 
                                }}
                                onAddItem={(e, data) => {
                                    this.props.addAnswer(this.props.index, data.value)
                                }}
                            />
                        </div>
                </segment> 
           </div>
       );
    }



}


export default MultiInputTextFieldQuestionView;
