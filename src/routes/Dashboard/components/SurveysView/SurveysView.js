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
        //TODO: trigger and action to fetch surveys data
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
                              name={surveyObj.get('name')}
                              key={surveyObj.get('surveyId')}
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
                            <CreateSurveyCard/>
                        </Card.Group> 
                    )
                )}

            </div>
        )
    }
}

