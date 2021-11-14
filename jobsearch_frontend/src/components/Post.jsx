import React from 'react'
import { Link } from "react-router-dom"

function Post() {
    return (
        <div>
            <h1 style={{ textAlign: "center" }}>This is the post a job page</h1>
            <Link to="/">
                <h4>Click to go to back.</h4>
            </Link>
        </div>
    )
}

export default Post