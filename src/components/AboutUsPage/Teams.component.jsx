import React from 'react'

import User1 from './user1.jpg'
import User2 from './user2.jpeg'
import User3 from './user3.jpeg'
import User4 from './user4.jpeg'


import './Teams.scss'

const Teams = () => (
    <div>
        <div className="team-wrapper">
            <div className="team-card">
                <div className="team-user">
                    <img src={User1} alt=""/>
                </div>
                <div className="team-name">
                    <h5>Lorem, ipsum.</h5>
                </div>
                <div className="team-role">
                    <p>Lorem.</p>
                </div>
                <div className="team-link">
                    <a href="/vcard"><i className="fa fa-location-arrow"></i></a>
                </div>
            </div>

            <div className="team-card">
                <div className="team-user">
                    <img src={User2} alt=""/>
                </div>
                <div className="team-name">
                    <h5>Lorem, ipsum.</h5>
                </div>
                <div className="team-role">
                    <p>Lorem.</p>
                </div>
                <div className="team-link">
                    <a href="/vcard"><i className="fa fa-location-arrow"></i></a>
                </div>
            </div>

            <div className="team-card">
                <div className="team-user">
                    <img src={User3} alt=""/>
                </div>
                <div className="team-name">
                    <h5>Lorem, ipsum.</h5>
                </div>
                <div className="team-role">
                    <p>Lorem.</p>
                </div>
                <div className="team-link">
                    <a href="/vcard"><i className="fa fa-location-arrow"></i></a>
                </div>
            </div>

            <div className="team-card">
                <div className="team-user">
                    <img src={User4} alt=""/>
                </div>
                <div className="team-name">
                    <h5>Lorem, ipsum.</h5>
                </div>
                <div className="team-role">
                    <p>Lorem.</p>
                </div>
                <div className="team-link">
                    <a href="/vcard"><i className="fa fa-location-arrow"></i></a>
                </div>
            </div>
        </div>
    </div>
)

export default Teams