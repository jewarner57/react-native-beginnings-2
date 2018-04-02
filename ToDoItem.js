import React, { Component } from 'react';
import ToDoItemList from './ToDoItemList';
import { StyleSheet, Text, View, TextInput, Button, Switch, Slider } from 'react-native';

export default class ToDoItem extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
                
                <View 
            
                    key={this.props.itemID}
            
                ><Text style = {styles[this.props.textDecoration]}>{this.props.displayedText}</Text> 
            
                         
                
                    <Slider
                        style = {styles.slider}
                        maximumValue = {1}
                        minimumValue = {0}
                        key={this.props.index} 
                        onValueChange={this.props.onChange}
                        value = {0}
                    />
                </View>
                
                                 
        )
    }
}

const styles = StyleSheet.create({
    
    bold: {
        fontSize: 40,
    },
    none: {
        fontSize: 25,
    },
    noneReset: {
        fontSize: 25,
    },
    slider: {
        width: 60,
    },
});

