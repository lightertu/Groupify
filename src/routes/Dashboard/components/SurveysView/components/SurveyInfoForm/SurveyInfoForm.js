/*
 * Created by Matt on 5/23/17.
 *  Matt's Note: This file needs to be modularized. 
 *               Not a high priority at the moment but needs to be done.
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

    handleSubmit  = (event) => {
        event.preventDefault()
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
                            <Popup style={{zIndex:4444}}
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
            <Form onSubmit={ this.handleSubmit} style={{margin:0, padding:0, width :'98%'}}>

                <Form.Group widths='equal'>

                    <Form.Input label='Survey Name'
                        key={'SURVEY_' + this.props.surveyHolder.get('surveyId') + '_TITLE_KEY'}
                        disabled={
                            this.props.inActivitiesView 
                            && this.props.selectingSurvey 
                            && (!this.props.creatingSurvey)
                        }
                        name="title"
                        placeholder='eg. Hair Color Survey'
                        defaultValue={this.props.surveyHolder.get('title')}
                        onBlur={(e) => {this.props.updateSurveyHolderSetTitle(e.target.value)}}
                    />
                </Form.Group>
                <Divider horizontal>
                    Survey Questions
                </Divider>
                <Form.Group widths='equal'>
                    <div style={{width:'50%', marginRight:10}}>
                        {(this.props.surveyHolder.get('questions')
                                .get(this.props.surveyHolderQuestionIndex) == null) ?
                            null
                            :
                            <Segment basic>
                                <Divider horizontal style={{marginTop:0}}>Question Details</Divider>
                                <Form.Input 
                                    disabled={
                                        this.props.inActivitiesView 
                                        && this.props.selectingSurvey 
                                        && (!this.props.creatingSurvey)
                                    }
                                    key={'QUESTION_' + this.props.surveyHolderQuestionIndex + '_TITLE'}
                                    style={{marginBottom:10, width:'100%'}}
                                    label='Question Title'
                                    name="title"
                                    placeholder='eg. Availability'
                                    defaultValue={this.props.surveyHolder.get('questions')
                                            .get(this.props.surveyHolderQuestionIndex).get('title')}
                                    onBlur={(e) => {this.props.updateSurveyHolderQuestionSetTitle(
                                        {
                                            'index': this.props.surveyHolderQuestionIndex,
                                            'title': e.target.value
                                        }
                                    )}}

                                />
                                <Form.Dropdown 
                                    disabled={
                                        this.props.inActivitiesView 
                                        && this.props.selectingSurvey 
                                        && (!this.props.creatingSurvey)
                                    }
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
                                        disabled={
                                            this.props.inActivitiesView 
                                            && this.props.selectingSurvey 
                                            && (!this.props.creatingSurvey)
                                        } 

                                        key={'QUESTION_' + this.props.surveyHolderQuestionIndex + '_TOOLTIP'}
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
                                                        <Popup style={{zIndex:4444}}
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
                                        defaultValue={this.props.surveyHolder.get('questions')
                                            .get(this.props.surveyHolderQuestionIndex).get('tooltip')}
                                        onBlur={
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
                                    disabled={
                                        this.props.inActivitiesView 
                                        && this.props.selectingSurvey 
                                        && (!this.props.creatingSurvey)
                                    }
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
                                                <Popup style={{zIndex:4444}}
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
                                                <Popup style={{zIndex:4444}}
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
                                                <Popup style={{zIndex:4444}}
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
                                    step='1'
                                    min='0'
                                    disabled={
                                        this.props.inActivitiesView 
                                        && this.props.selectingSurvey 
                                        && (!this.props.creatingSurvey)
                                    }

                                    key={'QUESTION_' + this.props.surveyHolderQuestionIndex + '_ANSWERS_MAXIMUM'}
                                    type='number'
                                    min='0'
                                    step='1'
                                    defaultValue={this.props.surveyHolder.get('questions')
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
                                                <Popup style={{zIndex:4444}}
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
                                                <Popup style={{zIndex:4444}}
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
                                                        ).get('options').get('answersEnableMaximumHint')
                                                    }
                                                    position='top center'
                                                />
                                            :
                                            null
                                        }
                                        </Label>
                                    }
                                    onBlur={(e, data) => {
                                        this.props.updateSurveyHolderQuestionSetAnswersMaximum(
                                            {
                                                value:parseInt(e.target.value),
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
                                    step='1'
                                    min='0'
                                    disabled={
                                        this.props.inActivitiesView 
                                        && this.props.selectingSurvey 
                                        && (!this.props.creatingSurvey)
                                    }
                                    key={'QUESTION_' + this.props.surveyHolderQuestionIndex + '_ANSWERS_MINIUM'}
                                    type='number'
                                    min='0'
                                    step='1'
                                    defaultValue={this.props.surveyHolder.get('questions')
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
                                                <Popup style={{zIndex:4444}}
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
                                                <Popup style={{zIndex:4444}}
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
                                                        ).get('options').get('answersEnableMinimumHint')
                                                    }
                                                    position='top center'
                                                />
                                            :
                                            null
                                        }
                                        </Label>
                                    }
                                    onBlur={(e, data) => {
                                        this.props.updateSurveyHolderQuestionSetAnswersMinimum(
                                            {
                                                value:parseInt(e.target.value),
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

                        inActivitiesView = {this.props.inActivitiesView} 
                        creatingSurvey={this.props.creatingSurvey} 
                        selectingSurvey={this.props.selectingSurvey} 

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
