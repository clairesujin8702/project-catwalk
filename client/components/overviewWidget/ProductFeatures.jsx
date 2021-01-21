import React from 'react';
// import axios from 'axios';

class ProductFeatures extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {}

  render () {
    return (
      <div className="feature">
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-check2" viewBox="0 0 16 16">
        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
</svg>{' '}<span>{`${this.props.feature.feature}: ${this.props.feature.value}`}</span>
      </div>
    );
  }
}

export default ProductFeatures;