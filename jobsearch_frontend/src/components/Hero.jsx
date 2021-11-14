import React, { useEffect, useState } from 'react'
import styles from "./Hero.module.css"
import Search from './Search.jsx'
import JobCard from './JobCard'
import axios from "axios"

function Hero() {
    const [data, setData] = React.useState([])
    const [location, setLocation] = useState("")
    const [title, setTitle] = useState("")
    const [search, setSearch] = useState("")


    useEffect(() => {
        getData()
    }, [])

    const getData = () => {
        axios.get("http://localhost:8001/jobs")
            .then((data) => {
                console.log(data.data)
                setData(data.data)
            })
            .catch((err) => {
                console.log(err)
            })
    }



    const handleSearch = () => {
        axios.get('http://localhost:8001/jobs')
            .then((data1) => {
                var newData = data1.data.filter((e) => 
                    e.title === title
                )
                var newDatat1 = newData.filter((e) => 
                    e.city === location
                )
                setData(newDatat1)
                console.log(newDatat1)
            })
    }

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

             <div className={ styles.serarchDiv}>
            <div className={ styles.serarchDivinput}>
                    <input type="text" placeholder="Job Title or Keyword " onChange={(e) => { setTitle(e.target.value)}}></input>
            </div>
            <div className={ styles.serarchDivinput}>
                    <input type="text" placeholder="Select Location" onChange={(e) => { setLocation(e.target.value) }}></input>
            </div>
                <button className={styles.serarchDivSearch} onClick={handleSearch}>Search</button>
        </div>
            
            <div className={ styles.gridDiv}>
                {
                    data.map((e) => {
                        return <JobCard description={e.description} title={e.title} id={ e.id}/>
                    })
                }
            </div>

        </div>
        
    )
}

export default Hero

