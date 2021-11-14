import React from 'react'
import styles from "./Hero.module.css"

const JobCard = (props) => {
    const { description, title, _id } = props
    


    return (
        <div className={ styles.card}>
            <div className={ styles.carddiv1}>
                
                
            </div>
            <div  className={ styles.carddiv2}>
                <h1>
                    { title}
                </h1>
                <p>
                    { description}
                </p>
                <button className={styles.cardButton }></button>
            </div>
        </div>
    )
}

export default JobCard
