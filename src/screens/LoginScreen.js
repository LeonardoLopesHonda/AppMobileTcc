import React, { useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, Text, TextInput, TouchableOpacity, View , Alert} from 'react-native';
// images imports
import agenda from "../../assets/agenda.png"
// imports do firebase
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { initializeApp } from 'firebase/app' 
import { firebaseConfig } from '../../firebase';

// changed from 'const LoginScreen = () => {}' to function LoginScreen() {}
const LoginScreen = ({navigation}) => {

    const [email, setEmail] = useState('')
    const [senha, setSenha] = useState('')

    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);

    const handleLogin = () => {
        createUserWithEmailAndPassword(auth, email.trim(), senha.trim())
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Cadastrado")
            Alert.alert("Cadastrado!")
        }).catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    } 
    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email.trim(), senha.trim())
        .then((userCredential) => {
            const user = userCredential.user;
            console.log("Logado!");
            navigation.reset({
                index: 0,
                routes: [{name: "Home"}]
            })
        }).catch(error => {
            console.log(error)
            Alert.alert(error.message)
        })
    } 
    

  return (
    <KeyboardAvoidingView
        style={styles.container}
        behavior="padding"
    >   
        <View style={styles.topContainer}>
            <Image source={agenda} style={styles.agendaIcon} />
            <Text style={styles.titleText}> APP de gerenciamento de rotinas </Text>
        </View>
        <View style={styles.inputContainer}>
            <TextInput 
                placeholder='Email'
                onChangeText={(text) => setEmail(text)}
                style={styles.input}
            />
            <TextInput 
                placeholder='Senha'
                onChangeText={(text) => setSenha(text)}
                style={styles.input}
                secureTextEntry
            />
        </View>

        <View style={styles.buttonContainer}>
            <TouchableOpacity onPress={(handleSignIn)} style={styles.button}>
                <Text style={styles.buttonText}> Login </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={handleLogin} style={[styles.button, styles.buttonOutline]}>
                <Text style={styles.buttonOutlineText}> Registrar </Text>
            </TouchableOpacity>
        </View>
    </KeyboardAvoidingView>
  )
}

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    topContainer:{
        marginVertical: 18,
        justifyContent: "center",
        alignItems: "center",
        top: 0
    },
    titleText:{
        fontWeight: "bold",
        fontSize: 20
    },
    agendaIcon:{
        width: 100,
        height: 150,
        marginVertical: 25
    },  
    inputContainer: {
        width: "80%",
    },
    input: {
        backgroundColor: "white",
        paddingHorizontal: 15,
        paddingVertical: 10,
        borderRadius: 10,
        marginTop: 5,
        borderBottomWidth: 2,
        borderBottomColor: "#313131"
    },
    buttonContainer: {
        width: "60%",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 40
    },
    button: {
        backgroundColor: "#0782F9",
        width: "100%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center"
    },
    buttonOutlineText: {
        color: "#0782F9",
        fontWeight: "700",
        fontSize: 16,
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
    buttonOutline: {
        backgroundColor: "white",
        marginTop: 5,
        borderColor: "#0782F9",
        borderWidth: 2
    },
});