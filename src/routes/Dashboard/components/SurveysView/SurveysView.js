/**
 * Created by Matt on 5/23/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Header, Icon, Modal, Segment, Dimmer, Loader, Message } from 'semantic-ui-react'

import randomColor from 'randomcolor'

import SurveyCard from './components/SurveyCard'
import CreateSurveyCard from './components/CreateSurveyCard/CreateSurveyCard'

import {Map, List, Set} from 'immutable';

export default class SurveysView extends React.Component {
    constructor (props) {
        super(props)
    }

    static propTypes = {
        surveysViewData: PropTypes.object.isRequired
    }

    componentWillMount () {
       this.props.fetchSurveyList(); 
    }

    render () {

        const renderSurveyCards = () => {
            return this.props.surveysViewData.get('surveys').map((surveyObj) => (
                <SurveyCard color={surveyObj.get('color')}
                              surveyId={surveyObj.get('surveyId')}
                              name={surveyObj.get('title')}
                              key={surveyObj.get('surveyId')}
                               
                              fetchSurveyList={this.props.fetchSurveyList}

                              openEditModal={this.props.surveysViewData.get('openEditModal')} 
                              isEditing={this.props.surveysViewData.get('isEditing')} 
                              failedToEdit={this.props.surveysViewData.get('failedToEdit')} 
                              editError={this.props.surveysViewData.get('editError')}
                             
                              openDeleteModal={this.props.surveysViewData.get('openDeleteModal')} 
                              isDeleting={this.props.surveysViewData.get('isDeleting')} 
                              failedToDelete={this.props.surveysViewData.get('failedToDelete')} 
                              deleteError={this.props.surveysViewData.get('deleteError')} 

                              updateSurveyViewOpenEditModal={this.props.updateSurveyViewOpenEditModal}
                              updateSurveyViewIsEditing={this.props.updateSurveyViewIsEditing}
                              updateSurveyFailedToEdit={this.props.updateSurveyFailedToEdit}
                              updateSurveyEditError={this.props.updateSurveyEditError} 

                              updateSurveyViewOpenDeleteModal={this.props.updateSurveyViewOpenDeleteModal}
                              updateSurveyViewIsDeleting={this.props.updateSurveyViewIsDeleting}
                              updateSurveyFailedToDelete={this.props.updateSurveyFailedToDelete}
                              updateSurveyDeleteError={this.props.updateSurveyDeleteError}

                              surveyHolder={this.props.surveysViewData.get('surveyHolder')} 
                              surveyHolderQuestionIndex={this.props.surveysViewData.get('surveyHolderQuestionIndex')} 
                              createSurvey={this.props.createSurvey} 
                              updateSurvey={this.props.updateSurvey} 
                              deleteSurvey={this.props.deleteSurvey} 
                              
                              updateSurveyHolderGetSurvey={this.props.updateSurveyHolderGetSurvey}
                              updateSurveyHolderSetId={this.props.updateSurveyHolderSetId}
                              updateSurveyHolderSetTitle={this.props.updateSurveyHolderSetTitle}
                              updateSurveyHolderQuestionCreate={this.props.updateSurveyHolderQuestionCreate}
                              updateSurveyHolderQuestionDelete={this.props.updateSurveyHolderQuestionDelete}
                              updateSurveyHolderQuestionSetType={this.props.updateSurveyHolderQuestionSetType}
                              updateSurveyHolderQuestionSetTitle={this.props.updateSurveyHolderQuestionSetTitle}
                              updateSurveyHolderQuestionSetTooltip={this.props.updateSurveyHolderQuestionSetTooltip}
                              updateSurveyHolderQuestionSetFilter={this.props.updateSurveyHolderQuestionSetFilter}
                              updateSurveyHolderQuestionToggleFilter={this.props.updateSurveyHolderQuestionToggleFilter}
                              updateSurveyHolderQuestionToggleFilterMode={this.props.updateSurveyHolderQuestionToggleFilterMode}
                              updateSurveyHolderQuestionSetAnswersMaximum={this.props.updateSurveyHolderQuestionSetAnswersMaximum}
                              updateSurveyHolderQuestionSetAnswersMinimum={this.props.updateSurveyHolderQuestionSetAnswersMinimum}
                              updateSurveyHolderQuestionToggleAnswersMaximum={this.props.updateSurveyHolderQuestionToggleAnswersMaximum}
                              updateSurveyHolderQuestionToggleAnswersMinimum={this.props.updateSurveyHolderQuestionToggleAnswersMinimum}
                              updateSurveyHolderQuestionIndex={this.props.updateSurveyHolderQuestionIndex} 
                />
            ))
        }

        return (
            <div>
                <Header as='h2' style={{ display: "inline-block", marginBottom: "10px" }}>
                    Surveys : { this.props.surveysViewData.get('surveys').size}
                </Header>
                <hr style={{borderTop: '2px solid #8c8b8b', marginBottom: '15px'}}/>
                {this.props.surveysViewData.get('failedToGet') ? (
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
                                onClick={() => {this.props.fetchSurveyList()}}
                                style={{color:'black'}}>
                                    Reload 
                                </Button>
                              </div>
                            ]}
                     />
                ) : ( 
                    this.props.surveysViewData.get('isLoading') ? (
                          <Loader active inline='centered' size='big'>
                                Loading
                          </Loader>
                    ) : ( 
                        <Card.Group>
                            { renderSurveyCards() }
                            <CreateSurveyCard 
                            surveyHolder={this.props.surveysViewData.get('surveyHolder')} 
                            surveyHolderQuestionIndex={this.props.surveysViewData.get('surveyHolderQuestionIndex')} 

                            openCreateModal={this.props.surveysViewData.get('openCreateModal')} 
                            isCreating={this.props.surveysViewData.get('isCreating')} 
                            failedToCreate={this.props.surveysViewData.get('failedToCreate')} 
                            createError={this.props.surveysViewData.get('createError')} 

                            createSurvey={this.props.createSurvey} 
                            
                            fetchSurveyList={this.props.fetchSurveyList}

                            updateSurveyHolderGetSurvey={this.props.updateSurveyHolderGetSurvey}
                            updateSurveyHolderSetId={this.props.updateSurveyHolderSetId}
                            updateSurveyHolderSetTitle={this.props.updateSurveyHolderSetTitle}
                            updateSurveyHolderQuestionCreate={this.props.updateSurveyHolderQuestionCreate}
                            updateSurveyHolderQuestionDelete={this.props.updateSurveyHolderQuestionDelete}
                            updateSurveyHolderQuestionSetType={this.props.updateSurveyHolderQuestionSetType}
                            updateSurveyHolderQuestionSetTitle={this.props.updateSurveyHolderQuestionSetTitle}
                            updateSurveyHolderQuestionSetTooltip={this.props.updateSurveyHolderQuestionSetTooltip}
                            updateSurveyHolderQuestionSetFilter={this.props.updateSurveyHolderQuestionSetFilter}
                            updateSurveyHolderQuestionToggleFilter={this.props.updateSurveyHolderQuestionToggleFilter}
                            updateSurveyHolderQuestionToggleFilterMode={this.props.updateSurveyHolderQuestionToggleFilterMode}
                            updateSurveyHolderQuestionSetAnswersMaximum={this.props.updateSurveyHolderQuestionSetAnswersMaximum}
                            updateSurveyHolderQuestionSetAnswersMinimum={this.props.updateSurveyHolderQuestionSetAnswersMinimum}
                            updateSurveyHolderQuestionToggleAnswersMaximum={this.props.updateSurveyHolderQuestionToggleAnswersMaximum}
                            updateSurveyHolderQuestionToggleAnswersMinimum={this.props.updateSurveyHolderQuestionToggleAnswersMinimum}
                            updateSurveyHolderQuestionIndex={this.props.updateSurveyHolderQuestionIndex}

                            updateSurveyViewOpenCreateModal={this.props.updateSurveyViewOpenCreateModal}
                            updateSurveyViewIsCreating={this.props.updateSurveyViewIsCreating}
                            updateSurveyFailedToCreate={this.props.updateSurveyFailedToCreate}
                            updateSurveyCreateError={this.props.updateSurveyCreateError}
                            />
                        </Card.Group> 
                    )
                )}

            </div>
        )
    }
}

