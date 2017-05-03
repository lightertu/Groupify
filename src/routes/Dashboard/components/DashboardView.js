import React from 'react'
import DashboardSideMenu from "./DashboardSideMenu/DashboardSideMenu";
import {Card, Grid, Icon, Image, Segment} from "semantic-ui-react";

const participantsListWidth = 4;
const groupCardsWidth = 12;
const cardsPerRow = 2;

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
        return (
            <div>
                <DashboardSideMenu/>
                <_DashboardContentWrapper>
                <Card.Group>
                    <Card>
                        <div style={{height: "160px", background: "#13b4ff"}}></div>
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
                    <Card>
                        <div style={{height: "160px", background: "#13b4ff"}}></div>
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
                    <Card>
                        <div style={{height: "160px", background: "#13b4ff"}}></div>
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
                    <Card>
                        <div style={{height: "160px", background: "#13b4ff"}}></div>
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
                    <Card>
                        <div style={{height: "160px", background: "#13b4ff"}}></div>
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
                    <Card>
                        <div style={{height: "160px", background: "#13b4ff"}}></div>
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
                    <Card>
                        <div style={{height: "160px", background: "#13b4ff"}}></div>
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

                </Card.Group>
                </_DashboardContentWrapper>
            </div>
        )
    }
}

export default DashboardView;
