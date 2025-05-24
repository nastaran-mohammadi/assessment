import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { twoSum } from '@/pages/answers/question3';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const generateRandomSortedArrayWithSolution = (
    length: number,
    minVal: number,
    maxVal: number
): { numbers: number[]; target: number } => {
    // Generate sorted random array
    let arr = Array.from({ length }, () =>
        Math.floor(Math.random() * (maxVal - minVal + 1)) + minVal
    );
    arr.sort((a, b) => a - b);

    // Pick two different indices for solution
    const i = Math.floor(Math.random() * (length - 1));
    const j = Math.floor(Math.random() * (length - i - 1)) + i + 1;

    const target = arr[i] + arr[j];

    return { numbers: arr, target };
};

const TwoSumUI = () => {
    const navigation = useNavigation();

    const [numbers, setNumbers] = useState<number[]>([]);
    const [target, setTarget] = useState(0);
    const [result, setResult] = useState<number[]>([]);

    const generateInput = () => {
        const { numbers, target } = generateRandomSortedArrayWithSolution(10, 1, 50);
        setNumbers(numbers);
        setTarget(target);
        setResult(twoSum(numbers, target));
    };

    // Generate input on mount
    useEffect(() => {
        generateInput();
    }, []);

    return (
        <View style={styles.container}>

            <View style={styles.row}>
                <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                    <Ionicons name="arrow-back" size={28} color="black" />
                </TouchableOpacity>
                <Text style={styles.heading}>Adding Two Numbers</Text>
            </View>

            <Text style={styles.title}>Two Sum II - Sorted Array</Text>
            <Text style={styles.text}>Input: {JSON.stringify(numbers)}</Text>
            <Text style={styles.text}>Target: {target}</Text>
            <Text style={styles.result}>Output: {JSON.stringify(result)}</Text>
        </View>
    );
};

export default TwoSumUI;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        padding: 20,
        backgroundColor: '#fff',
        paddingTop: 60,
    },
    title: {
        fontSize: 22,
        fontWeight: '600',
        marginBottom: 20,
        textAlign: 'center',
    },
    text: {
        fontSize: 18,
        marginBottom: 10,
    },
    result: {
        fontSize: 20,
        marginTop: 20,
        color: '#2e86de',
        fontWeight: 'bold',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 50,
        width: '100%'
    },
    backButton: {
        paddingRight: 10,
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});
