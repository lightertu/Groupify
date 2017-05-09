import React from 'react'

import DashboardSideMenu from "./DashboardSideMenu/DashboardSideMenu";
import ActivitiesView from "./ActivitiesView";
import AccountSettingView from "./AccountSettingView";

class _DashboardContentWrapper extends React.Component {
    constructor(props) {
        super(props);
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
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.view);
        return (
            <div>
                <DashboardSideMenu/>
                <_DashboardContentWrapper>
                    { this.props.view }
                </_DashboardContentWrapper>
            </div>
        )
    }
}

export default DashboardView;
