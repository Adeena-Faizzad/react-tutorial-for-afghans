import React, { useState } from 'react'
import EventHandling from './EventHandling'

function EventHandlingParent() {
    const [value, setValue] = useState('');
    function greet(cityName) {
       setValue(alert(`Welcome to ${cityName}`));
    }

  return (
    <div>
        <EventHandling clickHandler={greet} />
        <p>{value}</p>
    </div>
  )
}

export default EventHandlingParent