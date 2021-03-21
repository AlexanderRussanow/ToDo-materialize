import React from 'react'
import {useHistory} from 'react-router-dom'

export const AboutPage: React.FC = () => {
const history = useHistory()

    return (
        <React.Fragment>
            <h1>Information Page</h1>
            <button className='btn' onClick={() => history.push('/')}>Backto the main page</button>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Soluta in a beatae, deleniti ad eligendi architecto pariatur nisi laborum hic.</p>
        </React.Fragment>
    )
}