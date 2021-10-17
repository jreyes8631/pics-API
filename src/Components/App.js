import React from 'react';
import axios from 'axios';
import SearchBar from './SearchBar'

class App extends React.Component {

  state = {images: []}

  onSearchSubmit = async (term) => {
   
   const resp = await axios.get('https://api.unsplash.com/search/photos', {
     params: { query: term },
     headers: {
       Authorization: 'Client-ID zIN-FurWn1HMVuVrNA08M5IPNbNcLT6S3fuSXZPxgvM'
     }
   });
    
   this.setState({images: resp.data.results})
  }


  

  render(){
    return (
      <div className="ui container" style={{marginTop: "10px"}}>
       
        <SearchBar onSubmit={this.onSearchSubmit}/>
        Found: {this.state.images.length}
        
      </div>
    );
  }
  
}

export default App;
