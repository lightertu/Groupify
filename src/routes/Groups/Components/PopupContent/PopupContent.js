/**
 * Created by rui on 4/8/17.
 */
import React from 'react'
import {Icon, Item, Button, Header, Grid, Label } from 'semantic-ui-react'

class PopupContent extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <Grid centered style={ {zIndex: 2000 }}>
                <Grid.Column textAlign='center'>
                    <Item.Group>
                        <Item>
                            <Item.Image size='small' src='http://react.semantic-ui.com/assets/images/wireframe/image.png' />

                            <Item.Content>
                                <Item.Header as='a'>Cute Dog</Item.Header>
                                <Item.Description>Something</Item.Description>
                                <Item.Extra>
                                    <Icon color='green' name='check' /> Group 3
                                </Item.Extra>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Grid.Column>
            </Grid>
        );
    }
}

export default PopupContent;