/**
 * Created by rui on 4/24/17.
 */
import React from 'react'
import {Dropdown, Input, Menu, Segment} from 'semantic-ui-react'
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
            { key: 'skill', text: 'Java', value: 'page' },
        ];

        const filterMenuStyle = {
            marginBottom: '4%',
                zIndex: 0,
                backgroundColor: '#F6F7F9',
                paddingLeft: "30px"
        };

        const afterStickedStyle = {
            zIndex: 1700,
            top: '54px',
            backgroundColor: '#1b1b1b',
        };
        return (
            <div>
                <Sticky isActive={true} style={ filterMenuStyle } topOffset={-55} stickyStyle={ afterStickedStyle  }>
                    <Segment basic>
                        <Menu secondary>
                            <Menu.Item>
                                <Input
                                    action={<Dropdown floating options={options} defaultValue='page' />}
                                    icon='search'
                                    iconPosition='left'
                                    placeholder='Search...'
                                    size="huge"
                                />
                            </Menu.Item>

                            <Menu.Item position='right'>

                            </Menu.Item>
                        </Menu>
                    </Segment>
                </Sticky>
            </div>
        )
    }
}

export default FilterMenu;
