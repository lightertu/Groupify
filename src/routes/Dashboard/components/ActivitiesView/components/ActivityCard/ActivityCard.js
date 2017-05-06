/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Card, Dropdown, Header, Icon, Modal, Segment} from "semantic-ui-react";

import randomColor from "randomcolor";
import EditActivityInfoModal from "./EditActivityInfoModal"
import DeleteActivityModal from "./DeleteActivityModal"

export default class ActivityCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deleteConfirmationOpen: false,
            activityInfoOpen: false
        }
    }

    static propTypes = {
        color: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        numberOfCurrentParticipants: PropTypes.number.isRequired,
        groupCapacity: PropTypes.number.isRequired,
    };

    /* handlers for opening and closing the modals */
    openDeleteConfirmationHandler = () => { this.state = this.setState({ deleteConfirmationOpen: true, activityInfoOpen: false}) };
    closeDeleteConfirmationHandler = () => { this.state = this.setState({ deleteConfirmationOpen: false, activityInfoOpen: false }) };
    openActivityInfoHandler = () => { this.state = this.setState({ deleteConfirmationOpen: false, activityInfoOpen: true}) };
    closeActivityInfoHandler = () => { this.state = this.setState({ deleteConfirmationOpen: false, activityInfoOpen: false }) };

    render() {
        return (
            <Card style={{maxWidth: "269.5px"}}>
                <DeleteActivityModal open={ this.state.deleteConfirmationOpen } onClose={this.closeDeleteConfirmationHandler }/>
                <EditActivityInfoModal open={ this.state.activityInfoOpen } onClose={this.closeActivityInfoHandler }/>
                <div style={{
                    padding: "1rem",
                    height: "130px",
                    textAlign: "right",
                    background: randomColor({
                        luminosity: 'dark',
                        format: 'hsla', // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
                        alpha: 0.7,
                    })
                }}>
                    <Dropdown icon={ <Icon name="edit" size="large" inverted/>} style={{left: "5px"}}>
                        <Dropdown.Menu style={{left: "-56px"}}>

                            <Dropdown.Item text='Edit'
                                           onClick={ this.openActivityInfoHandler }/>

                            <Dropdown.Item style={{color: "red"}}
                                           text='Delete'
                                           onClick={ this.openDeleteConfirmationHandler }/>

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Card.Content>
                    <Card.Header>
                        CIS 422
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            Ends on 6/12/2015
                        </span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <a>
                        <Icon name='user'/>
                        3/40
                    </a>
                </Card.Content>
            </Card>
        )
    }
}
