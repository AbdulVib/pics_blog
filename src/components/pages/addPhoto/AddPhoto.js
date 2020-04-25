import React, { useState, useContext } from 'react'

import AppContext from '../../store/context/context'

import { Link } from 'react-router-dom'

import styles from './AddPhoto.css'

export default function AddPhoto(props) {

    const { state, addData } = useContext(AppContext)

    const [ data, setData ] = useState({
        imageLink: '',
        description: ''
    })

    const handleChange = e => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        const { imageLink, description } = data
        const newData = { id: Math.random(), imageLink, description }
        // imageLink.length && description.length && addData(newData) ? props.history.push('/') : ''

        if(imageLink.length && description.length){
            addData(newData)
            props.history.push('/')
        }
    }

    // console.log(props, ' props')
    return (
        <div className={ styles.AddPhoto }>
            <h1>Add Photo</h1>
            <div className={ styles.Form }>
                <form onSubmit={ handleSubmit }>
                    <input type="text" onChange={ handleChange } value={ data.imageLink } name="imageLink" placeholder="imageLink"/>
                    <input type="text" onChange={ handleChange } value={ data.desciption } name="description" placeholder="Description"/>
                    <button type="submit">SUBMIT</button>
                </form>
            </div>
        </div>
    )
}
