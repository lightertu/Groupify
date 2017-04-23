import React from 'react'
import {Dropdown, Popup, Button, Form, Icon} from 'semantic-ui-react'
import SurveyPopup from './SurveyPopup';

class CreateForm extends React.Component {
    constructor() {
        super();
        this.state = ({
          questions: [],
          link: false
        })
        this.handleSurveySubmit = this.handleSurveySubmit.bind(this);
    }

    toggleVisibility() {
      this.props.toggleVisibility();
    }

    componentDidMount() {
      $('.ui.fluid.search.dropdown').dropdown();
    }

    handleQuestionAdd(question) {
      let questions = this.state.questions
      questions.push(question)
      this.setState(questions: questions);
    }

    handleSurveySubmit() {
      // padd custom questions to parent and create survey and display link
      this.setState({link: true});
      this.props.generateSurvey(this.state.questions);
    }

    render() {
        const linkStyles = {
            color: 'black',
            };

        const styles = {
          allowAdditions: 'true',
        };

        const buttonStyle = {
          margin: 5,
          marginBottom: 20
        }
        
        const LanguageOptions = [ 
          { key: 1, value: 'Hadoop', text: 'Hadoop' },
          { key: 2, value: 'Python', text: 'Python' },
          { key: 3, value: 'Java', text: 'Java' },
          { key: 4, value: 'JavaScript', text: 'JavaScript' },
          { key: 5, value: 'C', text: 'C' },
          { key: 6, value: 'C++', text: 'C++' },
          { key: 7, value: 'Bash', text: 'Bash' },
          { key: 8, value: 'PHP', text: 'PHP' },
          { key: 9, value: 'Ruby', text: 'Ruby' },
          { key: 10, value: 'Git', text: 'Git' },
          { key: 11, value: 'React', text: 'React' },
          { key: 12, value: 'Flask', text: 'Flask' },
          { key: 13, value: 'Nodejs', text: 'NodeJS' },
          { key: 14, value: 'Earlang', text: 'Earlang' },
        ]

        const DayOptions = [ 
          { key: 1, value: 'M', text: 'monday'},
          { key: 2, value: 'T', text: 'tuesday'},
          { key: 3, value: 'W', text: 'wednesday'},
          { key: 4, value: 'TH', text: 'thursday'},
          { key: 5, value: 'F', text: 'friday'},
          { key: 6, value: 'S', text: 'saturday'},
          { key: 7, value: 'SU', text: 'sunday'}
        ]

        let questions = this.state.questions.map(function(question, i) {
                          return (
                                    <Form.Field key={i} disabled>
                                      <label>{question}</label>
                                        <textarea rows="2"></textarea>
                                    </Form.Field>
                                  )
        });

        let link;
        if(this.state.link) {
          link = (
                    <div><p><strong> Copy Link:</strong> </p> 
                    <span className={"line " + linkStyles}>{this.props.link}</span></div>
                    )
        }

        let formStyle = {
          marginTop: "20%",
          marginBottom: 100
        }

        let form;
        if(this.props.active) {
          form = (<div className="card big" >
                    <div className="ui card" style={formStyle}>
                      <div className="header">Preview Survey</div>
                        <div className="content">
                          <form className="ui form">
                            <div className=" disabled field">
                            <label>First Name</label>
                            <input type="text" name="first-name" placeholder="First Name"/>
                          </div>
                          <div className="disabled field">
                            <label>Last Name</label>
                            <input type="text" name="last-name" placeholder="Last Name"/>
                          </div>
                           <div className="disabled field">
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Email"/>
                          </div>
                          <div className="disabled field">
                            <label>Meeting Times</label>
                            <Dropdown 
                              allowAdditions={true} 
                              fluid multiple selection 
                              options={DayOptions}/>
                          </div>
                          <div className="disabled field">
                            <label>Languages</label>
                            <Dropdown 
                              allowAdditions={true} 
                              fluid multiple search selection 
                              options={LanguageOptions}/>
                        </div>
                        <div className="disabled field">
                          <label>Requests</label>
                          <textarea rows="2"></textarea>
               
                        </div>
                           <Form.Field disabled>
                                <label>Upload Image</label>
                                <Form.Input type="file" name="pic" accept="image/*"/>
                          </Form.Field>
                        {questions}
                             <Form.Field>
                                <label>Upload Group</label>
                                <Form.Input type="file" name="pic" accept="image/*"/>
                          </Form.Field>
                        <SurveyPopup 
                          handleQuestionAdd={this.handleQuestionAdd.bind(this)}
                        />
                        </form>
                        <div className="extra content">
                          <div className="link" key="visible">
                            <Button basic small color={"green"} positive size="large" animated="vertical" style={buttonStyle} onClick={this.handleSurveySubmit}>
                               <Button.Content visible>Generate</Button.Content>
                               <Button.Content hidden>
                                Testing
                              </Button.Content>
                            </Button>
                            {link}
                          </div>
                        </div>
                      </div>
                  </div>
                  </div>
                  )
        }
        return (
          <div>
            {form}
            <div className="overlay" onClick={this.toggleVisibility.bind(this)}>
            </div>
          </div>
        )   
    }
}

export default CreateForm;