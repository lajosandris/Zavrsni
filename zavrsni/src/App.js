

  import './App.css';
  import Messages from './components/messages';
  import React from 'react';
  import Sidebar from './components/Sidebar'
  

  class App extends React.Component {

    randomName() {
      const adjectives = ["autumn", "hidden", "bitter", "misty", "silent", "empty", "dry", "dark", "summer", "icy", "delicate", "quiet", "white", "cool", "spring", "winter", "patient", "twilight", "dawn", "crimson", "wispy", "weathered", "blue", "billowing", "broken", "cold", "damp", "falling", "frosty", "green", "long", "late", "lingering", "bold", "little", "morning", "muddy", "old", "red", "rough", "still", "small", "sparkling", "throbbing", "shy", "wandering", "withered", "wild", "black", "young", "holy", "solitary", "fragrant", "aged", "snowy", "proud", "floral", "restless", "divine", "polished", "ancient", "purple", "lively", "nameless"];
      const nouns = ["waterfall", "river", "breeze", "moon", "rain", "wind", "sea", "morning", "snow", "lake", "sunset", "pine", "shadow", "leaf", "dawn", "glitter", "forest", "hill", "cloud", "meadow", "sun", "glade", "bird", "brook", "butterfly", "bush", "dew", "dust", "field", "fire", "flower", "firefly", "feather", "grass", "haze", "mountain", "night", "pond", "darkness", "snowflake", "silence", "sound", "sky", "shape", "surf", "thunder", "violet", "water", "wildflower", "wave", "water", "resonance", "sun", "wood", "dream", "cherry", "tree", "fog", "frost", "voice", "paper", "frog", "smoke", "star"];
      const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
      const noun = nouns[Math.floor(Math.random() * nouns.length)];
      return adjective + noun;
    }
    
    randomColor() {
      return '#' + Math.floor(Math.random() * 0xFFFFFF).toString(16);
    }


    state = {
      messages: [
        {
          text: "This is a test message!",
          member: {
            color: "blue",
            username: "bluemoon"
          }
        }
      ],
      member: {
        username: this.randomName(),
        color: this.randomColor()
      }
    }

    render(){
    return (
  
  <div className="App">
  <div className="App-header"> 
  <button className='sidebar-btn' onClick={this.ToggleSidebar}>Sidebar</button>
      <h1>Algebra Seminarski Rad</h1>

      {/* Prazan div sluzi za flex pozicioniranje*/}
  </div>
  <Sidebar ref={(reference)=> this.sidebar = reference}/>


  <Messages
    messages={this.state.messages}
    currentMember={this.state.member}
  />
  </div>
    );
  }
  }
  export default App;
