import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default class ToDoItemList extends React.Component {
    
    constructor(props) {
        super(props);
        
    }
    
    render() {
        
        return (
            <View>
            
            {this.props.toDoItem.map((toDoItem , index) => (
            
                <ToDoItem key={toDoItem.id} textDecoration = {toDoItem.textDecoration} 
                itemID = {toDoItem.id} 
                displayedText = {toDoItem.displayedText} 
                index = {index} 
                onChange={(value) => toDoItem.checked = value} 
                val = {toDoItem.checked}
                boxChecked = {toDoItem.checked}> </ToDoItem>
            
            ))}
                
            </View>    
        )
    }
}
