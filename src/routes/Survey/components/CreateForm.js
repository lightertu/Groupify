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
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    handleFormSubmit(e) {
      e.preventDefault()
      console.log(this.state)
      let firstName = this.state.firstName.trim();
      let lastName = this.state.lastName.trim();
      let email = this.state.email.trim();
      
      console.log(this.state.meetingTimes)

      let size = 7;
      let days = {'monday':0, 'tuesday':1, 'wednesday':2, 'thursday':3, 'friday':4, 'saturday':5, 'sunday':6}
      let meetingTimes = [];
      while(size--) meetingTimes[size] = false;

      for(let i = 0; i < this.state.meetingTimes.length; i++) {
        console.log(days[this.state.meetingTimes[i]])
        meetingTimes[days[this.state.meetingTimes[i]]] = true;
        console.log(meetingTimes)
      }


      this.props.handleFormSubmit({
        firstName: firstName,
        lastName: lastName, 
        email: email, 
        languages: this.state.languages, 
        meetingTimes: meetingTimes,
        requests: this.state.requests,
        image: this.state.image,
        groupNumber: -1,
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
          extraQuestions: obj,
          file: undefined
      });
    }

    handleFileUpload(e) {
        e.preventDefault();
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onloadend = () => {
          this.setState({
            file: file,
            image: reader.result
          });
        }

        reader.readAsDataURL(file)
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
    let field = this.state[input]
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
          { key: 1, value: 'monday', text: 'monday', name: 'monday'},
          { key: 2, value: 'tuesday', text: 'tuesday', name: 'tuesday'},
          { key: 3, value: 'wednesday', text: 'wednesday', name: 'wednesday'},
          { key: 4, value: 'thursday', text: 'thursday', name: 'thursday'},
          { key: 5, value: 'friday', text: 'friday', name: 'friday'},
          { key: 6, value: 'saturday', text: 'saturday', name: 'saturday'},
          { key: 7, value: 'sunday', text: 'sunday', name: 'sunday'}
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

        let imgStyles = {
          width: 150,
          height: 150,
          padding: 5
        }
        
        let picPopup;
        if(this.state.image) {
          picPopup = (
                  <div>
                  <Header>Preview</Header>
                  <img  style={imgStyles} src={this.state.image}/>
                  </div>)
        } else {
          picPopup = 'This will be your profile picture for the professor to view'
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
                              options={DayOptions}
                              onChange={this.setMultipleValue.bind(this, 'meetingTimes')}/>
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
                            {picPopup}
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
          </div>
        )   
    }
}

export default CreateForm;