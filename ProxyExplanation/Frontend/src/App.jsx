import React from 'react'
import { useState } from 'react'
import axios from 'axios'
import { useEffect } from 'react'

const App = () => {

  let [joke, setJoke] = useState([])

  useEffect(() => {
    axios.get('/api/jokes')
      .then((response) => {
        setJoke(response.data)
        console.log(joke)
      })
      .catch((error) => {
        console.log("Failed To Fetch Jokes !")
      })
  },)

  return (
    <div>
      <h1>Jokes Application</h1>
      <div id='container'>
        {
          joke.map((item, idx) => {
            return (

              <div id='jokeContainer'>
                <h2 key={idx}>Joke Id : {item.id}</h2>
                <h3 key={idx}>Title : {item.title}</h3>
                <h4 key={idx}>Content : {item.content}</h4>
                <h4 key={idx}>Author : {item.author}</h4>
              </div>


            )
          })
        }
      </div>


    </div>
  )
}

export default App
