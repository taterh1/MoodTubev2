import React from 'react'

export default function Playlist(props) {
    const { happy, sad, excited } = props
    let emotion = happy || sad || excited
  return (
    <div className="playlist">
        <h3>Here is your MoodList</h3>
        <ul>
            {emotion.map((song) => (<li key={song.id}>{song.snippet.title}</li>))}
        </ul>
    </div>
  )
}
