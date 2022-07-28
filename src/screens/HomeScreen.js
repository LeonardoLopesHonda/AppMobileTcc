import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { signOut, getAuth } from 'firebase/auth';

const HomeScreen = ({navigation}) => {

    const auth = getAuth();

    const handleSignOut = () => {
        signOut(auth)
        .then((userCredential) => {
            navigation.navigate("Login")
        }).catch((error) => {
            alert(error.message)
        });
    } 

    return (
        <View style={styles.container}>
            <Text style={styles.mainText}>Bem vindo</Text>
        </View>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    button: {
        backgroundColor: "#0782F9",
        width: "40%",
        padding: 15,
        borderRadius: 10,
        alignItems: "center",
        marginTop: 40,
    },
    buttonText: {
        color: "white",
        fontWeight: "700",
        fontSize: 16,
    },
});