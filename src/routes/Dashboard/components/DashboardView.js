import React from 'react'
import DashboardSideMenu from "./DashboardSideMenu/DashboardSideMenu";
import {Card, Grid, Icon, Image, Segment} from "semantic-ui-react";

class _DashboardContentWrapper extends React.Component {
    constructor() {
        super();
    }

    render() {
        return(
            <div style={ {
                marginTop: "5%",
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
            let cards = []
            for (let i = 0; i < 100; i++) {
                cards.push(
                    <Card style={{maxWidth: "273px"}}>
                        <div style={{height: "130px", background: "#13b4ff"}}></div>
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
                    <Card.Group>
                        { test() }
                    </Card.Group>
                </_DashboardContentWrapper>
            </div>
        )
    }
}

export default DashboardView;
