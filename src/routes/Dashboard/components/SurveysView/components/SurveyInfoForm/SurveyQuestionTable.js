/**
 * Created by Matt on 5/23/17.
 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Form, Header, Icon, Modal, Segment, Divider, Table, Label, Menu } from 'semantic-ui-react'

class SurveyQuestionTableNewEntry extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            index: props.index,
            isSelected: props.isSelected,
            title: props.title,
        }
    }

    handleClick = (e, {name, value}) => {
        switch (name) {
            case 'title':
                this.props.updateSurveyHolderSetTitle(e.target.value);
                break;
            default:
                break;
        }
    }

    render () {
        return (
            <Table.Row >
                <Table.Cell  style={{width:'100%', padding:0, margin:0}}> 
                    <Button
                        disabled={
                            this.props.inActivitiesView 
                            && this.props.selectingSurvey 
                            && (!this.props.creatingSurvey)
                        }
                        onClick={(e) => {
                            e.preventDefault(); 
                            this.props.updateSurveyHolderQuestionCreate()
                        }} 
                        size='medium' 
                        style={{width:'100%', height:'100%', cursor:'pointer', 
                            background:'rgba(0, 0, 0, 0.0)', marginTop:0, marginBotton:0,
                            textAlign:'left'
                        }}>
                        <Icon size='large' 
                        onClick={(e) => {
                            e.preventDefault(); 
                            this.props.updateSurveyHolderQuestionCreate()
                        }} 
                        style={{height:'100%', cursor:'pointer', marginTop:0, marginBotton:0}} 
                        name='plus' color='green' /> 
                        New Question
                    </Button>
                </Table.Cell >

            </Table.Row>
        )
    }
}

class SurveyQuestionTableEntry extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            index: props.index,
            isSelected: props.isSelected,
            title: props.title,
        }
    }

    handleClick = (e, {name, value}) => {
        switch (name) {
            case 'title':
                this.props.updateSurveyHolderSetTitle(e.target.value);
                break;
            default:
                break;
        }
    }

    render () {
        return (
            <Table.Row active={this.props.isSelected}>

                <Table.Cell style={{width:'100%', padding:0, margin:0}}> 
                    <Label 
                        onClick={(e) => {this.props.updateSurveyHolderQuestionIndex(this.props.index)
                        }} 
                        size='large' 
                        style={{width:'100%', height:'100%', cursor:'pointer', 
                            background:'rgba(0, 0, 0, 0.0)', marginTop:0, marginBotton:0
                        }}>
                        {( this.props.title.trim().length > 0) ? this.props.title : '[No Title]'} 
                    </Label>
                </Table.Cell >
                <Table.Cell style={{padding:0, margin:0}}> 
                    <Button circular icon={<Icon name='remove' size='big' color='red'/>}
                        disabled={
                            this.props.inActivitiesView 
                            && this.props.selectingSurvey 
                            && (!this.props.creatingSurvey)
                        }
                        onClick={() => {this.props.updateSurveyHolderQuestionDelete(this.props.index)}} 
                        style={{height:'100%', cursor:'pointer', marginTop:0, 
                            marginBotton:0, backgroundColor:'rgba(0, 0, 0, 0.0)'
                        }} 
                    /> 
                </Table.Cell> 
            </Table.Row>
        )
    }
}

export default class SurveyQuestionTable extends React.Component {
    constructor (props) {
        super(props)
    }

    handleClick = (e, {name, value}) => {
        switch (name) {
            case 'title':
                this.props.updateSurveyHolderSetTitle(e.target.value);
                break;
            default:
                break;
        }
    }

    render () {
        return (
            <div style={{width:'50%', marginLeft:10, height:300, overflowX: 'Hidden', 
            overflowY:'hidden'}} >
                <div style={{width:'95%', overflowX: 'Hidden', overflowY:'Hidden', marginBottom:0}} >
                <Table style={{marginBottom:0}}>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell colSpan='2' textAlign='center'>Questions</Table.HeaderCell>
                        </Table.Row>
                        <SurveyQuestionTableNewEntry
                            inActivitiesView = {this.props.inActivitiesView} 
                            creatingSurvey={this.props.creatingSurvey} 
                            selectingSurvey={this.props.selectingSurvey} 
                            updateSurveyHolderQuestionCreate={
                                this.props.updateSurveyHolderQuestionCreate} 
                        /> 
                    </Table.Header>
                </Table>   
                </div>
                <div style={{width:'100%', height:190, overflowX: 'Hidden', overflowY:'scroll', 
                     marginTop:0
                     }}>
                    <Table celled selectable textAlign='center'>
                        <Table.Body>
                            {this.props.questions.map((question, index) => 
                                <SurveyQuestionTableEntry  
                                    inActivitiesView = {this.props.inActivitiesView} 
                                    creatingSurvey={this.props.creatingSurvey} 
                                    selectingSurvey={this.props.selectingSurvey} 
                                    key={'SurveyEntry_' + index} 
                                    index={index}
                                    title={question.get('title')}
    
                                    updateSurveyHolderQuestionIndex={
                                        this.props.updateSurveyHolderQuestionIndex}
                                    updateSurveyHolderQuestionDelete={
                                        this.props.updateSurveyHolderQuestionDelete}
                                    isSelected={this.props.surveyHolderQuestionIndex == index}
                                />)
                            }
                        </Table.Body>
                    </Table>
                </div>
            </div>
        )
    }
}
