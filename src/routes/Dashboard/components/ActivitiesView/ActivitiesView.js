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
    }

    static propTypes = {
        activitiesViewData: PropTypes.object.isRequired
    }

    componentWillMount () {
       this.props.fetchActivityList(); 
    }

    render () {
        let currentActivities = [];
        let previousActivities = [];
        let currentDate = Date.now();
        this.props.activitiesViewData.get('activities').forEach((activityObj) => {
            let endDate = new Date(activityObj.get('endDate'));
            (endDate < currentDate)
            ?
            previousActivities.push(
                <ActivityCard color={activityObj.get('color')}
                      activityId={activityObj.get('activityId')}
                      key={activityObj.get('activityId')}
                      name={activityObj.get('title')}
                      endDate={activityObj.get('endDate')}
                      currentCapacity={ activityObj.get('currentCapacity') }
                      groupCapacity={ activityObj.get('groupCapacity') }
                      totalCapacity={ activityObj.get('totalCapacity') }
                    
                      fetchActivityList={this.props.fetchActivityList}

                      openEditModal={this.props.activitiesViewData.get('openEditModal')} 
                      isEditing={this.props.activitiesViewData.get('isEditing')} 
                      failedToEdit={this.props.activitiesViewData.get('failedToEdit')} 
                      editError={this.props.activitiesViewData.get('editError')}
                     
                      openDeleteModal={this.props.activitiesViewData.get('openDeleteModal')} 
                      isDeleting={this.props.activitiesViewData.get('isDeleting')} 
                      failedToDelete={this.props.activitiesViewData.get('failedToDelete')} 
                      deleteError={this.props.activitiesViewData.get('deleteError')} 

                      updateActivityViewOpenEditModal={this.props.updateActivityViewOpenEditModal}
                      updateActivityViewIsEditing={this.props.updateActivityViewIsEditing}
                      updateActivityFailedToEdit={this.props.updateActivityFailedToEdit}
                      updateActivityEditError={this.props.updateActivityEditError} 

                      updateActivityViewOpenDeleteModal={this.props.updateActivityViewOpenDeleteModal}
                      updateActivityViewIsDeleting={this.props.updateActivityViewIsDeleting}
                      updateActivityFailedToDelete={this.props.updateActivityFailedToDelete}
                      updateActivityDeleteError={this.props.updateActivityDeleteError}

                      activityHolder={this.props.activitiesViewData.get('activityHolder')} 
                      
                      createActivity={this.props.createActivity} 
                      updateActivity={this.props.updateActivity} 
                      deleteActivity={this.props.deleteActivity} 
                      
                      updateActivityHolderGetActivity={this.props.updateActivityHolderGetActivity}
                      updateActivityHolderSetId={this.props.updateActivityHolderSetId}
                      updateActivityHolderSetTitle={this.props.updateActivityHolderSetTitle}
                      updateActivityHolderSetTotalCapacity={this.props.updateActivityHolderSetTotalCapacity}
                      updateActivityHolderSetGroupCapacity={this.props.updateActivityHolderSetGroupCapacity}
                      updateActivityHolderSetCurrentCapacity={this.props.updateActivityHolderSetCurrentCapacity}
                      updateActivityHolderSetEndDate={this.props.updateActivityHolderSetEndDate}
                />
            )           
            :
            currentActivities.push(
                <ActivityCard color={activityObj.get('color')}
                      activityId={activityObj.get('activityId')}
                      key={activityObj.get('activityId')}
                      name={activityObj.get('title')}
                      endDate={activityObj.get('endDate')}
                      currentCapacity={ activityObj.get('currentCapacity') }
                      groupCapacity={ activityObj.get('groupCapacity') }
                      totalCapacity={ activityObj.get('totalCapacity') }
                    
                      fetchActivityList={this.props.fetchActivityList}

                      openEditModal={this.props.activitiesViewData.get('openEditModal')} 
                      isEditing={this.props.activitiesViewData.get('isEditing')} 
                      failedToEdit={this.props.activitiesViewData.get('failedToEdit')} 
                      editError={this.props.activitiesViewData.get('editError')}
                     
                      openDeleteModal={this.props.activitiesViewData.get('openDeleteModal')} 
                      isDeleting={this.props.activitiesViewData.get('isDeleting')} 
                      failedToDelete={this.props.activitiesViewData.get('failedToDelete')} 
                      deleteError={this.props.activitiesViewData.get('deleteError')} 

                      updateActivityViewOpenEditModal={this.props.updateActivityViewOpenEditModal}
                      updateActivityViewIsEditing={this.props.updateActivityViewIsEditing}
                      updateActivityFailedToEdit={this.props.updateActivityFailedToEdit}
                      updateActivityEditError={this.props.updateActivityEditError} 

                      updateActivityViewOpenDeleteModal={this.props.updateActivityViewOpenDeleteModal}
                      updateActivityViewIsDeleting={this.props.updateActivityViewIsDeleting}
                      updateActivityFailedToDelete={this.props.updateActivityFailedToDelete}
                      updateActivityDeleteError={this.props.updateActivityDeleteError}

                      activityHolder={this.props.activitiesViewData.get('activityHolder')} 
                      
                      createActivity={this.props.createActivity} 
                      updateActivity={this.props.updateActivity} 
                      deleteActivity={this.props.deleteActivity} 
                      
                      updateActivityHolderGetActivity={this.props.updateActivityHolderGetActivity}
                      updateActivityHolderSetId={this.props.updateActivityHolderSetId}
                      updateActivityHolderSetTitle={this.props.updateActivityHolderSetTitle}
                      updateActivityHolderSetTotalCapacity={this.props.updateActivityHolderSetTotalCapacity}
                      updateActivityHolderSetGroupCapacity={this.props.updateActivityHolderSetGroupCapacity}
                      updateActivityHolderSetCurrentCapacity={this.props.updateActivityHolderSetCurrentCapacity}
                      updateActivityHolderSetEndDate={this.props.updateActivityHolderSetEndDate}
                />
            )
        });

        return (
            <div>
                <Header as='h2' style={{ display: "inline-block", marginBottom: "10px" }}>
                    Current Activities: { currentActivities.length}
                </Header>
                <hr style={{borderTop: '2px solid #8c8b8b', marginBottom: '15px'}}/>
                <Card.Group>
                    {currentActivities}
                    <CreateActivityCard color=''
                      activityId=''
                      key='CreateActivityCard_Key'
                      name=''
                      endDate=''
                      currentCapacity=''
                      groupCapacity=''
                      totalCapacity=''
                    
                      fetchActivityList={this.props.fetchActivityList}

                      openCreateModal={this.props.activitiesViewData.get('openCreateModal')} 
                      isCreating={this.props.activitiesViewData.get('isCreating')} 
                      failedToCreate={this.props.activitiesViewData.get('failedToCreate')} 
                      createError={this.props.activitiesViewData.get('createError')} 

                      updateActivityViewOpenCreateModal={this.props.updateActivityViewOpenCreateModal}
                      updateActivityViewIsCreating={this.props.updateActivityViewIsCreating}
                      updateActivityFailedToCreate={this.props.updateActivityFailedToCreate}
                      updateActivityCreateError={this.props.updateActivityCreateError}

                      activityHolder={this.props.activitiesViewData.get('activityHolder')} 
                      
                      createActivity={this.props.createActivity} 
                      updateActivity={this.props.updateActivity} 
                      deleteActivity={this.props.deleteActivity} 
                      
                      updateActivityHolderGetActivity={this.props.updateActivityHolderGetActivity}
                      updateActivityHolderSetId={this.props.updateActivityHolderSetId}
                      updateActivityHolderSetTitle={this.props.updateActivityHolderSetTitle}
                      updateActivityHolderSetTotalCapacity={this.props.updateActivityHolderSetTotalCapacity}
                      updateActivityHolderSetGroupCapacity={this.props.updateActivityHolderSetGroupCapacity}
                      updateActivityHolderSetCurrentCapacity={this.props.updateActivityHolderSetCurrentCapacity}
                      updateActivityHolderSetEndDate={this.props.updateActivityHolderSetEndDate}
                    
                    />
                </Card.Group>
                <Header as='h2' style={{ display: "inline-block", marginBottom: "10px" }}>
                    Previous Activities: { previousActivities.length}
                </Header>
                <hr style={{borderTop: '2px solid #8c8b8b', marginBottom: '15px'}}/>
                <Card.Group>
                    {previousActivities}
                </Card.Group>
            </div>
        )
    }
}

