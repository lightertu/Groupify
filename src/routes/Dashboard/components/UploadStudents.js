import React from 'react'
import { Card, Label, Segment, Image, Button, Icon, Form, Header } from 'semantic-ui-react'

class UploadStudent extends React.Component {
    constructor() {
        super();
        this.state = {}
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
                                <Form.Input type="file" name="pic" accept="image/*"/>
                            </Form.Field>
                            <br />
                            <Form.Button basic color='green'>Upload</Form.Button>
                        </Form>
                    </Segment>
                </div>
        )
    }
}

export default UploadStudent;