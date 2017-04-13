/**
 * Created by rui on 4/8/17.
 */
import React from 'react'
import {Icon, Item, Grid, Popup } from 'semantic-ui-react'

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


class MemberProfilePopup extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
        <Popup
          trigger={ this.props.trigger }
          position={ this.props.position }
          offset={ this.props.offset }
          flowing
          wide="very"
        >
          <PopupContent/>
        </Popup>
    )
  }
}

MemberProfilePopup.propTypes = {
    trigger: React.PropTypes.node.isRequired,
    position: React.PropTypes.string.isRequired,
    offset: React.PropTypes.number
};

export default MemberProfilePopup;
