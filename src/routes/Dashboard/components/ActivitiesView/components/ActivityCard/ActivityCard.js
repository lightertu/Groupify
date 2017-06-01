/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Icon, Popup } from 'semantic-ui-react'

import EditActivityInfoModal from './EditActivityInfoModal'
import DeleteActivityModal from './DeleteActivityModal'
import { browserHistory } from 'react-router'

export default class ActivityCard extends React.Component {
    constructor (props) {
        super(props)
        this.displayFormattedEndDate = this.displayFormattedEndDate.bind(this);
    }

    displayFormattedEndDate () {
        return (new Date((this.props.endDate.split('T')[0]).replace(/-/g, '\/')).toLocaleDateString());
    }
    
    /* handlers for opening and closing the modals */

    openActivityInfoHandler = () => {
        this.props.updateActivityHolderGetActivity(this.props.activityId);
        this.props.updateActivityViewOpenEditModal(true);
    }

    openDeleteActivityHandler = () => {
        this.props.updateActivityHolderGetActivity(this.props.activityId);
        this.props.updateActivityViewOpenDeleteModal(true);
    }

    activityCardOnClickHandler = () => {
        browserHistory.push('/activity?id=' + this.props.activityId)
    }

    surveyIconOnClick = () => {
        browserHistory.push('/survey?id=' + this.props.activityId)
    }

    render () {
        return (
            <Card style={{maxWidth: '269.5px'}} link={false}>
                {/* modal components has to stay inside for style reason */}
                {/* Matt's Note: since backend hoodup update, keeping modals here creates lag */}

                <div onClick={this.activityCardOnClickHandler}
                     style={{
                         padding: '1rem',
                         height: '130px',
                         textAlign: 'right',
                         cursor: 'pointer',
                         background: this.props.color, 
                     }}>
                    <Dropdown icon={ <Icon name="edit" size="big" inverted/>} style={{left: '2px', top: "5px"}}>
                        <Dropdown.Menu style={{left: '-48px'}}>

                            <Dropdown.Item text='Edit'
                                           onClick={ this.openActivityInfoHandler }/>

                            <Dropdown.Item style={{color: 'red'}}
                                           text='Delete'
                                           onClick={ this.openDeleteActivityHandler}/>

                        </Dropdown.Menu>
                    </Dropdown>
                </div>
                <Card.Content>
                    <Card.Header>
                        {this.props.name}
                        <Popup
                            trigger={ <Icon style={{float: 'right', cursor: "zoom-in", marginTop: "7px"}}
                                            size="large"
                                            color="grey"
                                            onClick={ this.surveyIconOnClick }
                                            name='file text outline'/> }
                            position='top right'
                            hoverable
                            wide
                        >   <div><code>http://address/survey?id=...</code></div>
                            <Button fluid size="small"><Icon name="copy"/>Copy Survey Url</Button>
                        </Popup>
                    </Card.Header>
                    <Card.Meta>
                        <span className='date'>
                            Ends on {this.displayFormattedEndDate()}
                        </span>
                    </Card.Meta>
                </Card.Content>
                <Card.Content extra>
                    <Icon name='user'/>
                    {this.props.currentCapacity} / {this.props.totalCapacity}
                </Card.Content>
            </Card>
        )
    }
}
