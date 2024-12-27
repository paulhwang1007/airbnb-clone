import React from 'react'
import { list } from '../../assets/cards-list'
import './styles.css'
import Card from './card'

function Cards() {
  return (
    <div className='cards-flex'>
      {list.map((card, i) => (
        <Card card={card} key={i} />
      ))}
    </div>
  )
}

export default Cards