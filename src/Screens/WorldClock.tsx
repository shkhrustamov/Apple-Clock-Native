import React from "react";
import {ScrollView, Text, View, StyleSheet} from "react-native";

const WorldClock = () => {
    return (
        <ScrollView style={styles.container}>
            <View style={styles.box}>
                <View style={styles.left}>
                    <Text style={styles.currentDay}>Today, <Text style={styles.currentDay}>+2HRS</Text></Text>
                    <Text style={styles.city}>Istanbul</Text>
                </View>
                <View style={styles.right}>
                    <Text style={styles.time}>5:27<Text style={styles.pm}>PM</Text></Text>
                </View>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create ({
    container: {
        backgroundColor: '#000000',
    },
    box: {
        width: '100%',
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        borderTopWidth: 1,
        borderTopColor: 'grey',
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
    },
    left: {

    },
    right: {

    },
    currentDay: {
        color: 'grey',
        fontSize: 14,
    },
    city: {
        color: '#fff',
        fontSize: 26,
    },
    time: {
        color: '#fff',
        fontSize: 40,
        fontWeight: '300',
    },
    pm: {
        color: '#fff',
        fontSize: 24,
    },
})

export default WorldClock
