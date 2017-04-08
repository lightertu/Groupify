import React from 'react'
import './GroupsViewLayout.scss'
import '../../styles/core.scss'

export const GroupsViewLayout = ({children}) => (
    <div className="container">
        <Header />
        <div> something here </div>
    </div>
)

GroupsViewLayout.propTypes = {
    children: React.PropTypes.element.isRequired
}

export default GroupsViewLayout
