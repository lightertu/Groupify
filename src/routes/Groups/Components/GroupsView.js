/**
 * Created by rui on 4/7/17.
 */
import React from 'react'
import {Card, Feed} from 'semantic-ui-react'
import {Icon, Label, Segment, Item, Grid, Image} from 'semantic-ui-react'

export const Groups = (props) => (
        <Grid columns='equal'>
            <Grid.Row>
                <Grid.Column>
                    <Segment textAlign={ "center" } rised color='yellow'>
                        <Label attached='top left'>Group 1</Label>
                        <Card.Group itemsPerRow={5}>
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                        </Card.Group>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment rised color="teal">
                        <Label attached='top left'>group 2</Label>
                        <Card.Group itemsPerRow={5}>
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                        </Card.Group>
                    </Segment>
                </Grid.Column>
                <Grid.Column>
                    <Segment textAlign={ "center" } rised color='yellow'>
                        <Label attached='top left'>Group 1</Label>
                        <Card.Group itemsPerRow={5}>
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                            <Card raised image={"http://react.semantic-ui.com/assets/images/wireframe/image.png"} />
                        </Card.Group>
                    </Segment>
                </Grid.Column>
            </Grid.Row>
        </Grid>
)


Groups.propTypes = {

    /*
     counter: React.PropTypes.number.isRequired,
     doubleAsync: React.PropTypes.func.isRequired,
     increment: React.PropTypes.func.isRequired
     */
}

export default Groups
