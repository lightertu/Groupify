import React from 'react'
import {Grid, Card, Label, Button, Segment, Header, Icon, Divider, Message} from 'semantic-ui-react'
import QuestionView from './QuestionView'
import {NameQuestionView, EmailQuestionView} from './QuestionView/Questions'

import {Map, List, Set, OrderedSet} from 'immutable';

class Survey extends React.Component {

    componentWillMount () {
        this.props.fetchSurvey(this.props.activityId); 
    }
   
    //from https://stackoverflow.com/questions/46155/validate-email-address-in-javascript 
    validateEmail = (email) => {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    submitSurveyHandler = (e) => {
      
        this.props.setIsSubmitting(true);
        if (this.props.name.trim().length <= 0){
            this.props.setSubmitError('You Must Enter Your Name');
            this.props.setFailedToSubmit(true);
            this.props.setIsSubmitting(false);
            return;
        };

        if (!this.validateEmail(this.props.email)){
            this.props.setSubmitError('You Must Enter a Valid Email!');
            this.props.setFailedToSubmit(true);
            this.props.setIsSubmitting(false);
            return;
        };

        let invalidMinimumAnswer= this.props.questions.findEntry((question) => {
            return (question.get('answersEnableMinimum')) 
                    && (question.get('answers').size < question.get('answersMinimum'));
        });    

        if (invalidMinimumAnswer){
            this.props.setSubmitError('Question [' 
                    + invalidMinimumAnswer[1].get('title') 
                    +'] Requires a Minimum of ' 
                    + invalidMinimumAnswer[1].get('answersMinimum') 
                    + ' Answers!'
            );
            this.props.setIsSubmitting(false);
            this.props.setFailedToSubmit(true);
            return;
        };

        let invalidMaximumAnswer= this.props.questions.findEntry((question) => {
            return (question.get('answersEnableMaximum')) 
                    && (question.get('answers').size > question.get('answersMaximum'));
        });     

        if (invalidMaximumAnswer){
            this.props.setSubmitError('Question [' 
                    + invalidMaximumAnswer[1].get('title') 
                    +'] May have a Maximum of ' 
                    + invalidMaximumAnswer[1].get('answersMaximum') 
                    + ' Answers!'
            );
            this.props.setIsSubmitting(false);
            this.props.setFailedToSubmit(true);
            return;
        }; 

        this.props.setIsSubmitting(false);
        this.props.setSubmitError('');
        this.props.setFailedToSubmit(false);
        this.props.submitSurvey({activityId: this.props.activityId, name:this.props.name,
                                    email:this.props.email, questions:this.props.questions});
    }

    render() {
       return (this.props.submitted || this.props.failedToGet) ? 
       (
            <Segment padded='very' textAlign='center' loading={this.props.isLoading} 
                    raised style={{marginTop:50}}
            >
                <Message
                    compact
                    size='massive'
                    style={{marginBottom:50, marginTop:50}}
                    success={this.props.failedToGet ? false : true}
                    error={this.props.failedToGet ? true : false}
                    header={this.props.failedToGet ? 'Sorry!' : 'Thank You!'}
                    content={this.props.failedToGet ?
                        'We are unable to find the survey you requested.'
                    :
                        'Your submission has been recorded successfully'
                    }
                />
            </Segment> 
        )
        :
        (
            <Segment padded='very' textAlign='center' loading={this.props.isLoading} 

                    raised style={{marginTop:50}}
                >
                {
                    (!this.props.isLoading) &&
                    <Segment vertical>
                        <Header size='large'>
                            <Icon name='file text outline' />{this.props.title}
                        </Header>
                    </Segment>
                }
                {
                    (!this.props.isLoading) &&
                    <Segment vertical>
                        <NameQuestionView
                            title={'Name'} 
                            tooltip={'Please Enter Your Name'} 
                            setName = {this.props.setName}
                            isSubmitting= {this.props.isSubmitting}
                        /> 
                    </Segment>
                }
                {
                    (!this.props.isLoading) &&
                    <Segment vertical>
                        <EmailQuestionView
                            title={'Email'} 
                            tooltip={'Please Enter Your Email'} 
                            setEmail = {this.props.setEmail}
                            isSubmitting= {this.props.isSubmitting}
                        /> 
                    </Segment>
                }
                {this.props.questions.map((question, index) => 
                        <QuestionView key={"QV_" + index} 
                            isSubmitting= {this.props.isSubmitting}
                            type={question.get("type")} 
                            title={question.get("title")} 
                            tooltip={question.get("tooltip")} 
                            answers={question.get("answers")} 
                            answersEnableMinimum={question.get("answersEnableMinimum")} 
                            answersMinimum={question.get("answersMinimum")}  
                            answersEnableMaximum={question.get("answersEnableMaximum")} 
                            answersMaximum={question.get("answersMaximum")} 
                            answersEnableFilter={question.get("answersEnableFilter")} 
                            answersFilterEnableBlacklistMode={
                                question.get("answersFilterEnableBlacklistMode")
                            } 
                            answersFilter={question.get("answersFilter")}
                            
                            index = {index}

                            addAnswer = {this.props.addAnswer}
                            removeAnswer = {this.props.removeAnswer}
                            setAnswer = {this.props.setAnswer}
                            clearAnswers = {this.props.clearAnswers} 

                            survey={this.props.survey} 
                       />
                )} 
                <Segment vertical>
                    <Message negative floating hidden={!this.props.failedToSubmit}
                        style={{textAlign:'center'}}
                    >
                        <Message.Header>ERROR: {this.props.submitError}</Message.Header>
                    </Message>
                    {

                        (!this.props.isLoading) &&
                        <Button positive
                            disabled={this.props.isSubmitting}
                            loading={this.props.isSubmitting}
                            content='Submit'
                            onClick={ this.submitSurveyHandler}
                        />
                    }
                </Segment>

            </Segment>
        )
    }
}

export default Survey;
