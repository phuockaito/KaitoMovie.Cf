import React from 'react'
import Movies from '../Movies/Movies';
import Banner from '../Banner/Banner';
import Slier from '../Slier/Slier';
const Home = () => {
    document.querySelector('title').innerHTML='Kaito Movie';
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
     return (
        < >
            <Banner />
            <Slier/>
            <Movies />

        </>
    )
}
export default Home;