import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export default class Tela0 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  handlePress = () => {
    this.props.navigation.navigate('Tela1')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}><Text> Hello </Text></TouchableOpacity>
      </View>
    )
  }
}

