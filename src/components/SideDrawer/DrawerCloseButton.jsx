import React from 'react'

import './DrawerCloseButton.scss'

const DrawerCloseButton = props => (
    <button className="close-button" onClick={props.close}>
        <div className="close-button__line close-button__line-1" />
        <div className="close-button__line close-button__line-2" />
    </button>
)

export default DrawerCloseButton;