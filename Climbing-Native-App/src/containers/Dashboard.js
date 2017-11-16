import React, { Component } from 'react';
import { Text, Image, StyleSheet, View } from 'react-native';


class Dashboard extends Component {

  render () {
    const { content } = this.props;

    return (
      <View style={styles.dash}>
        <Image style={styles.dashimage} source={{uri: 'https://cdn.ukc2.com/i/259558.jpg'}}/>
        <Text style={styles.dashboardtext}>Route setting in process...</Text>
      </View>
    );
  }
}

//needs business logic, and if that is in place, we will have to implement the if-else statement here and render
// WallListComponent

const styles = StyleSheet.create({
  dash: {
    backgroundColor: 'transparent',
  },
  dashimage: {
    width: 300,
    height: 200,
    overflow: 'visible',
    backgroundColor: 'transparent',
    marginTop: 40,
    marginLeft: 40,
    marginRight: 40
  },
  dashboardtext: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
    overflow: 'visible',
    backgroundColor: 'transparent'
  }
});


export default Dashboard;
