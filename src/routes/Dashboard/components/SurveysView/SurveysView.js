/**
 * Created by Matt on 5/23/17.
 */
import React from 'react'
import PropTypes from 'prop-types'
import { Button, Card, Dropdown, Header, Icon, Modal, Segment } from 'semantic-ui-react'
import randomColor from 'randomcolor'

import SurveyCard from './components/SurveyCard'
import CreateSurveyCard from './components/CreateSurveyCard/CreateSurveyCard'

export default class SurveysView extends React.Component {
    constructor (props) {
        super(props)
        //TODO: trigger and action to fetch surveys data
    }

    static propTypes = {
        surveysViewData: PropTypes.object.isRequired
    }

    render () {
        const renderSurveyCards = () => {
            return this.props.surveysViewData.surveys.map((surveyObj) => (
                <SurveyCard color={surveyObj.color}
                              surveyId={surveyObj.surveyId}
                              name={surveyObj.name}
                              key={surveyObj.surveyId}
                />
            ))
        }

        return (
            <div>
                <Header as='h2' style={{ display: "inline-block", marginBottom: "10px" }}>
                    Surveys : { this.props.surveysViewData.surveys.length }
                </Header>
                <hr style={{borderTop: '2px solid #8c8b8b', marginBottom: '15px'}}/>
                <Card.Group>
                    { renderSurveyCards() }
                    <CreateSurveyCard/>
                </Card.Group>
            </div>
        )
    }
}

