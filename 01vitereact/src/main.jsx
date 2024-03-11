import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function Website(){
    return(
        <a href='https://google.com' target="_blank">click me</a>
    )
}

const anotherElement = (
    <a href="https://google.com" target='_blank'>Visit google</a>
)

function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}

const anotherUser = "chai aur react"

const reactElement = React.createElement(    //babble inject the new element
    'a',
    {href: 'https://google.com',target: '_blank' },
    'click me to visit google',
    anotherUser
)



ReactDOM.createRoot(document.getElementById('root')).render(  
//Website()
//   or
//<Website/> //CORRECT SYNTAX 
<reactElement/>

)
                                                                                                                        