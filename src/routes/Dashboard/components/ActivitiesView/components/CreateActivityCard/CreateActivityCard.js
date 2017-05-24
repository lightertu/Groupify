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
        this.state = {
            createActivityModalOpen: false
        }
    }

    static propTypes = {
    }

    /* handlers for opening and closing the modals */
    openCreateActivityModalHandler = () => {
        this.state = this.setState({
            createActivityModalOpen: true,
        })
    }
    closeCreateActivityModalHandler = () => {
        this.state = this.setState({
            createActivityModalOpen: false,
        })
    }

    render () {
        return (
            <Card style={{maxWidth: '269.5px', backgroundColor: "#e5e7e8"}} onClick={this.openCreateActivityModalHandler}>
                <CreateActivityModal onClose={this.closeCreateActivityModalHandler }
                                     open={ this.state.createActivityModalOpen }/>

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
