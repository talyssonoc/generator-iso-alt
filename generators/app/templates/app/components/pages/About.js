import React from 'react';

import contextTypes from 'app/lib/contextTypes';

import Link from 'app/components/Link';

class About extends React.Component {
  static contextTypes = contextTypes

  constructor(props, context) {
    super(props, context);

    this.state = {
      time: this.context.getStore('TimeStore').getState().currentTime
    };
  }

  componentDidMount() {
    this.context.getStore('TimeStore').listen(this.handleTimeChange);
  }

  componentWillUnmount() {
    this.context.getStore('TimeStore').unlisten(this.handleTimeChange);
  }

  handleTimeChange = (state) => {
    this.setState({
      time: state.currentTime
    });
  }

  render() {
    const time = new Date(this.state.time);

    let currentTime = `${time.getMonth() + 1}/${time.getDate()}`;
    currentTime += ` - ${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`

    return (
    <div>
      <h1>This is the about page at { currentTime }!</h1>
      <div className="pure-g">
        <div className="pure-u-1">
          <Link
            route="index"
            className="pure-button pure-button-primary"
          >
            Home »
          </Link>
        </div>
      </div>
    </div>);
  }
}

export default About;
