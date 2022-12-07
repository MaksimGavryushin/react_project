import PropTypes from 'prop-types'
import { useState } from 'react'
import { AUTHOR } from '../../constants'
import { Button } from '../ui/Button'
import  styles from './Form.module.css'



export function Form({ addMessage }) {
    const [text, setText] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        addMessage({
            author: AUTHOR.user,
            text
        })

        setText('')
    }

    console.log('input', text)

    return (
        <>
            <h1>Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                />
                <Button type="submit">Add message</Button>
                {}
                {}
            </form>
        </>
    )
}

Form.propTypes = {
    addMessage: PropTypes.func
}