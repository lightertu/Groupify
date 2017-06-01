/*
 * Created by rui on 5/2/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Header, Icon, Modal, Segment, Loader, Message} from 'semantic-ui-react'
import randomColor from 'randomcolor'

import ActivityCard from './components/ActivityCard'
import CreateActivityCard from './components/CreateActivityCard/CreateActivityCard'
import EditActivityInfoModal from './components/ActivityCard/EditActivityInfoModal'
import DeleteActivityModal from './components/ActivityCard/DeleteActivityModal'

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

    closeDeleteActivityHandler = () => {
        this.props.updateActivityViewOpenDeleteModal(false);
    }

    closeActivityInfoHandler = () => {
        this.props.updateActivityViewOpenEditModal(false);
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
                      updateActivityHolderSetTotalCapacity={
                          this.props.updateActivityHolderSetTotalCapacity}
                      updateActivityHolderSetGroupCapacity={
                          this.props.updateActivityHolderSetGroupCapacity}
                      updateActivityHolderSetCurrentCapacity={
                          this.props.updateActivityHolderSetCurrentCapacity}
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
                      updateActivityHolderSetTotalCapacity={
                          this.props.updateActivityHolderSetTotalCapacity}
                      updateActivityHolderSetGroupCapacity={
                          this.props.updateActivityHolderSetGroupCapacity}
                      updateActivityHolderSetCurrentCapacity={
                          this.props.updateActivityHolderSetCurrentCapacity}
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
                {this.props.activitiesViewData.get('failedToGet') ? (
                      <Message style={{textAlign:'center'}}
                            error
                            header='An error occurd while loading your data'
                            list={[
                              <li key='ErrorMessage_li_1'>
                                  Please Click the "retry" method to resubmit your request
                              </li>,
                              <li key='ErrorMessage_li_2'>
                                  If the problem presists, please contact our Customer Support
                              </li>,
                              <div key='ErrorMessage_li_3' className="ui center aligned segment basic" >
                                <Button className="large yellow button" 
                                onClick={() => {this.props.fetchActivityList()}}
                                style={{color:'black'}}>
                                    Reload 
                                </Button>
                              </div>
                            ]}
                     />
                ) : ( 
                    this.props.activitiesViewData.get('isLoading') ? (
                          <Loader active inline='centered' size='big'>
                                Loading
                          </Loader>
                    ) : ( 
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

                              updateActivityViewSelectingSurvey={
                                  this.props.updateActivityViewSelectingSurvey}
                              updateActivityViewCreatingSurvey={
                                  this.props.updateActivityViewCreatingSurvey}

                              creatingSurvey={this.props.activitiesViewData.get('creatingSurvey')} 
                              selectingSurvey={this.props.activitiesViewData.get('selectingSurvey')} 

                              openCreateModal={this.props.activitiesViewData.get('openCreateModal')} 
                              isCreating={this.props.activitiesViewData.get('isCreating')} 
                              failedToCreate={this.props.activitiesViewData.get('failedToCreate')} 
                              createError={this.props.activitiesViewData.get('createError')} 

                              updateActivityViewOpenCreateModal={
                                  this.props.updateActivityViewOpenCreateModal}
                              updateActivityViewIsCreating={
                                  this.props.updateActivityViewIsCreating}
                              updateActivityFailedToCreate={
                                  this.props.updateActivityFailedToCreate}
                              updateActivityCreateError={
                                  this.props.updateActivityCreateError}

                              activityHolder={this.props.activitiesViewData.get('activityHolder')} 
                               
                              createActivity={this.props.createActivity} 
                              updateActivity={this.props.updateActivity} 
                              deleteActivity={this.props.deleteActivity} 
                                                   
                              createSurveyFromActivity={this.props.createSurveyFromActivity} 
                              
                              updateActivityHolderGetActivity={
                                  this.props.updateActivityHolderGetActivity}
                              updateActivityHolderSetId={this.props.updateActivityHolderSetId}
                              updateActivityHolderSetTitle={this.props.updateActivityHolderSetTitle}
                              updateActivityHolderSetTotalCapacity={
                                  this.props.updateActivityHolderSetTotalCapacity}
                              updateActivityHolderSetGroupCapacity={
                                  this.props.updateActivityHolderSetGroupCapacity}
                              updateActivityHolderSetCurrentCapacity={
                                  this.props.updateActivityHolderSetCurrentCapacity}
                              updateActivityHolderSetEndDate={this.props.updateActivityHolderSetEndDate}
                              
                              /** Survey Tools (For survey creation selection) **/ 
                              surveys={this.props.surveysViewData.get('surveys')} 
                              surveyHolder={this.props.surveysViewData.get('surveyHolder')} 
                              surveyHolderQuestionIndex={
                                  this.props.surveysViewData.get('surveyHolderQuestionIndex')} 

                              createSurvey={this.props.createSurvey} 
                              
                              fetchSurveyList={this.props.fetchSurveyList}

                              updateSurveyHolderGetSurvey={this.props.updateSurveyHolderGetSurvey}
                              updateSurveyHolderSetId={this.props.updateSurveyHolderSetId}
                              updateSurveyHolderSetTitle={this.props.updateSurveyHolderSetTitle}
                              updateSurveyHolderQuestionCreate={
                                  this.props.updateSurveyHolderQuestionCreate}
                              updateSurveyHolderQuestionDelete={
                                  this.props.updateSurveyHolderQuestionDelete}
                              updateSurveyHolderQuestionSetType={
                                  this.props.updateSurveyHolderQuestionSetType}
                              updateSurveyHolderQuestionSetTitle={
                                  this.props.updateSurveyHolderQuestionSetTitle}
                              updateSurveyHolderQuestionSetTooltip={
                                  this.props.updateSurveyHolderQuestionSetTooltip}
                              updateSurveyHolderQuestionSetFilter={
                                  this.props.updateSurveyHolderQuestionSetFilter}
                              updateSurveyHolderQuestionToggleFilter={
                                  this.props.updateSurveyHolderQuestionToggleFilter}
                              updateSurveyHolderQuestionToggleFilterMode={
                                  this.props.updateSurveyHolderQuestionToggleFilterMode}
                              updateSurveyHolderQuestionSetAnswersMaximum={
                                  this.props.updateSurveyHolderQuestionSetAnswersMaximum}
                              updateSurveyHolderQuestionSetAnswersMinimum={
                                  this.props.updateSurveyHolderQuestionSetAnswersMinimum}
                              updateSurveyHolderQuestionToggleAnswersMaximum={
                                  this.props.updateSurveyHolderQuestionToggleAnswersMaximum}
                              updateSurveyHolderQuestionToggleAnswersMinimum={
                                  this.props.updateSurveyHolderQuestionToggleAnswersMinimum}
                              updateSurveyHolderQuestionIndex={
                                  this.props.updateSurveyHolderQuestionIndex}

                              updateSurveyViewOpenCreateModal={
                                  this.props.updateSurveyViewOpenCreateModal}
                              updateSurveyViewIsCreating={this.props.updateSurveyViewIsCreating}
                              updateSurveyFailedToCreate={this.props.updateSurveyFailedToCreate}
                              updateSurveyCreateError={this.props.updateSurveyCreateError}
                           
                            />
                        </Card.Group>
                    )
                )}
                <Header as='h2' style={{ display: "inline-block", marginBottom: "10px" }}>
                    Previous Activities: { previousActivities.length}
                </Header>
                <hr style={{borderTop: '2px solid #8c8b8b', marginBottom: '15px'}}/>
                {
                (    
                    this.props.activitiesViewData.get('failedToGet')
                    || this.props.activitiesViewData.get('isLoading')
                ) ? (
                     null 
                ) : ( 
                    <Card.Group>
                        {previousActivities}
                    </Card.Group>
                )}
                <DeleteActivityModal 
                    onClose={this.closeDeleteActivityHandler}
                    name={this.props.name}
                     
                    fetchActivityList={this.props.fetchActivityList}

                    updateActivityViewIsDeleting={this.props.updateActivityViewIsDeleting}
                    updateActivityFailedToDelete={this.props.updateActivityFailedToDelete}
                    updateActivityDeleteError={this.props.updateActivityDeleteError}
                     
                    openDeleteModal={this.props.activitiesViewData.get('openDeleteModal')} 
                    isDeleting={this.props.activitiesViewData.get('isDeleting')} 
                    failedToDelete={this.props.activitiesViewData.get('failedToDelete')} 
                    deleteError={this.props.activitiesViewData.get('deleteError')} 
                   
                    activityHolder={this.props.activitiesViewData.get('activityHolder')} 
                    deleteActivity={this.props.deleteActivity}
                />

                <EditActivityInfoModal
                    fetchActivityList={this.props.fetchActivityList}
                    updateActivityViewIsEditing={this.props.updateActivityViewIsEditing}
                    updateActivityFailedToEdit={this.props.updateActivityFailedToEdit}
                    updateActivityEditError={this.props.updateActivityEditError} 
                    
                    openEditModal={this.props.activitiesViewData.get('openEditModal')} 
                    isEditing={this.props.activitiesViewData.get('isEditing')} 
                    failedToEdit={this.props.activitiesViewData.get('failedToEdit')} 
                    editError={this.props.activitiesViewData.get('editError')}

                    onClose={this.closeActivityInfoHandler }
                    name={this.props.name }

                    activityHolder={this.props.activitiesViewData.get('activityHolder')} 
                    updateActivity={this.props.updateActivity} 

                    updateActivityHolderGetActivity={this.props.updateActivityHolderGetActivity}
                    updateActivityHolderSetId={this.props.updateActivityHolderSetId}
                    updateActivityHolderSetTitle={this.props.updateActivityHolderSetTitle}
                    updateActivityHolderSetTotalCapacity={
                        this.props.updateActivityHolderSetTotalCapacity}
                    updateActivityHolderSetGroupCapacity={
                        this.props.updateActivityHolderSetGroupCapacity}
                    updateActivityHolderSetCurrentCapacity={
                        this.props.updateActivityHolderSetCurrentCapacity}
                    updateActivityHolderSetEndDate={this.props.updateActivityHolderSetEndDate}
                />
            </div>
        )
    }
}

