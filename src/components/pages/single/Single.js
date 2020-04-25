import React, { useContext } from 'react'

import AppContext from '../../store/context/context'

import styles from './Single.css'

//comps
import Comment from '../comment/Comment'

export default function Single(props) {

    const { state, removeData } = useContext(AppContext)

    const { photoData } = state

    
    const singlePhoto = photoData.find( i => i.id === parseFloat(props.match.params.id) )


    const { id, imageLink, description } = singlePhoto 

    // console.log(singlePhoto, ' single')
    // console.log(photoData, ' data')
    return (
        <div className={ styles.Single } >
            <img src={ imageLink } alt={ description }/>
            <p>{ description }</p>
            <hr /> <br />
            <Comment id={ id }/>
        </div>
    )
}
