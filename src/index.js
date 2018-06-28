import React from 'react';
import ReactDOM from 'react-dom';
import PhotoList from './components/PhotoList'
import SearchBar from './components/SearchBar'
const API_KEY = '3de23d522fce413d26830ec7503a7a7b46c5b87893f81bdda63cda506c60b841'

class App extends React.Component {
  constructor(props){
    super(props)

    this.state={
      photos: [],
      term: 'yosemite'
    }

    this.fetchPhotos(this.state.term)
  }

  fetchPhotos = (term) => {
    fetch(`https://api.unsplash.com/search/photos?page=1&query=${term}&client_id=${API_KEY}`)
      .then(resp => { return resp.json() })
      .then(data => {
        this.setState({
          photos: data.results
        })
      })
  }

  render() {
    return (
      <div>
        <SearchBar onSearchTermChange={this.fetchPhotos} />
        <PhotoList photos={this.state.photos} />
      </div>
    )
  }
}

ReactDOM.render(<App /> , document.getElementById('root'))
