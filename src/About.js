import React from 'react';
import Common from './Common';
import web from './images/bn4.png';

const About = () => {
    return (
        <>
            <Common name='Welcome to About page' visit='/contact' btname='Contact Now' img={web}/>
        </>
    )
}

export default About;
