import React from 'react';

const Hint = ({showHint, hint, onClick}) => {
    return (
        showHint ?  
          <div className="hint-text">{hint}</div> :
         <button className="hint-button" onClick={onClick}>Reveal a hint</button>
    );
  }
    
export default class Flag extends React.Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
      this.props.onClick(parseInt(e.target.dataset.attr, 10))
    }
    render() {
      const {selectCountries, currentCountry, numCorrect, numIncorrect, incorrectGuesses, showHint, handleHint, hint} = this.props;
      const country = selectCountries[currentCountry];
      const countryList = selectCountries.map((c, i) => {
        let className = "country-name";
        if (incorrectGuesses.has(i)) {
          className += " wrong-guess";
        }
        return (
          <span 
            key={i} 
            className={className}
            data-attr={i}
          >{c.name}</span>
        );
      });
      return (
        <div className="flag-box">
          <div className="countries" onClick={(e) => this.handleClick(e)}>
              {countryList}
          </div>
          <Hint showHint={showHint} onClick={()=> handleHint()} hint={hint} />
          <div className="flag">
            <img src={country.flag} alt="flag" />
          </div>
          <div className="score">
            Correct: {numCorrect} Incorrect: {numIncorrect}
          </div>
        </div>
      );
    }
  }