/**
 * Created by rui on 5/2/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Header, Icon, Modal, Segment } from 'semantic-ui-react'
import randomColor from 'randomcolor'

import ActivityCard from './components/ActivityCard'
import CreateActivityCard from './components/CreateActivityCard/CreateActivityCard'

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
                              activityId={activityObj.activityId}
                              name={activityObj.name}
                              endDate={activityObj.endDate}
                              numberOfCurrentParticipants={ activityObj.participants.length }
                              groupCapacity={ activityObj.groupCapacity }
                              totalCapacity={ activityObj.totalCapacity }/>
            ))
        }

        return (
            <div>
                <Header as='h2' style={{ display: "inline-block", marginBottom: "10px" }}>
                    Current Activities: { this.props.activitiesViewData.activities.length }
                </Header>
                <hr style={{borderTop: '2px solid #8c8b8b', marginBottom: '15px'}}/>
                <Card.Group>
                    { renderActivityCards() }

                    <CreateActivityCard/>
                </Card.Group>
            </div>
        )
    }
}

