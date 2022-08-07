import React from 'react'
import Loader from 'react-loaders'
import AnimatedLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import Card from '../Card/Card'
import './index.scss'

export const Project = (props) => {
  const [letterClass, setLetterClass] = useState('text-animate')

  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)
  }, [])

  const eventsList = props.data.map((event) => (
    <Card
      id={event.id}
      image={event.image}
      title={event.title}
      location={event.location}
      description={event.description}
      link={event.link}
    />
  ))

  return (
    <>
      <div className="container project-page">
        <div className="text-zone">
          <h1>
            <AnimatedLetters
              letterClass={letterClass}
              strArray={['P', 'r', 'o', 'j', 'e', 'c', 't', 's']}
              idx={15}
            />
          </h1>
        </div>
        <div className="wrapper">{eventsList}</div>
      </div>
      <Loader type="pacman" />
    </>
  )
}
export default Project
