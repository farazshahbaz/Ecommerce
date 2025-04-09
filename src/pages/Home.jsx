import React from 'react'
import Hero from '../Components/Hero'
import Popular from '../Components/Popular'
import Offer from '../Components/Offer'
import NewCollections from '../Components/Latest'
import Newletter from '../Components/Newsletter'
const Home = () => {
    return (
        <div>
            <Hero />
            <Popular />
            <Offer />
            <NewCollections />
            <Newletter />
        </div>
    )
}

export default Home
