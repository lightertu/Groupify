'use strict'
import React from 'react'
import { Card, Label, Segment, Image, Button, Icon, Form, Header } from 'semantic-ui-react'

class UploadStudent extends React.Component {
    constructor() {
        super();
        this.state = {students:null}
        this.UploadStudents = this.UploadStudents.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
    }

    UploadStudents(e) {
        e.preventDefault();
        this.props.UploadStudents(this.state.students);
        this.setState({students:null})
    }

    loadFile(e) {
        console.log(e);
        var result = JSON.parse(e.target.result);
        console.log(result)
        this.setState({students: result});
    }

    handleFileUpload(e) {
        var file = e.target.files.item(0);
        var fr = new FileReader();
        fr.onload = this.loadFile.bind(this); // this it key to passing in the global 'this' into the fr.onload function
        fr.readAsText(file);

    }

    render() {
        let styles = {
            marginTop: 150,
            marginLeft: '35%',
            paddingRight: 90,
            paddingLeft: 90
        };

        let buttonStyles = {
          display: 'block'
        };

        return (
                <div>
                    <Segment compact color="blue" size={'big'} padded='very' style={styles}>
                        <Header>Upload List of students:</Header>
                        <br />
                        <Form>
                            <Form.Field>
                                <Form.Input type="file" name="students" accept=".json" onChange={this.handleFileUpload}/>
                            </Form.Field>
                            <br />
                            <Form.Button basic color='green' onClick={this.UploadStudents}>Upload</Form.Button>
                        </Form>
                    </Segment>
                </div>
        )
    }
}

export default UploadStudent;