import React from 'react'
import {Dropdown, Header, Button, Form, Popup, Card} from 'semantic-ui-react'

class CreateForm extends React.Component {
    constructor(props) {
        super(props);
        var obj = {}
        this.props.questions[0].questions.forEach(function(data) {
            obj[data] = ""
          });
        this.state = {
          firstName: "",
          lastName: "",
          email: "",
          meetingTimes: [],
          languages: [],
          requests: [],
          image: undefined,
          extraQuestions: obj
        };
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.extraQuestionsGeneration = this.extraQuestionsGeneration.bind(this);
    }

    handleFormSubmit(e) {
      e.preventDefault()
      console.log(this.state)
      let firstName = this.state.firstName.trim();
      let lastName = this.state.lastName.trim();
      let email = this.state.email.trim();
      


      this.props.handleFormSubmit({
        firstName: firstName,
        lastName: lastName, 
        email: email, 
        languages: this.state.languages, 
        meetingTimes: this.state.meetingTimes,
        requests: this.state.requests,
        extraQuestions: this.state.extraQuestions});
      
      var obj = {}
        this.props.questions[0].questions.forEach(function(data) {
            obj[data] = ""
          });

      this.setState({
          firstName: "",
          lastName: "",
          email: "",
          meetingTimes: [],
          languages: [],
          requests: [],
          image: undefined,
          extraQuestions: obj
      });
    }

    validateEmail(value) {
      // regex from http://stackoverflow.com/questions/46155/validate-email-address-in-javascript
      var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(value);
    }

    loadFile(e) {
        var result = JSON.parse(e.target.result);
        this.setState({image: result});
    }

    handleFileUpload(e) {
        var file = e.target.files.item(0);
        var fr = new FileReader();
        fr.onload = this.loadFile.bind(this); // this it key to passing in the global 'this' into the fr.onload function
        fr.readAsText(file);
      }

    setValue(field, event) {
      var object = {};
      object[field] = event.target.value;
      this.setState(object);
  }

    extraSetValue(field, event) {
      this.state.extraQuestions[field] = event.target.value;
      this.setState({extraQuestions:this.state.extraQuestions})
    }

  setMultipleValue(input, event) {
    let field = this.state['languages']
    if(event.target.getAttribute('name') === null) {
      let item = event.target.parentNode.getAttribute('value');
      let index = field.indexOf(item);
      if(index >= 0) {
        field.splice(index, 1);
      }

    } else {
      field.push(event.target.getAttribute('name'));
    }
    
    this.setState({field:field});
  }

  extraQuestionsGeneration(questions) {
    var result = []
    for(var i = 0; i < questions.length; i++) {
      result.push(<Form.Field key={i}>
                    <label>{questions[i]}</label>
                                <textarea rows="2" value={this.state.extraQuestions[questions[i]]} onChange={this.extraSetValue.bind(this, questions[i])}></textarea>
                  </Form.Field>)
    }
    return result
  }


    render() {
        const linkStyles = {
            color: 'black',
            };

        const styles = {
          allowAdditions: 'true',
        };
        
        const LanguageOptions = [ 
          { key: 1, value: 'Hadoop', text: 'Hadoop', name: 'Hadoop' },
          { key: 2, value: 'Python', text: 'Python', name: 'Python' },
          { key: 3, value: 'Java', text: 'Java', name: 'Java' },
          { key: 4, value: 'JavaScript', text: 'JavaScript', name: 'JavaScript' },
          { key: 5, value: 'C', text: 'C', name: 'C' },
          { key: 6, value: 'C++', text: 'C++', name: 'C++' },
          { key: 7, value: 'Bash', text: 'Bash', name: 'Bash' },
          { key: 8, value: 'PHP', text: 'PHP', name: 'PHP' },
          { key: 9, value: 'Ruby', text: 'Ruby', name: 'Ruby' },
          { key: 10, value: 'Git', text: 'Git', name: 'Git' },
          { key: 11, value: 'React', text: 'React', name: 'React' },
          { key: 12, value: 'Flask', text: 'Flask', name: 'Flask' },
          { key: 13, value: 'NodeJS', text: 'NodeJS', name: 'NodeJS' },
          { key: 14, value: 'Earlang', text: 'Earlang', name: 'Earlang' },
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

        let extraQuestions = this.extraQuestionsGeneration(this.props.questions[0].questions);

        let formStyles = {
          marginTop: "10%",
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
        
        let form = (<div className="card big " style={cardStyle}>
                    <Card style={formStyles} color={'blue'}>
                      <Header style={headerStyle}>Survey ID:</Header>
                        <Card.Content>
                          <Form onSubmit={this.handleFormSubmit}>
                            <Form.Field>
                            <label>First Name</label>
                            <input type="text" placeholder="First Name" value={this.state.firstName} onChange={this.setValue.bind(this, 'firstName')}/>
                          </Form.Field>
                           <Form.Field>
                            <label>Last Name</label>
                            <input type="text" placeholder="Last Name" value={this.state.lastName} onChange={this.setValue.bind(this, 'lastName')}/>
                          </Form.Field>
                            <Form.Field>
                            <label>Email</label>
                            <input type="text" placeholder="Email" value={this.state.email} onChange={this.setValue.bind(this, 'email')}/>
                          </Form.Field>
                           <Form.Field>
                            <label>Meeting Times</label>
                            <Dropdown 
                              allowAdditions={true} 
                              fluid multiple selection 
                              options={DayOptions}/>
                          </Form.Field>
                           <Form.Field>
                            <label>Languages</label>
                            <Dropdown 
                              allowAdditions={true} 
                              fluid multiple search selection 
                              options={LanguageOptions}
                              value={this.state.languages}
                              onChange={this.setMultipleValue.bind(this, 'languages')}
                         />

                        </Form.Field>
                         <Form.Field>
                          <Popup 
                            trigger={
                              <div>
                              <label>Requests</label>
                              <textarea rows="2"></textarea>
                              </div>
                              }
                            wide='very'
                          >
                          Separate teammate requests by a comma  ei: Joseph, Rui, Kai
                          </Popup>
                        </Form.Field>
                         <Form.Field>
                          <Popup
                            trigger={
                              <div>
                              <label>Upload Image</label>
                              <Form.Input type="file" name="pic" accept="" onChange={this.handleFileUpload}/>
                              </div>
                            }
                            wide='very'
                            >
                            This will be your profile picture for the professor to view
                            </Popup>
                         
                        </Form.Field>
                        {extraQuestions}

                         <Button basic color={'blue'}>Submit</Button>
                        </Form>
                      </Card.Content>
                  </Card>
                  </div>
                  )
        return (
          <div>
            {form}
            <div className="">
            </div>
          </div>
        )   
    }
}

export default CreateForm;