import React, { useState } from 'react'
import './TinderCards.css'

function TinderCards() {
    const [people, setPeople] = useState([
        {
            name: "Elon Musk",
            url: ""
        },
        {
            name: "Steve Jobs",
            url: ""
        }
    ]);

  return (
    <div className='tinderCards'>
        
    </div>
  )
}

export default TinderCards