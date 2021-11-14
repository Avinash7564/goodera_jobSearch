import React from 'react'
import styles from "./Hero.module.css"

function Search() {
    return (
        <div className={ styles.serarchDiv}>
            <div className={ styles.serarchDivinput}>
                <input type="text" placeholder="Job Title or Keyword "></input>
            </div>
            <div className={ styles.serarchDivinput}>
                <input type="text" placeholder="Select Location"></input>
            </div>
            <button className={ styles.serarchDivSearch}>Search</button>
        </div>
    )
}

export default Search
