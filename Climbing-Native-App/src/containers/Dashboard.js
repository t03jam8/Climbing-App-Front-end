import React, { Component } from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Dashboard extends Component {
  static propTypes = {
    content: React.PropTypes.string.isRequired,
    textStyles: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.number,
      React.PropTypes.shape({}),
    ]).isRequired,
    buttonStyles: React.PropTypes.oneOfType([
      React.PropTypes.array,
      React.PropTypes.number,
      React.PropTypes.shape({}),
    ]).isRequired,
  }
  render = () => {
    const { textStyles, buttonStyles, content } = this.props;

    return (
      <TouchableOpacity style={buttonStyles}>
        <Text style={textStyles}>{content}</Text>
      </TouchableOpacity>
    );
  }
}
export default Dashboard;
