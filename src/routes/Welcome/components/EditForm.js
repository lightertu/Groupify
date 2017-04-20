import React, { Component } from 'react'
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup'
import {Dropdown, Popup, Button, Icon, Form} from 'semantic-ui-react'

class EditForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
          question: ""
        };
        this.handleQuestionAdd = this.handleQuestionAdd.bind(this);
    }

    handleQuestionAdd(e) {
      e.preventDefault()
      // this.props.handleFormSubmit({Question: this.state.question});
      console.log("Adding Question")
      this.setState({question: ""})
    }

    setValue(field, event) {
      var object = {};
      object[field] = event.target.value;
      this.setState(object);
  }

    render() {
        let buttonStyle = {
            marginTop: 10
        }

        return (
            <div className="">
                <Form onSubmit={this.handleQuestionAdd}>
                    <Popup
                        trigger={
                            <Form.Field>
                                    <label>Ask a Question</label>
                                    <input 
                                        type="text" 
                                        placeholder="What is your favorite color?" 
                                        value={this.state.question} 
                                        onChange={this.setValue.bind(this, 'question')}/>
                                        <Button basic small color={"green"} positive size="small" compact style={buttonStyle}>Submit</Button>
                            </Form.Field>
                        }
                        content="Get to know your students a little more."
                    >
                    </Popup>
                </Form>
            </div>
        )
    }
}

export default EditForm