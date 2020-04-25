import React, { useReducer } from 'react';
import Context from './context'

import axios from 'axios'

//reducer
import reducer, { initialState } from '../reducers/reducer'


export default function contextProvider(props) {
    
    const [ state, dispatch ] = useReducer(reducer, initialState)

    const addData = data => {
        dispatch( { type: 'ADD', payload: data } )
    }

    const removeData = id => {
        const filterData = state.photoData.filter(i => i.id !== id)
        dispatch({ type: 'DELETE', payload: filterData })
    }

    // console.log(prop, ' propsss')
    return (
        <Context.Provider value={{ state, dispatch, addData, removeData }}>
            { props.children }
        </Context.Provider>
    )
}

