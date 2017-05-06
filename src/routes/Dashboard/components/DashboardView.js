import React from 'react'
import DashboardSideMenu from "./DashboardSideMenu/DashboardSideMenu";

import ActivitiesView from "./ActivitiesView/ActivitiesView";

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
        return (
            <div>
                <DashboardSideMenu/>
                <_DashboardContentWrapper>
                    <ActivitiesView />
                </_DashboardContentWrapper>
            </div>
        )
    }
}

export default DashboardView;
