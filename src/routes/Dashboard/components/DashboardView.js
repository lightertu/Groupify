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
                return <ActivitiesView />;
            case("accountSettings"):
                return <AccountSettingView />;
            case("surveys"):
                return <AccountSettingView />;
            default:
                return <ActivitiesView />;
        }
    };

    console.log(props.view);
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
