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
            marginBottom: '4%',
            zIndex: 3000,
            backgroundColor: '#f9fafc',
            paddingLeft: "30px",
            borderRadius: "5px",
        };

        const afterStickedStyle = {
            zIndex: 1200,
            marginTop: '54px',
            borderRadius: "4px",
            backgroundColor: '#4f5254',
            color: "white",
        };

        const inputStyle = {
            marginLeft: "-11%",
            border: "0px !important",
        };

        const buttonStyle = {
            width: "120px"
        };

        return (
            <div>
                <Sticky isActive={true}
                        style={ filterMenuStyle }
                        topOffset={-55}
                        stickyStyle={ afterStickedStyle }
                        onStickyStateChange={this.handleStickyStateChange}
                >
                    <Segment basic>
                        <Menu secondary>
                            <Menu.Item fitted>
                                <Input
                                    icon='search'
                                    iconPosition='left'
                                    placeholder='Search By Name...'
                                    size="big"
                                    style={inputStyle}
                                    transparent
                                    inverted={ this.state.inputInverted }
                                />
                            </Menu.Item>


                            <Menu.Item fitted>
                                <Dropdown text='Skill' icon='filter' floating labeled button className='icon'>
                                    <Dropdown.Menu>
                                        <Dropdown.Header content='Search Issues'/>
                                        <Input icon='search' iconPosition='left' name='search'/>
                                        <Dropdown.Header icon='tags' content='Filter by tag'/>
                                        <Dropdown.Divider />
                                        <Dropdown.Item label={{color: 'red', empty: true, circular: true}}
                                                       text='Important'/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>

                            <Menu.Item fitted>
                                <Dropdown text='Time' icon='filter' floating labeled button className='icon'>
                                    <Dropdown.Menu>
                                        <Dropdown.Header content='Search Issues'/>
                                        <Input icon='search' iconPosition='left' name='search'/>
                                        <Dropdown.Header icon='tags' content='Filter by tag'/>
                                        <Dropdown.Divider />
                                        <Dropdown.Item label={{color: 'red', empty: true, circular: true}}
                                                       text='Important'/>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </Menu.Item>

                            <Menu.Menu position='right'>
                                <Button icon='detective'
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
