/**
 * Created by Matt on 5/23/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Icon, Popup } from 'semantic-ui-react'

import randomColor from 'randomcolor'
import EditSurveyInfoModal from './EditSurveyInfoModal'
import DeleteSurveyModal from './DeleteSurveyModal'
import { browserHistory } from 'react-router'

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
    openDeleteConfirmationHandler = () => {
        this.state = this.setState({
            deleteConfirmationOpen: true,
            surveyInfoOpen: false,
        })
    }
    closeDeleteConfirmationHandler = () => {
        this.state = this.setState({
            deleteConfirmationOpen: false,
            surveyInfoOpen: false,
        })
    }
    openSurveyInfoHandler = () => {
        this.state = this.setState({
            surveyInfoOpen: true,
            deleteConfirmationOpen: false,
        })
    }
    closeSurveyInfoHandler = () => {
        this.state = this.setState({
            surveyInfoOpen: false,
            deleteConfirmationOpen: false,
        })
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
                <DeleteSurveyModal open={ this.state.deleteConfirmationOpen }
                                     onClose={this.closeDeleteConfirmationHandler }
                                     name={this.props.name}
                                     surveyId={this.props.surveyId}/>

                <EditSurveyInfoModal open={ this.state.surveyInfoOpen }
                                       onClose={this.closeSurveyInfoHandler }
                                       surveyId={this.props.surveyId}
                                       name={this.props.name }
                />
                <div style={{
                         padding: '1rem',
                         height: '130px',
                         textAlign: 'right',
                         background: randomColor({
                         luminosity: 'dark',
                         format: 'hsla', // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
                         alpha: 0.7,
                     })
                     }}>
                    <Dropdown icon={ <Icon name="edit" size="big" inverted/>} style={{left: '2px', top: "5px"}}>
                        <Dropdown.Menu style={{left: '-48px'}}>

                            <Dropdown.Item text='Edit'
                                           onClick={ this.openSurveyInfoHandler }/>

                            <Dropdown.Item style={{color: 'red'}}
                                           text='Delete'
                                           onClick={ this.openDeleteConfirmationHandler }/>

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
