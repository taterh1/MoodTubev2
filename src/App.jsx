import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios'
import Playlist from './playlist'
import Home from './Home'

function App() {
    const [happy, setHappy] = useState([])
    const [sad, setSad] = useState([])
    const [excited, setExcited] = useState([])

    useEffect(
        () => {
            //should be dynamic with env file for keys
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
        <Home happy={happy} sad={sad} excited={excited} />
        <Playlist happy={happy} sad={sad} excited={excited} />
    </>
)
}

export default App;
