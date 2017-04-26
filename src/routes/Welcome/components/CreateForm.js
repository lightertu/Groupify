import React from 'react'
import {Dropdown, Popup, Button, Form, Icon, Header, Card} from 'semantic-ui-react'
import SurveyPopup from './SurveyPopup';

class CreateForm extends React.Component {
    constructor() {
        super();
        this.state = ({
          questions: [],
          students: null,
          title: '',
          link: false,
          groups: []
        })
        this.handleSurveySubmit = this.handleSurveySubmit.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    loadFile(e) {
      var result = JSON.parse(e.target.result);
      this.setState({students: result});
      this.props.createStudents(result)
    }

    handleFileUpload(e) {
      var file = e.target.files.item(0);
      var fr = new FileReader();
      fr.onload = this.loadFile.bind(this); // this it key to passing in the global 'this' into the fr.onload function
      fr.readAsText(file);

    }

    toggleVisibility() {
      this.props.toggleVisibility();
    }

    componentDidMount() {
      $('.ui.fluid.search.dropdown').dropdown();
    }

    componentWillMount() {
      if(this.props.groups) {
        this.setState({groups: this.props.groups});
      }
    }

    handleQuestionAdd(question) {
      let questions = this.state.questions
      questions.push(question)
      this.setState(questions: questions);
    }

    handleSurveySubmit() {
      // padd custom questions to parent and create survey and display link
      this.setState({link: true});
      var obj = {}
      obj['students'] = this.state.students;
      obj['questions'] = this.state.questions;
      this.props.generateSurvey(obj);
    }

    handleStudents(e) {
        e.preventDefault();
        if(e.target.getAttribute('name')) {
          this.setState({students: e.target.getAttribute('name')});
        } else {
          this.setState({students: e.target.innerHTML});
        }
    }

    render() {
        const linkStyles = {
            color: 'black',
            marginTop: 25,
            textDecoration: 'underline'
            };

        const styles = {
          allowAdditions: 'true',
        };

        const buttonStyle = {
          margin: 20
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

        let idDrop;
        if(this.props.groups !== undefined) {
          idDrop  = this.props.groups.map(function(item, i) {
            item.key = item._id;
            item.value = item._id;
            item.text = item._id;
            item.name = item._id
            return item;
          })
         }


        let formStyle = {
          marginTop: 200,
          marginBottom: 100
        }

        let cardStyle = {
            position: 'absolute',
            width: 450,  
            height: 200,  
            margin: 'auto',  
            padding: 15,
            top: 0,
            left: 0, 
            bottom: 100, 
            right: 0,
            zIndex: 3,
            marginTop: 300,
            marginBottom: 0,
            paddingBottom: 0 

        }

        let headerStyle = {
          fontSize: 30,
          fontWeight: 'bold',
          padding: 20,
          color: '#2185D0'
        }

        let form;
        if(this.props.active) {
          form = (<div className="card big" style={cardStyle}>
                    <Card style={formStyle} color={"blue"}>
                      <Header style={headerStyle}>Preview Survey</Header>
                        <Card.Content>
                          <Form>
                            <Form.Field disabled={true}>
                            <label>First Name</label>
                            <input type="text" name="first-name" placeholder="First Name"/>
                          </Form.Field>
                          <Form.Field disabled={true}>
                            <label>Last Name</label>
                            <input type="text" name="last-name" placeholder="Last Name"/>
                          </Form.Field>
                           <Form.Field disabled={true}>
                            <label>Email</label>
                            <input type="text" name="email" placeholder="Email"/>
                          </Form.Field>
                          <Form.Field disabled={true}>
                            <label>Meeting Times</label>
                            <Dropdown 
                              allowAdditions={true} 
                              fluid multiple selection 
                              options={DayOptions}/>
                          </Form.Field>
                          <Form.Field disabled={true}>
                            <label>Languages</label>
                            <Dropdown 
                              allowAdditions={true} 
                              fluid multiple search selection 
                              options={LanguageOptions}/>
                        </Form.Field>
                        <Form.Field disabled={true}>
                          <label>Requests</label>
                          <textarea rows="2"></textarea>
                       </Form.Field>
                           <Form.Field disabled>
                                <label>Upload Image</label>
                                <Form.Input type="file" name="pic" accept="image/*"/>
                          </Form.Field>
                           <Form.Field>
                            <label>Class Name</label>
                            <input type="text" name="className" placeholder="Class Name"/>
                          </Form.Field>
                        {questions}
                             <Form.Field>
                                <label>Upload Group</label>
                                <Form.Input type="file" name="students" accept=".json" onChange={this.handleFileUpload}/>
                          </Form.Field>
                           <Form.Field>
                            <label>Choose Group</label>
                            <Dropdown 
                              fluid search selection 
                              options={idDrop}
                              value={this.state.students}
                              onChange={this.handleStudents.bind(this)}/>
                          </Form.Field>

                        <SurveyPopup 
                          handleQuestionAdd={this.handleQuestionAdd.bind(this)}
                        />
                        </Form>
                        <Card.Content extra={true}>
                          <div className="link" key="visible">
                            <Button basic small color={"green"} positive size="large" style={buttonStyle} onClick={this.handleSurveySubmit}>
                               <Button.Content visible>Generate</Button.Content>
                            </Button>
                            {link}
                          </div>
                        </Card.Content>
                      </Card.Content>
                  </Card>
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