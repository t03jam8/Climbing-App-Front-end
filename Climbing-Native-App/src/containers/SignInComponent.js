import React from 'react';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
// import { RaisedButton } from 'react-native-material-ui'
import { Navigator, NativeModules } from 'react-native';
import { Button } from 'react-native-material-ui';





class SignInComponent extends React.Component {

  render () {
    return (
      <View style={styles.container}>
        <View style={styles.backgroundImage} source={{uri: "https://s3-eu-west-1.amazonaws.com/climbing-kd/custom/rocks.png"}}>
          <View style={styles.boxes}>
            <View style={styles.TitleBox}>
              <Text style={styles.Title}>log-in</Text>
            </View>
          </View>
          <View style={styles.boxes}>
            <TextInput style={styles.inputBox}/>
            <TextInput style={styles.inputBox}/>
          </View>
          <View style={styles.boxes}>
            <Button style={styles.button} raised primary text="log-in"/>
            <Button style={styles.button} raised primary text="Create account"/>
          </View>
        </View>
      </View>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  boxes: {
    backgroundColor: 'white',
    width: 300,
    height: 100,
    borderColor: 'lightblue',
    justifyContent: 'space-around',
  },
  TitleBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Title: {
    fontSize: 50,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: 'orange',
    fontSize: 25,
  }
});

export default SignInComponent;
