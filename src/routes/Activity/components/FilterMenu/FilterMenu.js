/**
 * Created by rui on 4/24/17.
 */
import React from 'react'
import PropTypes from 'prop-types';
import {Button, Dropdown, Input, Menu, Segment} from 'semantic-ui-react'
import {Sticky} from "react-sticky";


class FilterMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inputInverted: false,
        }
    }

    static propTypes = {
        generateGroupAssignment: PropTypes.func.isRequired,
        activityId: PropTypes.string.isRequired,
        filterValues: PropTypes.object.isRequired,
    };

    generateGroupButtonHandlerMaker = (algorithmKey) => {
        let random = () => {
            this.props.generateGroupAssignment(this.props.activityId, "random");
        };
        let greedy = () => {
            this.props.generateGroupAssignment(this.props.activityId, "greedy");
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
        this.setState({inputInverted: !this.state.inputInverted});
    };

    handleChange = (e, { value }) => {
        console.log(value);
        this.props.filterParticipants(value);
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
        
        const [...keys] = this.props.filterValues.keys();
        const options = Object.keys(keys[0]).map(function(key, i) {
            return {key: i, text: key, value: key, name: key};
        })       

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
                                    iconPosition='left'
                                    placeholder='Search . . .'
                                    size="large"
                                    style={inputStyle}
                                    search={true}
                                    options={options}
                                    multiple selection
                                    transparent
                                    //inverted={ this.state.inputInverted }
                                    //onChange={ this.props.setFilterValues.bind(this, "filters") }
                                    onChange={ this.handleChange }
                                /> }
                            </Menu.Item>

                            <Menu.Menu position='right'>
                                <Button icon='users'
                                        content='Smart'
                                        size="medium"
                                        color="green"
                                        style={ buttonStyle }
                                        onClick={ this.generateGroupButtonHandlerMaker("random") }
                                />

                                <Button icon='shuffle'
                                        content='Random '
                                        size="medium"
                                        color="yellow"
                                        style={ buttonStyle }
                                        onClick={ this.generateGroupButtonHandlerMaker("greedy") }
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
