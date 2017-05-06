/**
 * Created by rui on 5/2/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Card, Dropdown, Header, Icon, Segment} from "semantic-ui-react";

import randomColor from "randomcolor";

class _ActivityCard extends React.Component {
    constructor(props) {
        super(props)
    }

    static propTypes = {
        color: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        numberOfCurrentParticipants: PropTypes.number.isRequired,
        groupCapacity: PropTypes.number.isRequired,
    };

    render() {
        return (
            <Card style={{maxWidth: "273px"}}>
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
                    <Dropdown icon={ <Icon name="edit" size="large" inverted />}  style={{ left: "5px"}}>
                        <Dropdown.Menu style={{ left: "-56px"}}>
                            <Dropdown.Item text='Edit' />
                            <Dropdown.Item style={{color:"red"}} text='Delete' />
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

export default class ActivitiesView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let test = () => {
            let cards = [];
            for (let i = 0; i < 100; i++) {
                cards.push(
                    <_ActivityCard />
                )
            }
            return cards;
        };

        return (
            <div>
                <Header as='h2'> Current Activities: 10 </Header>
                <hr style={{borderTop: "2px solid #8c8b8b", paddingBottom: "8px"}}/>
                <Card.Group>
                    { test() }
                </Card.Group>
            </div>
        );
    }
}

