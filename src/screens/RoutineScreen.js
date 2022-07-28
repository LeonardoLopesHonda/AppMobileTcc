import React from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import Calendario from "../compontents/Calendario";


const RoutineScreen = () => {
    return(
        <SafeAreaView style={{height: "100%"}}>
            <Calendario style={styles.calendarioSize} />
        </SafeAreaView>
    )
}

export default RoutineScreen

const styles = StyleSheet.create({
    calendarioSize: {
        width: "100%",
        height: "100%",
    },
});