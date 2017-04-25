/**
 * Created by rui on 4/24/17.
 */
import React from 'react'
import {Button, Dropdown, Input, Menu, Segment} from 'semantic-ui-react'
import {Sticky} from "react-sticky";


class FilterMenu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            filterMenuStyle: {
                marginBottom: '4%',
                zIndex: 3000,
                backgroundColor: '#F6F7F9',
                paddingLeft: "30px"
            }
        }
    }

    render() {
        const options = [
            {key: 'skill', text: 'Java', value: 'Java'},
        ];

        const filterMenuStyle = {
            marginBottom: '4%',
            zIndex: 3000,
            backgroundColor: '#F6F7F9',
            paddingLeft: "30px",
            borderRadius: "10px",
        };

        const afterStickedStyle = {
            zIndex: 3000,
            marginTop: '54px',
            borderRadius: "4px",
            backgroundColor: '#454749',
        };

        const inputStyle = {
            marginLeft: "-11%",
            //border: "0px !important",
        };

        const buttonStyle = {
            width: "120px"
        };
        return (
            <div>
                <Sticky isActive={true} style={ filterMenuStyle } topOffset={-55} stickyStyle={ afterStickedStyle  }>
                    <Segment basic>
                        <Menu secondary>
                            <Menu.Item fitted>
                                <Input
                                    icon='search'
                                    iconPosition='left'
                                    placeholder='Search By Name...'
                                    size="big"
                                    style={inputStyle}
                                    disabled
                                />
                            </Menu.Item>


                            <Menu.Item fitted>
                                <Dropdown text='Skill' icon='filter' floating labeled button className='icon' style={ {zIndex: 400000000} }>
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
                                <Button icon='detective' content='Smart' size="medium" color="green" style={ buttonStyle }/>
                                <Button icon='shuffle' content='Random ' size="medium" color="yellow" style={ buttonStyle }/>
                            </Menu.Menu>
                        </Menu>
                    </Segment>
                </Sticky>
            </div>
        )
    }
}

export default FilterMenu;
