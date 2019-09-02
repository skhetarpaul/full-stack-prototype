import React, {Component} from 'react'

class CheckboxGenre extends Component {
    constructor(props) {
      super(props);
      this.state = {valueG: 'Lifestyle'};
  
      this.handleChange = this.handleChange.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    // handleSubmit(event) {
    //   alert('Your favorite flavor is: ' + this.state.value);
    //   event.preventDefault();
    // }
  
    render() {
      return (
          <label>
            Pick your favorite genre:
            <select value={this.state.valueG} onChange={this.handleChange}>
              <option value="lifestyle">Lifestyle</option>
              <option value="business">Business</option>
              <option value="foody">Foody</option>
              <option value="intellectual">Intellectual</option>
            </select>
          </label>
      );
    }
  }

  export default CheckboxGenre