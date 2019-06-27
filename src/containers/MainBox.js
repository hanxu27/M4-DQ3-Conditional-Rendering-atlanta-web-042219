import React from 'react'
import MenuBar from '../components/MenuBar.js'
import { Profile, Photos, Cocktails, Pokemon } from '../components/Pages.js'

class MainBox extends React.Component {
  state = {
    display: "profile"
  }

  changeDisplay = (id) => {
    this.setState({ display: id })
  }

  render() {

    const detailsToDisplay = () => {
      switch (this.state.display) {
        case "profile":
          return <Profile />
        case "photo":
          return <Photos />
        case "cocktail":
          return <Cocktails />
        case "pokemon":
          return <Pokemon />
      }
    }

    return (
      <div>
        <MenuBar active={this.state.display} changeDisplay={this.changeDisplay} />
        {detailsToDisplay()}
      </div>
    )
  }

}

export default MainBox
