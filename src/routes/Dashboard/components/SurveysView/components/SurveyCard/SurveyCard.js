/**
 * Created by Matt on 5/23/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Icon, Popup } from 'semantic-ui-react'

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

    openDeleteSurveyHandler = () => {
        this.props.updateSurveyHolderGetSurvey(this.props.surveyId);
        this.props.updateSurveyViewOpenDeleteModal(true);
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
                {/* Matt's Note: since backend hoodup update, keeping modals here creates lag */}

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
