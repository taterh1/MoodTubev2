import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'

function App() {
    const [happy, setHappy] = useState([])
    const [sad, setSad] = useState([])
    const [excited, setExcited] = useState([])

    useEffect(
        () => {
            axios.get('https://www.googleapis.com/youtube/v3/search?part=snippet&q=happy&key=AIzaSyCa1WdmO_Lf9tdZIGhxVS1dabUKLVU-iy8')
                .then(res => {
                    setHappy(res.data.items)
                })
                .catch(err => {
                    console.error(err)
                })
        }, []
    )

  return (
      <>
      <h1>Vite + React</h1>
          <div className="card">

      </div>
    </>
  )
}

export default App
