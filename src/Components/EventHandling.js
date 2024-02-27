import React from 'react'

function EventHandling({clickHandler}) {

  return (
    <div>
        <button onClick={() => clickHandler('Turkey')}>Show Msg</button>
    </div>
  )
}

export default EventHandling