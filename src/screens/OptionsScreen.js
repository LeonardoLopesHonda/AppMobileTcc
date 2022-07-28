import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { signOut, getAuth } from 'firebase/auth';

function OptionsScreen({navigation}) {
    const auth = getAuth();

    const handleSignOut = () => {
        signOut(auth)
        .then((userCredential) => {
            navigation.navigate("Login")
        }).catch((error) => {
            alert(error.message)
        });
    } 
    return(
        <View style={styles.container}>
            <Text> Options Screen </Text>
            <TouchableOpacity
                style={styles.button}
                //onPress={}
            >
                <Text style={styles.buttonText}> Notificações </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                //onPress={}
            >
                <Text style={styles.buttonText}> Vincular com EAD </Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={handleSignOut}
            >
                <Text style={styles.buttonText}> Sair </Text>
            </TouchableOpacity>
        </View>
    )
}

export default OptionsScreen

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