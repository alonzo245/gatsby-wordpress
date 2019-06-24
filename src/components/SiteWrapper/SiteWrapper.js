import React, { Component } from 'react';
import './SiteWrapper.css';

class SiteWrapper extends Component {
  render() {
    return (
      <main className="SiteWrapper">
        {this.props.children}
      </main>
    );
  }
}

export default SiteWrapper;
