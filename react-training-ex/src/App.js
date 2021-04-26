import React from 'react'
import './App.css';
import Header from './components/Header';
import ColorOptions from './components/ColorOptions';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      playerOneSelectValue: '',
      playerTwoSelectValue: '',
      playerThreeSelectValue: '',
      playerFourSelectValue: ''
    };
    this.handleChangePlayerOne = this.handleChangePlayerOne.bind(this);
    this.handleChangePlayerTwo = this.handleChangePlayerTwo.bind(this);
    this.handleChangePlayerThree = this.handleChangePlayerThree.bind(this);
    this.handleChangePlayerFour = this.handleChangePlayerFour.bind(this);

  }
  handleChangePlayerOne(e) {
    if (e.target.value === this.state.playerTwoSelectValue || e.target.value === this.state.playerThreeSelectValue || e.target.value === this.state.playerFourSelectValue) {
      alert('You can not choose the same colors as other players!')
    }
    else { this.setState({ playerOneSelectValue: e.target.value }); }

  }
  handleChangePlayerTwo(e) {
    if (e.target.value === this.state.playerOneSelectValue || e.target.value === this.state.playerThreeSelectValue || e.target.value === this.state.playerFourSelectValue) {
      alert('You can not choose the same colors as other players!')
    }
    else { this.setState({ playerTwoSelectValue: e.target.value }) };

  }
  handleChangePlayerThree(e) {
    if (e.target.value === this.state.playerOneSelectValue || e.target.value === this.state.playerTwoSelectValue || e.target.value === this.state.playerFourSelectValue) {
      alert('You can not choose the same colors as other players!')
    }
    else { this.setState({ playerThreeSelectValue: e.target.value }) };

  }
  handleChangePlayerFour(e) {
    if (e.target.value === this.state.playerOneSelectValue || e.target.value === this.state.playerTwoSelectValue || e.target.value === this.state.playerThreeSelectValue) {
      alert('You can not choose the same colors as other players!')
    }
    else { this.setState({ playerFourSelectValue: e.target.value }) };

  }
  render() {
    return (
      <div className="container">
        <Header />
        <div className="elements">
          <div className='players'>
            <div style={{ backgroundColor: this.state.playerOneSelectValue }} className='player-one'>
              <h4>Player 1</h4>
              <hr></hr>
              <select class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={this.handleChangePlayerOne}>
                <ColorOptions />
              </select>
            </div>
          </div>

          <div className='players'>
            <div style={{ backgroundColor: this.state.playerTwoSelectValue }} className='player-two'>
              <h4>Player 2</h4>
              <hr></hr>
              <select class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={this.handleChangePlayerTwo}>
                <ColorOptions />
              </select>
            </div>
          </div>
          <br></br>
          <div className='players-set-two'>
            <div style={{ backgroundColor: this.state.playerThreeSelectValue }} className='player-three'>
              <h4>Player 3</h4>
              <hr></hr>
              <select class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={this.handleChangePlayerThree}>
                <ColorOptions />
              </select>
            </div>
          </div>

          <div className='players-set-two'>
            <div style={{ backgroundColor: this.state.playerFourSelectValue }} className='player-four'>
              <h4>Player 4</h4>
              <hr></hr>
              <select class="form-select form-select-sm" aria-label=".form-select-sm example" onChange={this.handleChangePlayerFour}>
                <ColorOptions />
              </select>
            </div>

          </div>

        </div>
      </div>
    );
  }
}

export default App;
