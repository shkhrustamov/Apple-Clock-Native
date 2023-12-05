// TimerApp.tsx
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { Button, Icon } from 'react-native-elements';

interface Lap {
    id: number;
    time: string;
}

const TimerApp: React.FC = () => {
    const [running, setRunning] = useState(false);
    const [time, setTime] = useState(0);
    const [laps, setLaps] = useState<Lap[]>([]);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const formatTime = (milliseconds: number): string => {
        const totalSeconds = Math.floor(milliseconds / 1000);
        const minutes = Math.floor(totalSeconds / 60);
        const seconds = totalSeconds % 60;
        const millisecondsFormatted = Math.floor((milliseconds % 1000) / 10)
            .toString()
            .padStart(2, '0');

        return `${minutes}:${seconds.toString().padStart(2, '0')}.${millisecondsFormatted}`;
    };

    const startStopTimer = () => {
        if (running) {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        } else {
            timerRef.current = setInterval(() => {
                setTime((prevTime) => prevTime + 100);
            }, 100);
        }

        setRunning(!running);
    };

    const resetTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        setTime(0);
        setRunning(false);
        setLaps([]);
    };

    const addLap = () => {
        setLaps((prevLaps) => [
            ...prevLaps,
            {
                id: prevLaps.length + 1,
                time: formatTime(time),
            },
        ]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{formatTime(time)}</Text>
            </View>
            <View style={styles.buttonContainer}>
                <Button
                    title={running ? 'Lap' : 'Reset'}
                    onPress={running ? addLap : resetTimer}
                    buttonStyle={styles.circleButton}
                    titleStyle={{ color: 'white' }}
                />
                <Button
                    title={running ? 'Stop' : 'Start'}
                    onPress={startStopTimer}
                    buttonStyle={[styles.circleButton, running ? styles.stopButton : styles.startButton]}
                    titleStyle={running ? styles.stopTitle : styles.startTitle}
                />
            </View>
            <ScrollView style={styles.lapContainer}>
                {laps.map((lap) => (
                    <View key={lap.id} style={styles.lapItem}>
                        <Text style={styles.lapText}>Lap {lap.id}</Text>
                        <Text style={styles.lapText}>{lap.time}</Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000'
    },
    timerContainer: {
        marginVertical: 60,
    },
    timerText: {
        fontSize: 80,
        color: '#fff',
        fontWeight: '200',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginBottom: 20,
        width: '100%',
    },
    circleButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48484A',
    },
    startButton: {
        backgroundColor: 'rgba(48, 209, 88, 0.3)',
    },
    stopButton: {
        backgroundColor: 'rgba(255, 69, 58, 0.3)',
    },
    startTitle: {
        color: '#30D158',
    },
    stopTitle: {
        color: '#FF453A',
    },
    lapContainer: {
        flex: 1,
        width: '100%',
    },
    lapItem: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#8E8E93',
    },
    lapText: {
        fontSize: 18,
        color: '#fff',
    },
});

export default TimerApp;
