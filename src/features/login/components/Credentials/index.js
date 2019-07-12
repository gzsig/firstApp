import React, { Component } from "react";
import { Text, Button, TextInput, View } from "react-native";
import styles from "./styles";

export default class Tela0 extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }
  handlePress = () => {
    this.props.navigation.navigate("Feed");
  };
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.form}>
          <TextInput style={styles.input} placeholder={"username"} />
          <TextInput style={styles.input} placeholder={"password"} />
          <Button title={"Login"} onPress={()=>{this.handlePress()}}/>
        </View>
      </View>
    );
  }
}
