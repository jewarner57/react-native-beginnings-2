import React, { Component } from 'react';
import ToDoItemList from './ToDoItemList';
import { StyleSheet, Text, View, TextInput, Button, Switch } from 'react-native';

export default class ToDoItem extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
            
                <View key={this.props.itemID}><Text>{this.props.displayedText}</Text> 
            
                <Switch 
                    key={this.props.index} 
                    onValueChange={this.props.onChange} 
                    checked={this.props.boxChecked}
                    value = {this.props.val}
                />
            
                </View>          
                                 
        )
    }
}

