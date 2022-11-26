import React from 'react'
import { Dimensions, StyleSheet, Text, View, TextInput, useState } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import SearchableDropdown from 'react-native-searchable-dropdown';
import SignInBtn from '../components/signIn/SignInBtn';

const AddOfferScreen = ({ navigation }) => {

const [localType, onChangeLocalType] = React.useState('');
const [description, onChangeDescription] = React.useState('');
const [localization, onChangeLocalization] = React.useState('');

  return (
    <SafeAreaView style={styles.container}>
        <Text style={styles.h2}>Post new offer</Text>
        <TextInput style={styles.textboxes} onChangeText={onChangeLocalType} value={localType} placeholder="Local type dormitory/flat"/>
        <TextInput style={styles.textboxes} onChangeText={onChangeDescription} value={description} placeholder="Description"/>
        <TextInput style={styles.textboxes} onChangeText={onChangeLocalization} value={localization} placeholder="Localization (city for now...)"/>
        
        <SignInBtn style={styles.button} title="Create offer" onPress={() => { navigation.push('Main') }}></SignInBtn>
    </SafeAreaView>
  )
}

export default AddOfferScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    },
    h2: {
        fontSize: 30,
        marginVertical: 5,
        color: '#1A936F',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 12,
        paddingHorizontal: 32,
        marginVertical: 10,
        borderRadius: 4,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,
    
        elevation: 3,
        backgroundColor: '#1a936f',
      },
    textboxes: {
        width: '90%',
        fontSize: 15,
        padding: '5%',
        margin: 8,
        borderColor: 'grey',
        borderWidth: 0.5,
        borderRadius: 10,
        backgroundColor: '#fff',
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    },
})