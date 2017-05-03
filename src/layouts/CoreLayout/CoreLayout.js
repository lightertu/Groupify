import React from 'react'
import Header from '../../components/Header'
import { StickyContainer, Sticky } from 'react-sticky';
import './CoreLayout.scss'
import '../../styles/core.scss'


export const CoreLayout = ({children}) => (
    <div>
        <Header />
        <div className="container">
            <div className='core-layout__viewport'>
                <StickyContainer>
                {children}
                </StickyContainer>
            </div>
        </div>
    </div>
);

CoreLayout.propTypes = {
    children: React.PropTypes.element.isRequired
};

export default CoreLayout
