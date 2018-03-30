import React, { Component } from 'react';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default class ActionButton extends React.Component {
    
    constructor(props) {
        super(props);
        
    } 
    
    render() {
        return (
            <Button onPress = {this.props.buttonClicked} title={this.props.buttonName} />     
        )
    }
}
