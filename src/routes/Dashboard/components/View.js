import React from 'react'
import DashboardCard from './DashboardCard';
import {Grid, Card} from 'semantic-ui-react'

class View extends React.Component {
    constructor() {
        super();
        this.state = {}
    }

    render() {
        var viewStyles = {
          paddingLeft: 0,
          marginRight: 0,
          paddingTop: 65,
          float: 'left'
        }

        let getCards = (item) => {
          return (
              item.map(
                  (item, i) => (
                      <Grid.Column stretched mobile={16} key={i} tablet={8} computer={5}>
                        <DashboardCard title={item.title}
                                        link={item.link}
                                        color={item.color} 
                                        date={item.date}
                                        icon={item.icon}
                                        counting={item.counting}
                                        num={item.num}/>
                      </Grid.Column>
                )
              )
            )
        };
        console.log(this.props.data)
        return (
              <div className="dashcards" style={viewStyles}>
                <Grid container columns={3}>
                          { getCards(this.props.data) }
                </Grid>
              </div>
        )
    }
}

export default View;
