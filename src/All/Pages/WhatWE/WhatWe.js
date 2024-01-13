import React from 'react'
import OfferHeros from '../../Components/Heros/offerHeros/OfferHeros'
import SercieMain from '../../Sections/About/services/SercieMain'
import Team from '../../Sections/About/team/Team'
import Offer from '../../Sections/offer/Offer'
import Hire from '../../Sections/offer/Hire/Hire'

const WhatWe = () => {
  return (
    <div>
        <OfferHeros/>
        <Offer/>
        <SercieMain/>
        {/* <Hire/> */}
<Team/>
    </div>
  )
}

export default WhatWe