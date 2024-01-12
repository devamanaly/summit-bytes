import React from 'react'
import AboutHeros from '../../Components/Heros/AboutHeros/AboutHeros'
import OurStory from '../../Components/OurStory/Main/OurStory'
import Personal from '../../Sections/About/Personality/Personal'
import Value from '../../Sections/About/value/Value'
import Team from '../../Sections/About/team/Team'

const About = () => {
  return (
    <div>
        <AboutHeros/>
        <OurStory/>
        <Personal/>
        <Value/>
        <Team/>
    </div>
  )
}

export default About