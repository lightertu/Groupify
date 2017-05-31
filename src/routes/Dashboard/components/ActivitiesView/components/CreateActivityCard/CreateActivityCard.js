/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Header, Icon, Modal, Segment } from 'semantic-ui-react'
import { browserHistory } from 'react-router';
import CreateActivityModal from './CreateActivityModal'
import ActivityInfoForm from '../ActivityInfoForm/ActivityInfoForm'

export default class CreateActivityCard extends React.Component {
    constructor (props) {
        super(props)
    }

    /* handlers for opening and closing the modals */
    openCreateActivityModalHandler = () => {
        this.props.updateActivityHolderGetActivity(null);
        this.props.updateActivityViewOpenCreateModal(true);
    }

    closeCreateActivityModalHandler = () => {
        this.props.updateActivityViewOpenCreateModal(false);
    }

    render () {
        return (
            <Card style={{minHeight:'238.16px', maxWidth: '269.5px', backgroundColor: "#e5e7e8"}} onClick={this.openCreateActivityModalHandler}>
                <CreateActivityModal onClose={this.closeCreateActivityModalHandler }
                      createActivity={this.props.createActivity} 
                      activityHolder={this.props.activityHolder} 

                      fetchActivityList={this.props.fetchActivityList}
                      updateActivityViewIsCreating={this.props.updateActivityViewIsCreating}
                      updateActivityFailedToCreate={this.props.updateActivityFailedToCreate}
                      updateActivityCreateError={this.props.updateActivityCreateError}

                      openCreateModal={this.props.openCreateModal} 
                      isCreating={this.props.isCreating} 
                      failedToCreate={this.props.failedToCreate} 
                      createError={this.props.createError} 

                      updateActivityHolderGetActivity={this.props.updateActivityHolderGetActivity}
                      updateActivityHolderSetId={this.props.updateActivityHolderSetId}
                      updateActivityHolderSetTitle={this.props.updateActivityHolderSetTitle}
                      updateActivityHolderSetTotalCapacity={this.props.updateActivityHolderSetTotalCapacity}
                      updateActivityHolderSetGroupCapacity={this.props.updateActivityHolderSetGroupCapacity}
                      updateActivityHolderSetCurrentCapacity={this.props.updateActivityHolderSetCurrentCapacity}
                      updateActivityHolderSetEndDate={this.props.updateActivityHolderSetEndDate}
                />

                <div style={{ textAlign: "center",
                              position: "relative",
                              top: "47%",
                              opacity: 0.2, }}>
                    <Header>
                        <Icon name='plus' />
                        New Activity
                    </Header>
                </div>
            </Card>
        )
    }
}
