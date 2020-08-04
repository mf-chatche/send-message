import React from 'react'
import ReactDOM from 'react-dom'
import SendMessage from '@chatche/send-message'

SendMessage.register()

const loggedUser = {
  name: "Pedro"
}

ReactDOM.render(<chatche-send-message logged-user={JSON.stringify(loggedUser)} />, document.getElementById('root'))
