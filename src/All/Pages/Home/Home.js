import React from 'react'
import Heros from '../../Components/Heros/HomeHeros/Heros'
import HomeOffer from '../../Sections/home/We/HomeOffer'
import Combine from '../../Sections/home/combine/Combine'
import Founder from '../../Sections/home/founder/Founder'
import Sucess from '../../Sections/home/sucess/Sucess'
import Furthur from '../../Sections/home/Furthor/Furthur'

const Home = () => {
  return (
    <div>
        <Heros/>
        <Combine/>
        <HomeOffer/>
        <Founder/>
        <Sucess/>
        <Furthur/>
    </div>
  )
}

export default Home