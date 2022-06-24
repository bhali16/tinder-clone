import React, { useState } from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card';

function TinderCards() {
  const [people, setPeople] = useState([
    {
      name: "Steve Jobs",
      url: "https://cdn.britannica.com/64/121664-004-73C27A0C/Steve-Jobs.jpg",
    },
    {
      name: "Steve Madden",
      url:
        "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/Y3UTBX2UDM5HTOZ3EMFOOQL64E.jpg&w=1200",
    },
  ]);

  return (
    <div className='tinderCards'>
        <div className="tinderCards__cardContainer">
          {people.map((person) => (
            <TinderCard
            className="swipe"  
            key={person.name}
            preventSwipe={["up", "down"]}
            ></TinderCard>
          ))}
          </div>
    </div>
  )
}

export default TinderCards