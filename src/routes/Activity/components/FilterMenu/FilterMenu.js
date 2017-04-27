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
            inputInverted: false
        }
    }

    static propTypes = {
        generateGroupAssignment: PropTypes.func.isRequired,
        activityId: PropTypes.string.isRequired,

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
            marginLeft: "-11%",
            border: "0px !important",
        };

        const buttonStyle = {
            width: "120px"
        };
        const options = [
            { key: 1, text: 'Choice 1', value: 1 },
            { key: 2, text: 'Choice 2', value: 2 },
            { key: 3, text: 'Choice 3', value: 3 },
        ];

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
                                { <Input
                                    icon='search'
                                    iconPosition='left'
                                    placeholder='Search . . .'
                                    size="big"
                                    style={inputStyle}
                                    transparent
                                    inverted={ this.state.inputInverted }
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
