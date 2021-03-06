import { StyleSheet, Text, View, TextInput, Switch} from 'react-native';
import React, { Component } from 'react';
import ActionButton from './ActionButton';
import ToDoItem from './ToDoItem';
import ToDoItemList from './ToDoItemList';

export default class Note extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.changeColor = this.changeColor.bind(this);
        this.onSubmit = this.onSubmit.bind(this); 
        this.checked = this.checked.bind(this);
        this.removeSelectedToDoItem = this.removeSelectedToDoItem.bind(this);
        
        const toDoItem = [];
        
        
        toDoItem.push({
            
            id: 999,
            displayedText: "Text",
            checked: 0,
            textDecoration: "none"
            
        })
        
        this.state = {textValue: "", toDoItem: [], toDoItemCount: 999};
    } 
    
    changeColor() {
        
        const toDoItemArray = [...this.state.toDoItem];
        
        for(let i = 0; i < toDoItemArray.length; i++) {
            
            if(toDoItemArray[i].checked == true) {
                
                if(toDoItemArray[i].textDecoration == "none" || toDoItemArray[i].textDecoration == "noneReset") {
                    
                    toDoItemArray[i].textDecoration = "bold";
                    
                }
                else {
                    
                    toDoItemArray[i].textDecoration = "noneReset";
                    
                }
                
                //atoDoItemArray[i].checked = 1;
                
            }
            
        }
        
        this.setState({toDoItem: toDoItemArray})
    }
    
    onSubmit() {
        
        const toDoItemArray = [...this.state.toDoItem];
        const toDoItemIDCounter = this.state.toDoItemCount + 1;
        this.setState({toDoItemCount: toDoItemIDCounter});
        const textValue = this.state.textValue;
        
        
        toDoItemArray.push({
            
            id: this.state.toDoItemCount,
            displayedText: textValue,
            checked: 0,
            textDecoration: "none"
            
        })
        
        this.setState({toDoItem: toDoItemArray, textValue: "", toDoItemCount: this.state.toDoItemCount+1});
    }
    
    checked(event) {
        let toDoItemArray = [...this.state.toDoItem];
        
        if(toDoItemArray[event.target.id].checked == 0) {
            toDoItemArray[event.target.id].checked = 1
        }
        else {
            toDoItemArray[event.target.id].checked = 0
        }
        
        this.setState({toDoItem: toDoItemArray});
    }
    
    removeSelectedToDoItem() {
        const currentToDoItem = [...this.state.toDoItem];
        let newToDoItemList = [];
        
        for(let i = 0; i < currentToDoItem.length; i++) {
            
            if(currentToDoItem[i].checked == false) {
                newToDoItemList.push(currentToDoItem[i]);
            }
            
        }
        
        this.setState({toDoItem: newToDoItemList})   
        
    }
    
    render() {
        return (
            <View style = {styles.container}>
                <View>
                    <TextInput  
                        style={styles.textArea}
                        placeholder={'Enter Text Here Then Press Submit'}
                        value = {this.state.textValue}
                        onChangeText={(textValue) => this.setState({textValue})}>
                    </TextInput>
        
                    <ActionButton buttonClicked={this.onSubmit} buttonName = {'Submit'}></ActionButton> 
                </View>
                <View>
                    <ToDoItemList key={this.state.toDoItemCount} toDoItem = {this.state.toDoItem} changed={this.checked} > </ToDoItemList>
                </View>
                
                    <ActionButton buttonClicked={this.changeColor} buttonName = {'Bold'}></ActionButton>    
                    <ActionButton buttonClicked={this.removeSelectedToDoItem} buttonName = {'Delete'}></ActionButton>    
                    
            </View>
        )
    }
}

const styles = StyleSheet.create({
    
    container: {
        marginTop: 50,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    textArea: {
        width: 250,
        textAlign: 'center',
    }
});
