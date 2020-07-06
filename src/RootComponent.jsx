import React from 'react'

import Homepage from './components/Homepage/Homepage.component'
import WhySkylon from './components/WhySkylonPage/Whyskylon.component'
import WorkPage from './components/WorkPage/WorkPage.component'
import ProjectPage from './components/ProjectPage/ProjectPage.component'
import HomeDesignSteps from './components/HomeDesignSteps/HomeDesignSteps.component'
import Sponsors from './components/Sponsors/Sponsors.component'

const RootComponent = (props) => (
    <div>
        <Homepage />
        <WhySkylon />
        <WorkPage />
        <HomeDesignSteps />
        <ProjectPage />
        <Sponsors />
    </div>
)

export default RootComponent