import React , {Component} from 'react';

class Checkbox extends Component {
    constructor(props) {
      super(props);
      this.state = {
        isChecked: true,
      };
    }
    toggleChange = () => {
      this.setState({
        isChecked: !this.state.isChecked,
      });
    }
    render() {
      return (
        <label>
          <input type="checkbox"
            checked={this.state.isChecked}
            onChange={this.toggleChange}
          />
          By signing up you agree to terms and conditions
         </label>
      );
    }
  }

  export default Checkbox