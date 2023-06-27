// Write your code here
import {Component} from 'react'

import './index.css'
import DestinationItem from './components/DestinationItem'

class DestinationSearch extends Component {
  state = {
    searchInput: '',
    destinationsList: destinationsList,
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value.toLowerCase()})
  }

  render() {
    const {searchInput, destinationsList} = this.state
    const searchResults = destinationsList.filter(eachDestination =>
      eachDestination.name.includes(searchInput),
    )

    return (
      <div className="app-container">
        <h1 className="title">Destination Search</h1>
        <input
          type="search"
          onChange={this.onChangeSearchInput}
          value={searchInput}
        />
        <img
          className="search-image"
          src="https://assets.ccbp.in/frontend/react-js/destinations-search-icon-img.png"
          alt="search icon"
        />
        <ul className="list-container">
          {searchResults.map(eachDestination => (
            <DestinationItem
              destinationDetails={eachDestination}
              key={eachDestination.id}
            />
          ))}
        </ul>
      </div>
    )
  }
}

export default DestinationSearch
