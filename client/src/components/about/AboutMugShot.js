import React from 'react';
import headShot from "../../images/about/mugShot.png";

class AboutMugShot extends React.Component{
    render() {
        return (
            <img className={'mugShot'} src={headShot} alt={'Brandon Nolan'}/>
        )
    }
}

export default AboutMugShot;