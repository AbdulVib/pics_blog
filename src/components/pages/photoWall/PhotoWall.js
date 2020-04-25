import React, { useContext } from 'react'
import AppContext from '../../store/context/context'

import { Link } from 'react-router-dom'

import styles from './PhotoWall.css'

//comps
import Photo from './photo/Photo'

export default function PhotoWall() {

    const { state } = useContext(AppContext)
    const { photoData } = state
    
    // console.log(state, ' state')
    // console.log(photoData, ' fata')

    return (
        <div className={ styles.PhotoWall }>
            <Link to="/addphoto"></Link>
            <div className={ styles.PhotoGrid }>
                {
                    photoData.map(i => <Photo key={ i.id } { ...i } />)
                }
            </div>
        </div>
    )
}
