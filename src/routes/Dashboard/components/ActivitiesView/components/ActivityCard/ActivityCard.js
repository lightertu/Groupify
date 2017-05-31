/**
 * Created by rui on 5/5/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Icon, Popup } from 'semantic-ui-react'

import randomColor from 'randomcolor'
import EditActivityInfoModal from './EditActivityInfoModal'
import DeleteActivityModal from './DeleteActivityModal'
import { browserHistory } from 'react-router'

export default class ActivityCard extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            deleteConfirmationOpen: false,
            activityInfoOpen: false
        }
        this.displayFormattedEndDate = this.displayFormattedEndDate.bind(this);
    }

    static propTypes = {
        color: PropTypes.string.isRequired,
        activityId: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        endDate: PropTypes.string.isRequired,
        numberOfCurrentParticipants: PropTypes.number.isRequired,
        groupCapacity: PropTypes.number.isRequired,
        totalCapacity: PropTypes.number.isRequired,
    }

    displayFormattedEndDate () {
        let date = new Date(this.props.endDate);
        return ((date.getMonth() + 1) + '/' + date.getDate() + '/' +  date.getFullYear());
    }
    /* handlers for opening and closing the modals */
    openDeleteConfirmationHandler = () => {
        this.state = this.setState({
            deleteConfirmationOpen: true,
            activityInfoOpen: false,
        })
    }
    closeDeleteConfirmationHandler = () => {
        this.state = this.setState({
            deleteConfirmationOpen: false,
            activityInfoOpen: false,
        })
    }
    openActivityInfoHandler = () => {
        this.state = this.setState({
            activityInfoOpen: true,
            deleteConfirmationOpen: false,
        })
    }
    closeActivityInfoHandler = () => {
        this.state = this.setState({
            activityInfoOpen: false,
            deleteConfirmationOpen: false,
        })
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
                <DeleteActivityModal open={ this.state.deleteConfirmationOpen }
                                     onClose={this.closeDeleteConfirmationHandler }
                                     name={this.props.name}
                                     activityId={this.props.activityId}/>

                <EditActivityInfoModal open={ this.state.activityInfoOpen }
                                       onClose={this.closeActivityInfoHandler }
                                       activityId={this.props.activityId}
                                       name={this.props.name }
                                       endDate={this.props.endDate}
                                       groupCapacity={this.props.groupCapacity}
                                       totalCapacity={this.props.totalCapacity}/>
                <div onClick={this.activityCardOnClickHandler}
                     style={{
                         padding: '1rem',
                         height: '130px',
                         textAlign: 'right',
                         cursor: 'pointer',
                         background: randomColor({
                         luminosity: 'dark',
                         format: 'hsla', // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
                         alpha: 0.7,
                     })
                     }}>
                    <Dropdown icon={ <Icon name="edit" size="big" inverted/>} style={{left: '2px', top: "5px"}}>
                        <Dropdown.Menu style={{left: '-48px'}}>

                            <Dropdown.Item text='Edit'
                                           onClick={ this.openActivityInfoHandler }/>

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
                    {this.props.numberOfCurrentParticipants} / {this.props.totalCapacity}
                </Card.Content>
            </Card>
        )
    }
}
