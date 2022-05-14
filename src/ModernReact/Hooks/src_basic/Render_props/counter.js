import React, { Component } from 'react'

export default class counter extends Component {
  state = {
    count: 0,
}

incrementCount = () => {
    this.setState((prevState) => ({
        count: prevState.count + 1
    }))
}


  render() {
    const{children} = this.props;
    const{count} = this.state;
    return children(count, this.incrementCount);
    
  }
}
