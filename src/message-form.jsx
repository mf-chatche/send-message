import React, { useState } from 'react'
import { connect } from 'react-firebase'

import styles from './styles.module.css'

const MessageForm = ({ sendMessage, loggedUser }) => {
  const [ message, setMessage ] = useState('')

  const handleSubmit = event => {
    event.preventDefault()

    const content = message

    sendMessage({
      sender: loggedUser,
      content
    })

    setMessage('')
  }

  return (
    <form className={styles.login__form} onSubmit={handleSubmit}>
      <input className={styles.login__input} type="text" name="message" value={message} onChange={({target}) => setMessage(target.value)}/>
      <button className={styles.login__submit}>Enviar</button>
    </form>
  )
}

const mapFirebaseToProps = (props, ref) => ({
  sendMessage: message => {
    ref('messages').once('value').then((snapshot) => {
      const messages = snapshot.val()

      messages.push(message)

      ref('messages').set(messages)
    })
    
  }
})

export default connect(mapFirebaseToProps)(MessageForm)
