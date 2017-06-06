/**
 * Created by rui on 4/24/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Dropdown, Input, Menu, Segment} from 'semantic-ui-react'
import {Map, List, Set} from 'immutable';
import {Sticky} from "react-sticky";


class FilterMenu extends React.Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        generateGroupAssignment: PropTypes.func.isRequired,
        activityId: PropTypes.string.isRequired,
    };

    generateGroupButtonHandlerMaker = (algorithmKey) => {
        let random = () => {
            this.props.generateGroupAssignment(this.props.activityId, "randomAlgorithm");
        };
        let greedy = () => {
            this.props.generateGroupAssignment(this.props.activityId, "greedyAlgorithm");
        };
        switch (algorithmKey) {
            case("random"):
                return random;
            case("greedy"):
                return greedy;
            default:
                return greedy;
        }
    };

    handleStickyStateChange = () => {
    };

    handleChange = (e, { value }) => {
    }

    render() {
        const filterMenuStyle = {
            position: "relative",
            marginBottom: '4%',
            zIndex: 1000,
            backgroundColor: '#f9fafc',
            paddingLeft: "30px",
            borderRadius: "5px",
        };

        const afterStickedStyle = {
            marginTop: '54px',
            borderRadius: "4px",
            backgroundColor: '#4f5254',
        };

        const inputStyle = {
            marginLeft: "-6%",
            border: "0px !important",
            width: 350
        };

        const buttonStyle = {
            width: "120px",
            height: 45
        };
        
        let answersFilterOptions = [];
        this.props.allAnswers.forEach((answer) => {
            answersFilterOptions.push({
                key:answer,
                value:answer,
                text:answer,
            })
        });


        return (
            <div>
                <Sticky isActive={true}
                        style={ filterMenuStyle }
                        topOffset={-55}
                        stickyStyle={ afterStickedStyle }
                        onStickyStateChange={this.handleStickyStateChange}
                >
                    <Segment basic>
                        <Menu fluid secondary>
                            <Menu.Item fitted>
                                { <Dropdown
                                    icon='search'
                                    placeholder='Search . . .'
                                    size="large"
                                    style={inputStyle}
                                    search={true}
                                    value={this.props.filter.toArray()}
                                    onChange={(e, data) => {
                                       this.props.setFilter(Set(data.value)); 
                                    }}
                                    options={answersFilterOptions}
                                    multiple selection
                                    //inverted={ this.state.inputInverted }
                                    //onChange={ this.props.setFilterValues.bind(this, "filters") }
                                    //onChange={ this.handleChange }
                                /> }
                            </Menu.Item>

                            <Menu.Menu position='right'>
                                <Button icon='users'
                                        loading = {this.props.isRunningAlgorithm}
                                        disabled= {this.props.isRunningAlgorithm}
                                        content='Smart'
                                        size="medium"
                                        color="green"
                                        style={ buttonStyle }
                                        onClick={ this.generateGroupButtonHandlerMaker("greedy") }
                                />

                                <Button icon='shuffle'
                                        loading = {this.props.isRunningAlgorithm}
                                        disabled= {this.props.isRunningAlgorithm}
                                        content='Random '
                                        size="medium"
                                        color="yellow"
                                        style={ buttonStyle }
                                        onClick={ this.generateGroupButtonHandlerMaker("random") }
                                />
                            </Menu.Menu>
                        </Menu>
                    </Segment>
                </Sticky>
            </div>
        )
    }
}

export default FilterMenu;
