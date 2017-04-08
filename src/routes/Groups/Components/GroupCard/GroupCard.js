/**
 * Created by rui on 4/8/17.
 */
import React from 'react'
import {Icon, Card, Label, Segment, Item, Grid, Image} from 'semantic-ui-react'

class GroupCard extends React.Component {
    constructor() {
        super();
        this.state = {activeItem: 'home'}
    }

    render() {
        // some fake test date
        const member = [
            {
                image: "http://react.semantic-ui.com/assets/images/wireframe/image.png"
            },
            {
                image: "http://react.semantic-ui.com/assets/images/wireframe/image.png"
            },
            {
                image: "http://react.semantic-ui.com/assets/images/wireframe/image.png"
            },
            {
                image: "http://react.semantic-ui.com/assets/images/wireframe/image.png"
            },
            {
                image: "http://react.semantic-ui.com/assets/images/wireframe/image.png"
            },
            {
                image: "http://react.semantic-ui.com/assets/images/wireframe/image.png"
            },
            {
                image: "http://react.semantic-ui.com/assets/images/wireframe/image.png"
            },
            {
                image: "http://react.semantic-ui.com/assets/images/wireframe/image.png"
            },
        ];
        // TODO: write a function to generate different row arrangements
        return (

            <Segment color='yellow'>
                <Label attached='top left'>Group 1</Label>
                <Card.Group itemsPerRow={ 5 }>
                    {
                        member.map((member) =>
                            <Card raised image = { member.image }/>
                        )
                    }
                </Card.Group>
                <Label attached="top right"> <Icon name='user'/> 3/3 </Label>
            </Segment>
        )
    }
}

export default GroupCard;
