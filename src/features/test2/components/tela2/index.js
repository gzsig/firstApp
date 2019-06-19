import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import styles from './styles'

export default class Tela2 extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
  }
  handlePress = () => {
    this.props.navigation.navigate('Tela3')
  }
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.handlePress}><Text> See you </Text></TouchableOpacity>
      </View>
    )
  }
}

