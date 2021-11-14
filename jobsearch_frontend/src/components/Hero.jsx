import React from 'react'
import styles from "./Hero.module.css"
import Search from './Search.jsx'

function Hero() {
    return (
        <div className={ styles.mainDiv}>
            <div className={ styles.HeroMainDiv}>
                <div className={ styles.HeroNavBar}>
                    <div className={ styles.HeroNavBardiv1}>
                        <h3 className={ styles.HeroNavBardiv1button1}>JobHunt</h3>
                        <h4  className={ styles.HeroNavBardiv1button2}>Find Job</h4>
                        <h4  className={ styles.HeroNavBardiv1button2}>Upskill Yourself</h4>
                    </div>
                    <div className={ styles.HeroNavBardiv2}>
                        <h3 className={ styles.HeroNavBardiv2button2}>Post a job</h3>
                        <h3 className={ styles.HeroNavBardiv2button2}>Sign In</h3>
                    </div>
                </div>
                
                <div className={ styles.Herosecond}>

                    <h1 className={ styles.Heroh1}>
                        Find Your Dream Job
                    </h1>
                    <h1 className={ styles.Heroh2}>
                        Browse through thousands of full-time or part-time jobs near you
                    </h1>
                </div>
                    
            </div>

            <Search/>

        </div>
        
    )
}

export default Hero
