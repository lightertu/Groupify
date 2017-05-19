/**
 * Created by rui on 5/2/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Header, Icon, Modal, Segment } from 'semantic-ui-react'

import ActivityCard from './components/ActivityCard'

export default class ActivitiesView extends React.Component {
    constructor (props) {
        super(props)

        //TODO: trigger and action to fetch activities data
    }

    static propTypes = {
        activitiesViewData: PropTypes.object.isRequired
    }

    render () {
        const renderActivityCards = () => {
            return this.props.activitiesViewData.activities.map((activityObj) => (
                <ActivityCard color={activityObj.color}
                              name={activityObj.name}
                              endDate={activityObj.endDate}
                              numberOfCurrentParticipants={ activityObj.participants.length }
                              groupCapacity={ activityObj.groupCapacity }/>
            ));
        };

        return (
            <div>
                <Header as='h2'> Current Activities: { /*this.props.activitiesViewData.activities.length*/ } </Header>
                <hr style={{borderTop: '2px solid #8c8b8b', marginBottom: '15px'}}/>
                <Card.Group>
                    { renderActivityCards() }
                </Card.Group>
            </div>
        )
    }
}

