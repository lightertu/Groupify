/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Header, Icon, Modal, Segment } from 'semantic-ui-react'
import { browserHistory } from 'react-router';
import CreateSurveyModal from './CreateSurveyModal'
import SurveyInfoForm from '../SurveyInfoForm/SurveyInfoForm'

export default class CreateSurveyCard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            createSurveyModalOpen: false
        }
    }

    static propTypes = {
    }

    /* handlers for opening and closing the modals */
    openCreateSurveyModalHandler = () => {
        this.state = this.setState({
            createSurveyModalOpen: true,
        })
    }
    closeCreateSurveyModalHandler = () => {
        this.state = this.setState({
            createSurveyModalOpen: false,
        })
    }

    render () {
        return (
            <Card style={{maxWidth: '269.5px', backgroundColor: "#e5e7e8"}} onClick={this.openCreateSurveyModalHandler}>
                <CreateSurveyModal onClose={this.closeCreateSurveyModalHandler }
                                     open={ this.state.createSurveyModalOpen }/>

                <div style={{ textAlign: "center",
                              position: "relative",
                              top: "47%",
                              opacity: 0.2, }}>
                    <Header>
                        <Icon name='plus' />
                        New Survey
                    </Header>
                </div>
            </Card>
        )
    }
}
