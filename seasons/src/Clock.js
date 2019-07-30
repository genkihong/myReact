import React from 'react';


class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        time: new Date().toLocaleTimeString()
      })
    }, 1000);
  }

  render() {
    return (
      <div className="time" style={time}>
        The time is: {this.state.time}
      </div>
    );
  }
}

const time = {
  fontSize: '20px',
  color: 'blue',
  position: 'absolute',
  top: '60%',
}


export default Clock;