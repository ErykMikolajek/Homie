import { Dimensions, StyleSheet, Text, View , TouchableOpacity} from 'react-native'
import React from 'react'

const Tab = (props) => {
    const {title, onPress} = props
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  )
}

export default Tab

const styles = StyleSheet.create({
    container:{
        width: '95%',
        flex: 0.4,
        //height: 70, //Dimensions.get('window').height/15,
        borderRadius: 10,
        backgroundColor: '#f1f4f5',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'a8a8a8',
        marginBottom: 10,
    },
    text:{
      fontSize: 20,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: '#114b5f',
    }
})