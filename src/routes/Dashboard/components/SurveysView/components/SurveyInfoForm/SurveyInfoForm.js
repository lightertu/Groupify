/*
 * Created by Matt on 5/23/17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Form, Header, Icon, Modal, Segment, Divider, Table, Label, Menu, Popup, Checkbox } from 'semantic-ui-react'
import SurveyQuestionTable from './SurveyQuestionTable'
import QuestionTypes from '../../../../../../components/utils/QuestionType.js'

export default class SurveyInfoForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            name: props.name,
        }
    }

    handleChange = (e, {name, value}) => {
        switch (name) {
            case 'title':
                this.props.updateSurveyHolderSetTitle(e.target.value);
                break;
            default:
                break;
        }
    }

    handleSubmit  = (event) => {
        event.preventDefault()
        // TODO: fire an action to update the store in the mean time put the thing in side of
    }

    render () {
        let answersFilterOptions = [];
        let questionTypeMenuOptions = [];
        QuestionTypes.forEach((question) => {
            questionTypeMenuOptions.push({
                key:question.get('type'),
                value:question.get('type'),
                text:question.get('display'),
                content:<Segment>
                            <Popup style={{zIndex:1001}}
                                trigger={
                                    <Icon size='big' color='blue' name='help circle'/>
                                }
                                content={question.get('description')}
                                position='left center'
                            />
                            {question.get('display')}
                        </Segment>
            });
        });

        (
            this.props.surveyHolder.get('questions')
                .get(this.props.surveyHolderQuestionIndex)
        && 
            this.props.surveyHolder.get('questions')
                .get(this.props.surveyHolderQuestionIndex)
                .get('answersFilter').forEach((filter) => {
                    answersFilterOptions.push({
                        key:filter,
                        value:filter,
                        text:filter,
                    });
            })
        );
        return (
            <Form onSubmit={ this.handleSubmit}>

                <Form.Group widths='equal'>

                    <Form.Input label='Survey Name'
                                name="title"
                                placeholder='eg. Hair Color Survey'
                                value={this.props.surveyHolder.get('title')}
                                onChange={(e) => {this.props.updateSurveyHolderSetTitle(e.target.value)}}
                    />

                <button style={{display: 'none'}} type='submit' ref={this.props.submitButtonRef}>Submit</button>
                </Form.Group>
                <Divider />
                <Form.Group widths='equal'>
                    <div style={{width:'50%', marginRight:10}}>
                        {(this.props.surveyHolder.get('questions')
                                .get(this.props.surveyHolderQuestionIndex) == null) ?
                            null
                            :
                            <Segment basic>
                                <Form.Input 
                                    style={{marginBottom:10, width:'100%'}}
                                    label='Question Title'
                                    name="title"
                                    placeholder='eg. Availability'
                                    value={this.props.surveyHolder.get('questions')
                                            .get(this.props.surveyHolderQuestionIndex).get('title')}
                                    onChange={(e) => {this.props.updateSurveyHolderQuestionSetTitle(
                                        {
                                            'index': this.props.surveyHolderQuestionIndex,
                                            'title': e.target.value
                                        }
                                    )}}

                                />
                                <Form.Dropdown 
                                    floating
                                    labeled
                                    icon='chevron down'
                                    className='icon'
                                    scrolling
                                    inline
                                    pointing
                                    style={{
                                        paddingTop:3, 
                                        marginBottom:10, 
                                        height:30,
                                        border:'1px dashed',
                                        borderRadius:50,
                                        paddingLeft:10,
                                        paddingRight:10,
                                        fontSize:12,
                                        fontWeight:'bold',
                                        textAlign:'center',
                                        borderColor:'LightGrey',
                                        background:'white'
                                    }}
                                    label='Question Type'
                                    options={questionTypeMenuOptions}
                                    name="type"
                                    placeholder='select a type'
                                    value={this.props.surveyHolder.get('questions')
                                            .get(this.props.surveyHolderQuestionIndex).get('type')}
                                    onChange={(e, data) => {this.props.updateSurveyHolderQuestionSetType(
                                        {
                                            'index': this.props.surveyHolderQuestionIndex,
                                            'type': data.value
                                        }
                                    )}}
                                />
                                {
                                // BEGINING OF TOOLTIP RENDER
                                // TODO: Make into smaller components (functions) for readability
                                (
                                    this.props.surveyHolder.get('questions')
                                        .get(this.props.surveyHolderQuestionIndex).get('type')
                                        != ''
                                )
                                ?
                                    (
                                        QuestionTypes.get(
                                            this.props.surveyHolder.get('questions')
                                                .get(this.props.surveyHolderQuestionIndex).get('type')
                                        ).get('options').get('tooltip')
                                    )
                                    ?
                                    <Form.Input 
                                        style={{marginBottom:10, width:'100%'}}
                                        label={
                                                <Label style={{
                                                    fontSize:'small', color:'black',
                                                    backgroundColor:'rgba(0, 0, 0, 0.0)',
                                                    paddingLeft:0
                                                }}>
                                                {
                                                    QuestionTypes.get(
                                                        this.props.surveyHolder.get('questions')
                                                        .get(this.props.surveyHolderQuestionIndex)
                                                        .get('type')
                                                    ).get('options').get('tooltipLabel')
                                                }
                                                {
                                                    (
                                                         QuestionTypes.get(
                                                            this.props.surveyHolder.get('questions')
                                                                .get(this.props.surveyHolderQuestionIndex)
                                                                .get('type')
                                                        ).get('options').get('tooltipHint').length > 0
                                                    )
                                                    ?
                                                        <Popup style={{zIndex:1001}}
                                                            trigger={
                                                                <Icon 
                                                                    style={{marginLeft:5}}
                                                                    size='large' 
                                                                    color='blue' 
                                                                    name='help circle' 
                                                                />
                                                            }
                                                            content={
                                                                QuestionTypes.get(
                                                                this.props.surveyHolder.get('questions')
                                                                    .get(this.props.surveyHolderQuestionIndex)
                                                                    .get('type')
                                                                ).get('options').get('tooltipHint')
                                                            }
                                                            position='top center'
                                                        />
                                                    :
                                                    null
                                                }
                                                </Label>
                                        }
                                        name="tooltip"
                                        value={this.props.surveyHolder.get('questions')
                                            .get(this.props.surveyHolderQuestionIndex).get('tooltip')}
                                        onChange={
                                            (e) => {this.props.updateSurveyHolderQuestionSetTooltip({
                                                'index': this.props.surveyHolderQuestionIndex,
                                                'tooltip': e.target.value
                                            })}
                                        }
                                    >
                                        <input />

                                    </Form.Input>
                                    :
                                    null
                                :
                                null
                                // END OF TOOLTIP RENDER
                                }
                                {
                                // BEGINING OF ANSWERS_FILTER RENDER
                                // TODO: Make into smaller components (functions) for readability
                                (
                                    this.props.surveyHolder.get('questions')
                                        .get(this.props.surveyHolderQuestionIndex).get('type')
                                        != ''
                                )
                                ?
                                    (
                                        QuestionTypes.get(
                                            this.props.surveyHolder.get('questions')
                                                .get(this.props.surveyHolderQuestionIndex).get('type')
                                        ).get('options').get('answersFilter')
                                    )
                                    ?
                                <Form.Dropdown 
                                    search
                                    multiple
                                    selection
                                    options={answersFilterOptions}
                                    value={this.props.surveyHolder.get('questions')
                                            .get(this.props.surveyHolderQuestionIndex)
                                            .get('answersFilter').toArray()}
                                    className='icon'
                                    allowAdditions
                                    noResultsMessage={null}
                                    label={
                                        <Label style={{
                                            fontSize:'small', color:'black',
                                            backgroundColor:'rgba(0, 0, 0, 0.0)',
                                            paddingLeft:0, width:'100%', paddingRight:0
                                        }}>
                                        {
                                            QuestionTypes.get(
                                                this.props.surveyHolder.get('questions')
                                                .get(this.props.surveyHolderQuestionIndex)
                                                .get('type')
                                            ).get('options').get('answersFilterLabel')
                                        }
                                        {
                                            (
                                                 QuestionTypes.get(
                                                    this.props.surveyHolder.get('questions')
                                                        .get(this.props.surveyHolderQuestionIndex)
                                                        .get('type')
                                                ).get('options').get('answersFilterHint').length > 0
                                            )
                                            ?
                                                <Popup style={{zIndex:1001}}
                                                    trigger={
                                                        <Icon 
                                                            style={{marginLeft:5, marginRight:0, paddingRight:0}}
                                                            size='large' 
                                                            color='blue' 
                                                            name='help circle' 
                                                        />
                                                    }
                                                    content={
                                                        QuestionTypes.get(
                                                        this.props.surveyHolder.get('questions')
                                                            .get(this.props.surveyHolderQuestionIndex)
                                                            .get('type')
                                                        ).get('options').get('answersFilterHint')
                                                    }
                                                    position='top center'
                                                />
                                            :
                                            null
                                        }
                                        {
                                            (
                                                 QuestionTypes.get(
                                                    this.props.surveyHolder.get('questions')
                                                        .get(this.props.surveyHolderQuestionIndex)
                                                        .get('type')
                                                ).get('options')
                                                 .get('answersFilterEnableBlacklistMode')
                                            )
                                            ?
                                                <Popup style={{zIndex:1001}}
                                                    trigger={
                                                        <Checkbox
                                                            toggle 
                                                            onClick={(e) => {
                                                                this.props
                                                                .updateSurveyHolderQuestionToggleFilterMode(
                                                                    this.props.surveyHolderQuestionIndex
                                                                )
                                                            }}
                                                            checked={
                                                                this.props.surveyHolder
                                                                    .get('questions')
                                                                    .get(
                                                                         this.props
                                                                         .surveyHolderQuestionIndex
                                                                    )
                                                                    .get('answersFilterEnableBlacklistMode')
                                                            }
                                                            label={
                                                            (
                                                                this.props.surveyHolder
                                                                .get('questions')
                                                                .get(
                                                                     this.props
                                                                     .surveyHolderQuestionIndex
                                                                )
                                                                .get('answersFilterEnableBlacklistMode') 
                                                            )
                                                            ?
                                                            (
                                                                QuestionTypes.get(
                                                                    this.props.surveyHolder
                                                                    .get('questions')
                                                                        .get(
                                                                            this.props
                                                                            .surveyHolderQuestionIndex
                                                                         )
                                                                        .get('type')
                                                                ).get('options')
                                                                .get('answersFilterEnableBlacklistModeTrueLabel') 
                                                            )
                                                            :
                                                            (
                                                                QuestionTypes.get(
                                                                    this.props.surveyHolder
                                                                    .get('questions')
                                                                        .get(
                                                                            this.props
                                                                            .surveyHolderQuestionIndex
                                                                         )
                                                                        .get('type')
                                                                ).get('options')
                                                                .get('answersFilterEnableBlacklistModeFalseLabel') 
                                                            )
                                                            }
                                                            style={{marginLeft:5, marginRight:0, 
                                                            paddingRight:0, float:'right'}}
                                                        />
                                                    }
                                                    content={
                                                        QuestionTypes.get(
                                                        this.props.surveyHolder.get('questions')
                                                            .get(this.props.surveyHolderQuestionIndex)
                                                            .get('type')
                                                        ).get('options').get('answersFilterEnableBlacklistModeHint')
                                                    }
                                                    position='top center'
                                                />
                                            :
                                            null
                                        }
                                        {
                                            (
                                                 QuestionTypes.get(
                                                    this.props.surveyHolder.get('questions')
                                                        .get(this.props.surveyHolderQuestionIndex)
                                                        .get('type')
                                                ).get('options').get('answersEnableFilter')
                                            )
                                            ?
                                                <Popup style={{zIndex:1001}}
                                                    trigger={
                                                        <Checkbox
                                                            toggle 
                                                            onClick={(e) => {
                                                                this.props
                                                                .updateSurveyHolderQuestionToggleFilter(
                                                                    this.props.surveyHolderQuestionIndex
                                                                )
                                                            }}
                                                            checked={
                                                                this.props.surveyHolder
                                                                    .get('questions')
                                                                    .get(
                                                                         this.props
                                                                         .surveyHolderQuestionIndex
                                                                    )
                                                                    .get('answersEnableFilter')
                                                            }
                                                            label={
                                                            (
                                                                this.props.surveyHolder
                                                                .get('questions')
                                                                .get(
                                                                     this.props
                                                                     .surveyHolderQuestionIndex
                                                                )
                                                                .get('answersEnableFilter') 
                                                            )
                                                            ?
                                                            (
                                                                QuestionTypes.get(
                                                                    this.props.surveyHolder
                                                                    .get('questions')
                                                                        .get(
                                                                            this.props
                                                                            .surveyHolderQuestionIndex
                                                                         )
                                                                        .get('type')
                                                                ).get('options')
                                                                .get('answersEnableFilterTrueLabel') 
                                                            )
                                                            :
                                                            (
                                                                QuestionTypes.get(
                                                                    this.props.surveyHolder
                                                                    .get('questions')
                                                                        .get(
                                                                            this.props
                                                                            .surveyHolderQuestionIndex
                                                                         )
                                                                        .get('type')
                                                                ).get('options')
                                                                .get('answersEnableFilterFalseLabel') 
                                                            )
                                                            }
                                                            style={{marginLeft:10, marginRight:0, 
                                                            paddingRight:0, float:'right'}}
                                                        />
                                                    }
                                                    content={
                                                        QuestionTypes.get(
                                                        this.props.surveyHolder.get('questions')
                                                            .get(this.props.surveyHolderQuestionIndex)
                                                            .get('type')
                                                        ).get('options').get('answersEnableFilterHint')
                                                    }
                                                    position='top center'
                                                />
                                            :
                                            null
                                        }

                                        </Label>
                                    }
                                    onChange={(e, data) => {
                                        this.props.updateSurveyHolderQuestionSetFilter(
                                            {
                                                filter:data.value,
                                                index:this.props.surveyHolderQuestionIndex
                                            }
                                        );
                                    }}
                                />
                                    :
                                    null
                                :
                                null
                                // END OF ANSWERS_FILTER RENDER
                                }
                                {
                                // BEGINING OF ANSWERS_MAXIMUM RENDER
                                // TODO: Make into smaller components (functions) for readability
                                (
                                    this.props.surveyHolder.get('questions')
                                        .get(this.props.surveyHolderQuestionIndex).get('type')
                                        != ''
                                )
                                ?
                                    (
                                        QuestionTypes.get(
                                            this.props.surveyHolder.get('questions')
                                                .get(this.props.surveyHolderQuestionIndex).get('type')
                                        ).get('options').get('answersMaximum')
                                    )
                                    ?
                                <Form.Input
                                    type='number'
                                    min='0'
                                    step='1'
                                    value={this.props.surveyHolder.get('questions')
                                            .get(this.props.surveyHolderQuestionIndex)
                                            .get('answersMaximum')}
                                    label={
                                        <Label style={{
                                            fontSize:'small', color:'black',
                                            backgroundColor:'rgba(0, 0, 0, 0.0)',
                                            paddingLeft:0, width:'100%', paddingRight:0
                                        }}>
                                        {
                                            QuestionTypes.get(
                                                this.props.surveyHolder.get('questions')
                                                .get(this.props.surveyHolderQuestionIndex)
                                                .get('type')
                                            ).get('options').get('answersMaximumLabel')
                                        }
                                        {
                                            (
                                                 QuestionTypes.get(
                                                    this.props.surveyHolder.get('questions')
                                                        .get(this.props.surveyHolderQuestionIndex)
                                                        .get('type')
                                                ).get('options').get('answersMaximumHint').length > 0
                                            )
                                            ?
                                                <Popup style={{zIndex:1001}}
                                                    trigger={
                                                        <Icon 
                                                            style={{marginLeft:5, marginRight:0, paddingRight:0}}
                                                            size='large' 
                                                            color='blue' 
                                                            name='help circle' 
                                                        />
                                                    }
                                                    content={
                                                        QuestionTypes.get(
                                                        this.props.surveyHolder.get('questions')
                                                            .get(this.props.surveyHolderQuestionIndex)
                                                            .get('type')
                                                        ).get('options').get('answersMaximumHint')
                                                    }
                                                    position='top center'
                                                />
                                            :
                                            null
                                        }
                                        {
                                            (
                                                 QuestionTypes.get(
                                                    this.props.surveyHolder.get('questions')
                                                        .get(this.props.surveyHolderQuestionIndex)
                                                        .get('type')
                                                ).get('options').get('answersEnableMaximum')
                                            )
                                            ?
                                                <Popup style={{zIndex:1001}}
                                                    trigger={
                                                        <Checkbox
                                                            toggle 
                                                            onClick={(e) => {
                                                                this.props
                                                                .updateSurveyHolderQuestionToggleAnswersMaximum(
                                                                    this.props.surveyHolderQuestionIndex
                                                                )
                                                            }}
                                                            checked={
                                                                this.props.surveyHolder
                                                                    .get('questions')
                                                                    .get(
                                                                         this.props
                                                                         .surveyHolderQuestionIndex
                                                                    )
                                                                    .get('answersEnableMaximum')
                                                            }
                                                            label={
                                                            (
                                                                this.props.surveyHolder
                                                                .get('questions')
                                                                .get(
                                                                     this.props
                                                                     .surveyHolderQuestionIndex
                                                                )
                                                                .get('answersEnableMaximum') 
                                                            )
                                                            ?
                                                            (
                                                                QuestionTypes.get(
                                                                    this.props.surveyHolder
                                                                    .get('questions')
                                                                        .get(
                                                                            this.props
                                                                            .surveyHolderQuestionIndex
                                                                         )
                                                                        .get('type')
                                                                ).get('options')
                                                                .get('answersEnableMaximumTrueLabel') 
                                                            )
                                                            :
                                                            (
                                                                QuestionTypes.get(
                                                                    this.props.surveyHolder
                                                                    .get('questions')
                                                                        .get(
                                                                            this.props
                                                                            .surveyHolderQuestionIndex
                                                                         )
                                                                        .get('type')
                                                                ).get('options')
                                                                .get('answersEnableMaximumFalseLabel') 
                                                            )
                                                            }
                                                            style={{marginLeft:5, marginRight:0, 
                                                            paddingRight:0, float:'right'}}
                                                        />
                                                    }
                                                    content={
                                                        QuestionTypes.get(
                                                        this.props.surveyHolder.get('questions')
                                                            .get(this.props.surveyHolderQuestionIndex)
                                                            .get('type')
                                                        ).get('options').get('answersMaximumHint')
                                                    }
                                                    position='top center'
                                                />
                                            :
                                            null
                                        }
                                        </Label>
                                    }
                                    onChange={(e, data) => {
                                        this.props.updateSurveyHolderQuestionSetAnswersMaximum(
                                            {
                                                value:parseInt(data.value),
                                                index:this.props.surveyHolderQuestionIndex
                                            }
                                        );
                                    }}
                                />
                                    :
                                    null
                                :
                                null
                                // END OF ANSWERS_MAXIMUM RENDER
                                }
                                {
                                // BEGINING OF ANSWERS_MINIMUM RENDER
                                // TODO: Make into smaller components (functions) for readability
                                (
                                    this.props.surveyHolder.get('questions')
                                        .get(this.props.surveyHolderQuestionIndex).get('type')
                                        != ''
                                )
                                ?
                                    (
                                        QuestionTypes.get(
                                            this.props.surveyHolder.get('questions')
                                                .get(this.props.surveyHolderQuestionIndex).get('type')
                                        ).get('options').get('answersMinimum')
                                    )
                                    ?
                                <Form.Input
                                    type='number'
                                    min='0'
                                    step='1'
                                    value={this.props.surveyHolder.get('questions')
                                            .get(this.props.surveyHolderQuestionIndex)
                                            .get('answersMinimum')}
                                    label={
                                        <Label style={{
                                            fontSize:'small', color:'black',
                                            backgroundColor:'rgba(0, 0, 0, 0.0)',
                                            paddingLeft:0, width:'100%', paddingRight:0
                                        }}>
                                        {
                                            QuestionTypes.get(
                                                this.props.surveyHolder.get('questions')
                                                .get(this.props.surveyHolderQuestionIndex)
                                                .get('type')
                                            ).get('options').get('answersMinimumLabel')
                                        }
                                        {
                                            (
                                                 QuestionTypes.get(
                                                    this.props.surveyHolder.get('questions')
                                                        .get(this.props.surveyHolderQuestionIndex)
                                                        .get('type')
                                                ).get('options').get('answersMinimumHint').length > 0
                                            )
                                            ?
                                                <Popup style={{zIndex:1001}}
                                                    trigger={
                                                        <Icon 
                                                            style={{marginLeft:5, marginRight:0, paddingRight:0}}
                                                            size='large' 
                                                            color='blue' 
                                                            name='help circle' 
                                                        />
                                                    }
                                                    content={
                                                        QuestionTypes.get(
                                                        this.props.surveyHolder.get('questions')
                                                            .get(this.props.surveyHolderQuestionIndex)
                                                            .get('type')
                                                        ).get('options').get('answersMinimumHint')
                                                    }
                                                    position='top center'
                                                />
                                            :
                                            null
                                        }
                                        {
                                            (
                                                 QuestionTypes.get(
                                                    this.props.surveyHolder.get('questions')
                                                        .get(this.props.surveyHolderQuestionIndex)
                                                        .get('type')
                                                ).get('options').get('answersEnableMinimum')
                                            )
                                            ?
                                                <Popup style={{zIndex:1001}}
                                                    trigger={
                                                        <Checkbox
                                                            toggle 
                                                            onClick={(e) => {
                                                                this.props
                                                                .updateSurveyHolderQuestionToggleAnswersMinimum(
                                                                    this.props.surveyHolderQuestionIndex
                                                                )
                                                            }}
                                                            checked={
                                                                this.props.surveyHolder
                                                                    .get('questions')
                                                                    .get(
                                                                         this.props
                                                                         .surveyHolderQuestionIndex
                                                                    )
                                                                    .get('answersEnableMinimum')
                                                            }
                                                            label={
                                                            (
                                                                this.props.surveyHolder
                                                                .get('questions')
                                                                .get(
                                                                     this.props
                                                                     .surveyHolderQuestionIndex
                                                                )
                                                                .get('answersEnableMinimum') 
                                                            )
                                                            ?
                                                            (
                                                                QuestionTypes.get(
                                                                    this.props.surveyHolder
                                                                    .get('questions')
                                                                        .get(
                                                                            this.props
                                                                            .surveyHolderQuestionIndex
                                                                         )
                                                                        .get('type')
                                                                ).get('options')
                                                                .get('answersEnableMinimumTrueLabel') 
                                                            )
                                                            :
                                                            (
                                                                QuestionTypes.get(
                                                                    this.props.surveyHolder
                                                                    .get('questions')
                                                                        .get(
                                                                            this.props
                                                                            .surveyHolderQuestionIndex
                                                                         )
                                                                        .get('type')
                                                                ).get('options')
                                                                .get('answersEnableMinimumFalseLabel') 
                                                            )
                                                            }
                                                            style={{marginLeft:5, marginRight:0, 
                                                            paddingRight:0, float:'right'}}
                                                        />
                                                    }
                                                    content={
                                                        QuestionTypes.get(
                                                        this.props.surveyHolder.get('questions')
                                                            .get(this.props.surveyHolderQuestionIndex)
                                                            .get('type')
                                                        ).get('options').get('answersMinimumHint')
                                                    }
                                                    position='top center'
                                                />
                                            :
                                            null
                                        }
                                        </Label>
                                    }
                                    onChange={(e, data) => {
                                        this.props.updateSurveyHolderQuestionSetAnswersMinimum(
                                            {
                                                value:parseInt(data.value),
                                                index:this.props.surveyHolderQuestionIndex
                                            }
                                        );
                                    }}
                                />
                                    :
                                    null
                                :
                                null
                                // END OF ANSWERS_MINIMUM RENDER
                                }

                            </Segment>
                        }

                    </div>
                    <SurveyQuestionTable
                        questions={this.props.surveyHolder.get('questions')} 
                        surveyHolderQuestionIndex={this.props.surveyHolderQuestionIndex}
                        updateSurveyHolderQuestionDelete={this.props.updateSurveyHolderQuestionDelete} 
                        updateSurveyHolderQuestionCreate={this.props.updateSurveyHolderQuestionCreate} 
                        updateSurveyHolderQuestionIndex={this.props.updateSurveyHolderQuestionIndex}

                    />
                </Form.Group>
          </Form>
        )
    }
}
