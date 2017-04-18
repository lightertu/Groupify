import React from 'react'
import DashboardCard from './DashboardCard';
import {Grid} from 'semantic-ui-react'

class View extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        var viewStyles = {
          paddingLeft: 250,
          marginRight: 100,
          paddingRight: 10
        }

        let getCards = (item) => {
          return (
              item.map(
                  (item) => (
                      <Grid.Column stretched>
                        <DashboardCard title={item.title}
                                        link={item.link}
                                        color={item.color} />
                      </Grid.Column>
                )
              )
            )
        }

        return (
              <div style={viewStyles}>
                <Grid >
                  <Grid.row>
                    <Grid.Column width={ 4 }>
                      </Grid.Column>
                      <Grid.Column width={ 4 }>
                        <Grid columns={ 1 }>
                          { getCards(this.props.data) }
                        </Grid>
                    </Grid.Column>
                  </Grid.row>
                </Grid>
              </div>
        )
    }
}

export default View;
