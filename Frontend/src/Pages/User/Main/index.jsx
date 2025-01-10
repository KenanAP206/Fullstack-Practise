import React from 'react'
import Hero from '../../../Components/User/Main/Hero'
import Feature from '../../../Components/User/Main/Feature'
import SecondFeature from '../../../Components/User/Main/SecondFeature'
import Blog from '../../../Components/User/Main/Blog'
function Main() {
    return (
        <div>
            <main>
                <Hero />
                <Feature />
                <SecondFeature />
                <Blog />
            </main>
        </div>
    )
}

export default Main
