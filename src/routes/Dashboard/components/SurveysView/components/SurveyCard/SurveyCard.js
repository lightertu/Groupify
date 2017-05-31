/**
 * Created by Matt on 5/23/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Icon, Popup } from 'semantic-ui-react'

import EditSurveyInfoModal from './EditSurveyInfoModal'
import DeleteSurveyModal from './DeleteSurveyModal'
import { browserHistory } from 'react-router'

import {Map, Set, List, OrderedSet} from 'immutable';

export default class SurveyCard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            deleteConfirmationOpen: false,
            surveyInfoOpen: false
        }
    }

    static propTypes = {
        color: PropTypes.string.isRequired,
        surveyId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
    }

    /* handlers for opening and closing the modals */

    openSurveyInfoHandler = () => {
        this.props.updateSurveyHolderGetSurvey(this.props.surveyId);
        this.props.updateSurveyViewOpenEditModal(true);
    }
    closeSurveyInfoHandler = () => {
        this.props.updateSurveyViewOpenEditModal(false);
    }

    openDeleteSurveyHandler = () => {
        this.props.updateSurveyHolderGetSurvey(this.props.surveyId);
        this.props.updateSurveyViewOpenDeleteModal(true);
    }
    closeDeleteSurveyHandler = () => {
        this.props.updateSurveyViewOpenDeleteModal(false);
    }

    surveyCardOnClickHandler = () => {
        browserHistory.push('/survey?id=' + this.props.surveyId)
    }

    surveyIconOnClick = () => {
        browserHistory.push('/survey?id=' + this.props.surveyId)
    }

    render () {
        return (
            <Card style={{maxWidth: '269.5px'}} link={false}>
                {/* modal components has to stay inside for style reason */}
                <DeleteSurveyModal 
                      onClose={this.closeDeleteSurveyHandler}
                      name={this.props.name}
                      surveyId={this.props.surveyId}
                     
                      surveyHolder={this.props.surveyHolder} 
                      fetchSurveyList={this.props.fetchSurveyList}

                      updateSurveyViewIsDeleting={this.props.updateSurveyViewIsDeleting}
                      updateSurveyFailedToDelete={this.props.updateSurveyFailedToDelete}
                      updateSurveyDeleteError={this.props.updateSurveyDeleteError}

                      openDeleteModal={this.props.openDeleteModal} 
                      isDeleting={this.props.isDeleting} 
                      failedToDelete={this.props.failedToDelete} 
                      deleteError={this.props.deleteError} 

                      deleteSurvey={this.props.deleteSurvey}
                />

                <EditSurveyInfoModal
                      fetchSurveyList={this.props.fetchSurveyList}
                      updateSurveyViewIsEditing={this.props.updateSurveyViewIsEditing}
                      updateSurveyFailedToEdit={this.props.updateSurveyFailedToEdit}
                      updateSurveyEditError={this.props.updateSurveyEditError}

                      openEditModal={this.props.openEditModal} 
                      isEditing={this.props.isEditing} 
                      failedToEdit={this.props.failedToEdit} 
                      editError={this.props.editError} 

                      onClose={this.closeSurveyInfoHandler }
                      surveyId={this.props.surveyId}
                      name={this.props.name }

                      surveyHolder={this.props.surveyHolder} 
                      surveyHolderQuestionIndex={this.props.surveyHolderQuestionIndex} 
                      updateSurvey={this.props.updateSurvey} 
 
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
                <div style={{
                         padding: '1rem',
                         height: '130px',
                         textAlign: 'right',
                         background: this.props.color
                     }}>
                    <Dropdown icon={ <Icon name="edit" size="big" inverted/>} style={{left: '2px', top: "5px"}}>
                        <Dropdown.Menu style={{left: '-48px'}}>

                            <Dropdown.Item text='Edit'
                                           onClick={ this.openSurveyInfoHandler }/>

                            <Dropdown.Item style={{color: 'red'}}
                                           text='Delete'
                                           onClick={this.openDeleteSurveyHandler}/>

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Card.Content>
                    <Card.Header>
                        {this.props.name}
                        <Popup
                            trigger={ <Icon style={{float: 'right', cursor: "pointer", marginTop: "7px"}}
                                            size="large"
                                            color="grey"
                                            onClick={ this.surveyIconOnClick }
                                            name='unhide'/> }
                            position='top right'
                            hoverable
                            wide
                        >   
                            Preview
                        </Popup>
                    </Card.Header>
                </Card.Content>
            </Card>
        )
    }
}
