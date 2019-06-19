import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import styles from './styles'

export default class Tela3 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  handlePress = () => {
    this.props.navigation.navigate('Tela2')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}><Text> Soon </Text></TouchableOpacity>
      </View>
    )
  }
}