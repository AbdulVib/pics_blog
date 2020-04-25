import React, { useContext } from 'react'

import AppContext from '../../../store/context/context'

import { Link } from 'react-router-dom'

import styles from './Photo.css'

export default function Photo(props) {
    // console.log(props, ' props')

    const { state, removeData, dispatch } = useContext(AppContext)
    const { commentedPhotos } = state
    // console.log(state, ' stae')
    const { description , imageLink, id } = props



    const addComment = e => {
        dispatch({ type: 'SET_CURRENT_TODO', payload: {description, imageLink, id} })
    }

    // console.log(commentedPhotos, ' commented')

    const filterComments = (desc) => {
          return commentedPhotos.length && commentedPhotos.filter(i => i.description.replace(/ /g, "") === desc.replace(/ /g, "") ).length
    }
    // console.log(filterComments('Aliens...'), ' filterrrrrr')

    return (
        <div className={ styles.Figure}>
            <Link to={`/single/${ id }/${ description.replace(/ /g, "") }`} onClick={addComment}>
                <img src={ imageLink } alt={ description }/>
            </Link>
                <div>
                    <p>{ description }</p>
                    <p style={{ margin: '10px 0' }}>{ filterComments(description) } coments</p>
                </div>
                <button onClick={ () => removeData(id)}>Remove</button>
                
        </div>
    )
}
