// TimerApp.tsx
import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import RNPickerSelect from 'react-native-picker-select';

const Timers: React.FC = () => {
    const [selectedHours, setSelectedHours] = useState('00');
    const [selectedMinutes, setSelectedMinutes] = useState('00');
    const [selectedSeconds, setSelectedSeconds] = useState('00');
    const [running, setRunning] = useState(false);
    const [remainingTime, setRemainingTime] = useState(0);
    const timerRef = useRef<NodeJS.Timeout | null>(null);

    const startStopTimer = () => {
        if (running) {
            if (timerRef.current) {
                clearInterval(timerRef.current);
            }
        } else {
            const totalSeconds = parseInt(selectedHours) * 3600 + parseInt(selectedMinutes) * 60 + parseInt(selectedSeconds);
            setRemainingTime(totalSeconds);

            timerRef.current = setInterval(() => {
                setRemainingTime((prevTime) => {
                    if (prevTime > 0) {
                        return prevTime - 1;
                    } else {
                        clearInterval(timerRef.current!);
                        setRunning(false);
                        return 0;
                    }
                });
            }, 1000);
        }

        setRunning(!running);
    };

    const resetTimer = () => {
        if (timerRef.current) {
            clearInterval(timerRef.current);
        }
        setRunning(false);
        setRemainingTime(0);
    };

    const formatTime = (seconds: number): string => {
        const hours = Math.floor(seconds / 3600);
        const minutes = Math.floor((seconds % 3600) / 60);
        const secs = seconds % 60;

        return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <View style={styles.container}>
            <View style={styles.timerContainer}>
                <Text style={styles.timerText}>{formatTime(remainingTime)}</Text>
            </View>
            <View style={styles.pickerContainer}>
                <RNPickerSelect
                    style={pickerSelectStyles}
                    onValueChange={(value) => setSelectedHours(value)}
                    items={generatePickerItems(24)}
                    value={selectedHours}
                />
                <Text style={styles.pickerSeparator}>:</Text>
                <RNPickerSelect
                    style={pickerSelectStyles}
                    onValueChange={(value) => setSelectedMinutes(value)}
                    items={generatePickerItems(60)}
                    value={selectedMinutes}
                />
                <Text style={styles.pickerSeparator}>:</Text>
                <RNPickerSelect
                    style={pickerSelectStyles}
                    onValueChange={(value) => setSelectedSeconds(value)}
                    items={generatePickerItems(60)}
                    value={selectedSeconds}
                />
            </View>
            <View style={styles.buttonContainer}>
                <TouchableOpacity onPress={resetTimer} style={styles.resetButton}>
                    <Text style={styles.resetButtonText}>Reset</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={startStopTimer} style={styles.startStopButton}>
                    <Text style={styles.startStopButtonText}>{running ? 'Stop' : 'Start'}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const generatePickerItems = (maxValue: number) => {
    const items = [];
    for (let i = 0; i <= maxValue; i++) {
        items.push({ label: i.toString().padStart(2, '0'), value: i.toString().padStart(2, '0') });
    }
    return items;
};

const pickerSelectStyles = {
    inputIOS: {
        fontSize: 16,
        paddingVertical: 12,
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: 'gray',
        borderRadius: 4,
        color: 'white',
        paddingRight: 30,
        marginBottom: 10,
    },
    inputAndroid: {
        fontSize: 16,
        paddingHorizontal: 10,
        paddingVertical: 8,
        borderWidth: 0.5,
        borderColor: 'purple',
        borderRadius: 8,
        color: 'white',
        paddingRight: 30,
        marginBottom: 10,
    },
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#000000',
    },
    timerContainer: {
        marginBottom: 20,
    },
    timerText: {
        fontSize: 80,
        color: '#fff',
        fontWeight: '200',
    },
    pickerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        color: '#fff',
    },
    pickerSeparator: {
        fontSize: 20,
        marginHorizontal: 5,
        color: '#fff',
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
    },
    startStopButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(48, 209, 88, 0.3)',
    },
    startStopButtonText: {
        color: '#30D158',
        fontSize: 18,
    },
    resetButton: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#48484A',
    },
    resetButtonText: {
        color: 'white',
        fontSize: 18,
    },
});

export default Timers;
