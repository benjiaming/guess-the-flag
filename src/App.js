import React from 'react';
import './App.css';
import Flag from './Flag';
import * as CountryUtils from './CountryUtils';

const Header = () => {
  return (
    <header>
      Guess The Flag
    </header>
  );
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      countries: [],
      currentCountry: undefined,
      selectCountries: [],
      loaded: false,
      numCorrect: 0,
      numIncorrect: 0,
      incorrectGuesses: new Set(),
      hint: '',
      showHint: false,
    }
    this.numCountries = 4;
    this.onClick = this.onClick.bind(this);
    this.handleHint = this.handleHint.bind(this);
  }
  componentDidMount() {
      CountryUtils.loadCountries(this.numCountries).then((parsedCountries) => {
        this.setState({...parsedCountries, loaded: true});
      });
  }
  onClick(countryPos) {
    if (countryPos === undefined) {
      return;
    }
    if (this.state.currentCountry === countryPos) {
      const selectCountries = CountryUtils.getRandomCountries(this.state.countries, this.numCountries);
      const currentCountry = CountryUtils.getCurrentCountry(selectCountries);
      const hint = CountryUtils.getHint(selectCountries[currentCountry]);
      this.setState(prevState => { return {
        numCorrect: prevState.numCorrect+1,
        incorrectGuesses: new Set(),
        selectCountries,
        currentCountry,
        hint,
        showHint: false,
      }});
    } else {
      const incorrectGuesses = new Set(this.state.incorrectGuesses);
      incorrectGuesses.add(countryPos);
      this.setState(prevState => {
         return {
            numIncorrect: prevState.numIncorrect + 1,
            incorrectGuesses,
          }
      });

    }
  }
  handleHint() {
    this.setState({showHint: true});
  }
  render() {
    const {selectCountries, currentCountry, loaded, 
      numCorrect, numIncorrect, incorrectGuesses, showHint, hint} = this.state;
    return (
      <div className="App">
        <Header />
        { loaded ? 
            <Flag
              countries={selectCountries} 
              selectCountries={selectCountries} 
              currentCountry={currentCountry}
              onClick={this.onClick}
              numCorrect={numCorrect}
              numIncorrect={numIncorrect}
              incorrectGuesses={incorrectGuesses}
              showHint={showHint}
              hint={hint}
              handleHint={this.handleHint}
            />
            : "Loading"
        }
      </div>
    );
  }
}

export default App;
