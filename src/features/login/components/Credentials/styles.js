import { StyleSheet , Dimensions} from "react-native";

const {height, width} = Dimensions.get('screen')

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  input:{
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
    height: 40
  },
  form:{
    width: width*0.8
  }
})