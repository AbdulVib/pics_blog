import React, { useState, useContext } from 'react'
import { withRouter } from 'react-router-dom';

import AppContext from '../../store/context/context'

import styles from './Comment.css'

function Comment(props) {

    const [comment, setComment] = useState('')

    const { state, dispatch } = useContext(AppContext)

    const handleChange = e => {
        setComment(e.target.value)
    }

    const handleSubmit = e => {
        e.preventDefault()
        // dispatch({ type: 'SET_CURRENT_TODO', payload: comment })
        if (comment.length) {
            dispatch({ type: 'UPDATE_TODO', payload: comment })
            setComment('')
            props.history.push('/')
        }
    }

    const { commentedPhotos } = state

    const filterComments = commentedPhotos.filter(i => i.description.replace(/ /g, "") === props.match.params.img)

    return (
        <div className={styles.Comment}>
            <form onSubmit={ handleSubmit }>
                <input autoFocus type="text" placeholder="Comment" value={ comment } onChange={ handleChange } />
                <button type="submit">SUBMIT</button>
            </form>
            <div className={styles.CommentList}>
                <ul>

                    {
                        filterComments.length ? filterComments.map(i => <li key={ i.id } style={{ listStyle: 'none' }}>{ i.comment } - { new Date().toDateString() }</li>) : <strong>No comments</strong>
                    }
                </ul>
            </div>
        </div>
    )
}

export default withRouter(Comment)