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
            { key: 'skill', text: 'Java', value: 'Java' },
        ];

        const filterMenuStyle = {
            marginBottom: '4%',
                zIndex: 0,
                backgroundColor: '#F6F7F9',
                paddingLeft: "30px",
                borderRadius: "10px",
        };

        const afterStickedStyle = {
            zIndex: 1700,
            marginTop: '54px',
            borderRadius: "4px",
            backgroundColor: '#454749',
        };

        const inputStyle = {
            marginLeft: "-8%",
            border: "0px !important",
    };
        return (
            <div>
                <Sticky isActive={true} style={ filterMenuStyle } topOffset={-55} stickyStyle={ afterStickedStyle  }>
                    <Segment basic>
                        <Menu secondary>
                            <Menu.Item fitted>
                                <Input
                                    label={<Dropdown options={options} defaultValue='Java' />}
                                    icon='search'
                                    labelPosition={'right'}
                                    iconPosition='left'
                                    placeholder='Search...'
                                    size="big"
                                    style = {inputStyle}
                                />
                            </Menu.Item>
                            <Menu.Menu position='right'>
                                <Button icon='detective' content='Smart Group' size="big"/>
                            </Menu.Menu>
                        </Menu>
                    </Segment>
                </Sticky>
            </div>
        )
    }
}

export default FilterMenu;
