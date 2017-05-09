/**
 * Created by rui on 5/2/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Card, Dropdown, Header, Icon, Modal, Segment} from "semantic-ui-react";

import ActivityCard from "./components/ActivityCard";


export default class ActivitiesView extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        let test = () => {
            let cards = [];
            for (let i = 0; i < 1; i++) {
                cards.push(
                    <ActivityCard />
                )
            }
            return cards;
        };

        return (
            <div>
                <Header as='h2'> Current Activities: 10 </Header>
                <hr style={{borderTop: "2px solid #8c8b8b", marginBottom: "15px"}}/>
                <Card.Group>
                    { test() }
                </Card.Group>
            </div>
        );
    }
}

