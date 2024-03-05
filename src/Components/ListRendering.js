import React from 'react'
import {people} from './PeopleInfo.js' // named import
import { nanoid } from 'nanoid' // unique id generator

function ListRendering() {
   
    
  return (
    <div>
        {
            people.map(person => <h1 key={nanoid()}>{person}</h1>)
        }
    </div>
  )
}

export default ListRendering