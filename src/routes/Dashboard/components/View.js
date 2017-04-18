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
          paddingLeft: 0,
          marginRight: 35,
          paddingRight: 0
        }

        let getCards = (item) => {
          return (
              item.map(
                  (item) => (
                      <Grid.Column stretched mobile={16} tablet={8} computer={5}>
                        <DashboardCard title={item.title}
                                        link={item.link}
                                        color={item.color} />
                      </Grid.Column>
                )
              )
            )
        };

        return (
              <div style={viewStyles}>
                <Grid container columns={3}>
                          { getCards(this.props.data) }
                </Grid>
              </div>
        )
    }
}

export default View;
