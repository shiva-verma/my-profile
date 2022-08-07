import { Link } from 'react-router-dom'
import React from 'react'
import './index.scss'

/*
1. Card Class
2. Defaults 
*/

// 1. Card Class /////////////////////////////////////////////
function CardImage(props) {
  const isImageURL = props.image
  // let listOfClasses = null;

  // if (props.effect) {
  //   listOfClasses = "styleImage bw";
  // } else {
  //   listOfClasses = "styleImage";
  // }

  if (isImageURL) {
    return (
      <div className="styleImage" onClick={props.onClick}>
        <img
          style={{ width: props.width + 'px', marginTop: '-8%' }}
          src={props.image}
          alt="Seattle"
        />
      </div>
    )
  }
  return null
}

function CardContent(props) {
  return (
    <div className="styleCardContent">
      <div>
        <p className="styleCardTitle">{props.title}</p>
        <p className="styleLocationLabel">{props.location}</p>
        {/* <p className="styleDescription">{props.description}</p> */}
      </div>
      <div className="eventOptions">
        <a class="button" href={props.link}>
          project link
        </a>
        {/* <p className="notGoing">Not interested</p>
        <p className="going">I'm going</p> */}
      </div>
    </div>
  )
}

export default class Card extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      bwEffect: false,
      showOptions: false,
    }

    this.toggleEffect = this.toggleEffect.bind(this)
    this.toggleOptions = this.toggleOptions.bind(this)
  }

  toggleEffect() {
    this.setState((prevState) => ({
      bwEffect: !prevState.bwEffect,
    }))
  }

  toggleOptions(e) {
    let elementClicked = e.target
    let card = elementClicked.closest('.styleCard')
    let optionsSection = card.getElementsByClassName('eventOptions')[0]
    let optionsVisible = optionsSection.classList.contains('active')

    if (optionsVisible) {
      optionsSection.classList.remove('active')
    } else {
      optionsSection.classList.add('active')
      //_options.style.height = "49px";
    }

    // Old Toggle
    // this.setState(prevState => ({
    //   showOptions: !prevState.showOptions
    // }));
  }

  render() {
    return (
      <div style={{ width: this.props.width + 'px' }}>
        <div
          className="styleCard"
          id={this.props.id}
          onClick={this.toggleOptions}
        >
          <CardImage
            image={this.props.image}
            width={this.props.width}
            effect={this.state.bwEffect}
          />
          <CardContent
            title={this.props.title}
            location={this.props.location}
            description={this.props.description}
            options={this.state.showOptions}
            link={this.props.link}
          />
        </div>
      </div>
    )
  }
}

// 2. Defaults /////////////////////////////////////////////
Card.defaultProps = {
  width: 350,
  title: 'Template - Card Title',
  location: 'Location label',
  description: 'Template description textbox',
}
