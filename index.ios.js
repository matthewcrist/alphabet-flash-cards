/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
import React, {
  AppRegistry,
  Component,
  StyleSheet,
  Text,
  View,
  TouchableHighlight
} from 'react-native';

import Dimensions from 'Dimensions'

class Flash extends Component {
  _getLetter() {
    var alphabet = "abcdefghijklmnopqrstuvwxyz".split(""),
        randomLetter = alphabet[Math.floor(Math.random()*alphabet.length)];

    this.randomLetter = !!Math.floor(Math.random() * 2) ? randomLetter : randomLetter.toUpperCase();
  }

  _onSuccessButton() {
    this.forceUpdate()
  };

  render() {
    this._getLetter();

    return (
      <View style={styles.container}>
        <View style={styles.letterContainer}>
          <Text style={styles.letter}>
            {this.randomLetter}
          </Text>
        </View>
        <View style={styles.buttonContainer}>
          <TouchableHighlight style={[styles.button,styles.primaryButton]} onPress={this._onSuccessButton.bind(this)}>
            <View>
              <Text style={styles.buttonText}>Got it!</Text>
            </View>
          </TouchableHighlight>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#9b59b6',
    flex: 1
  },
  letterContainer: {
    flex: 2,
    justifyContent: 'center',
    alignItems: 'center'
  },
  letter: {
    fontSize: 300,
    textAlign: 'center',
    color: '#ffffff',
    fontWeight: '700'
  },
  cancelButton: {
    width: Dimensions.get('window').width * 0.5,
    marginTop: 10
  },
  primaryButton: {
    borderWidth: 2,
    borderColor: '#ffffff'
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: Dimensions.get('window').width * 0.75,
    height: 50,
    backfaceVisibility: 'hidden'
  },
  buttonText: {
    color: '#ffffff'
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    alignItems: 'center',
    bottom: 15
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('Flash', () => Flash);
