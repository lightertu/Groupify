import React from 'react'
import DashboardSideMenu from "./DashboardSideMenu/DashboardSideMenu";
import randomColor from "randomcolor";
import {Card, Grid, Header, Icon, Image, Segment} from "semantic-ui-react";

class _DashboardContentWrapper extends React.Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div style={ {
                marginTop: "3%",
                width: '100%',
                paddingLeft: "290px",
            } }>
                { this.props.children }
            </div>
        )
    }
}

class DashboardView extends React.Component {
    constructor() {
        super();
    }


    render() {
        let test = () => {
            let cards = [];
            for (let i = 0; i < 100; i++) {
                cards.push(
                    <Card style={{maxWidth: "273px"}}>
                        <div style={{
                            height: "130px", background: randomColor({
                                luminosity: 'dark',
                                format: 'hsla', // e.g. 'hsla(27, 88.99%, 81.83%, 0.6450211517512798)'
                                alpha: 0.7
                            })
                        }}> </div>
                        <Card.Content>
                            <Card.Header>
                                CIS 422
                            </Card.Header>
                            <Card.Meta>
                                <span className='date'>
                                  Ends on 6/12/2015
                                </span>
                            </Card.Meta>
                        </Card.Content>
                        <Card.Content extra>
                            <a>
                                <Icon name='user'/>
                                3/40
                            </a>
                        </Card.Content>
                    </Card>
                )
            }

            return cards;
        };
        return (
            <div>
                <DashboardSideMenu/>
                <_DashboardContentWrapper>
                    <Header as='h2'>
                        Current Activities: 10
                    </Header>
                    <hr style={{borderTop: "2px solid #8c8b8b", paddingBottom: "8px"}}/>
                    <Card.Group>
                        { test() }
                    </Card.Group>
                </_DashboardContentWrapper>
            </div>
        )
    }
}

export default DashboardView;
