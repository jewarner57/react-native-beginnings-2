import React, { Component } from 'react';
import Note from './Note';
import ActionButton from './ActionButton';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

class App extends Component {
  render() {
    return (
      <View>
        
        <Note/>
        
      </View>
    );
  }
}
export default App;

const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});