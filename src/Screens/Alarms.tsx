// import React from "react";
// import {Text} from "react-native";
//
// const Alarms = () => {
//     return (
//         <Text>Alarms</Text>
//     );
// }
//
// export default Alarms;
// Alarms.tsx
import React, { useState } from 'react';
import {View, Text, Switch, StyleSheet, ScrollView} from 'react-native';

interface AlarmsProps {}

const Alarms: React.FC<AlarmsProps> = () => {
    const [isSwitchOn, setSwitchOn] = useState(false);

    const toggleSwitch = () => {
        setSwitchOn(!isSwitchOn);
    };

    return (
        <View style={styles.container}>
            <View style={styles.scroll}>
                <View style={styles.clockContainer}>
                    <Text style={[styles.clockText, { color: isSwitchOn ? 'white' : 'grey' }]}>
                        12:34 <Text style={[styles.amPmText, { color: isSwitchOn ? 'white' : 'grey' }]}>
                        {isSwitchOn ? 'AM' : 'AM'}</Text>
                    </Text>
                </View>
                <View style={styles.switchContainer}>
                    <Switch value={isSwitchOn} onValueChange={toggleSwitch} />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    clockContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    clockText: {
        fontSize: 40,
        fontWeight: '200',
    },
    amPmText: {
        fontSize: 20,
        color: 'grey',
        fontWeight: '200',
    },
    switchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    scroll: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderTopWidth: 0.5,
        borderColor: 'grey',
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: '100%',
    },
});

export default Alarms;

