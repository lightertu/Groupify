import React from 'react'

import DashboardSideMenu from "./DashboardSideMenu/DashboardSideMenu";
import ActivitiesView from "./ActivitiesView";
import AccountSettingView from "./AccountSettingView";

const _DashboardContentWrapper = (props) => (
    <div style={ {
        marginTop: "3%",
        width: '100%',
        paddingLeft: "290px",
    } }>
        { props.children }
    </div>
);

const DashboardView = (props) => {
    let renderDashboardView = () => {
        switch (props.view) {
            case("activities"):
                return <ActivitiesView activitiesViewData={ props.activitiesViewData } />;
            case("accountSettings"):
                return <AccountSettingView accountSettingsViewData={ props.accountSettingsViewData }/>;
            default:
                return <ActivitiesView activitiesViewData={ props.activitiesViewData }/>;
        }
    };

    return (
            <div>
                <DashboardSideMenu view={ props.view }/>
                <_DashboardContentWrapper>
                    { renderDashboardView() }
                </_DashboardContentWrapper>
            </div>
        )
    };

export default DashboardView;
