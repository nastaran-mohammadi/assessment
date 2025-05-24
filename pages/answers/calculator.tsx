import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
    StyleSheet,
    Keyboard,
    TouchableWithoutFeedback,
    TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import StyledButtonView from '@/components/styled_button';

const CalculatorScreen = () => {
    const [firstNumber, setFirstNumber] = useState('');
    const [secondNumber, setSecondNumber] = useState('');
    const [total, setTotal] = useState<number | null>(null);
    const navigation = useNavigation();

    const handleAddition = () => {
        const num1 = parseFloat(firstNumber);
        const num2 = parseFloat(secondNumber);

        if (!isNaN(num1) && !isNaN(num2)) {
            setTotal(num1 + num2);
        } else {
            setTotal(null);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {/* Header */}
                <View style={styles.row}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
                        <Ionicons name="arrow-back" size={28} color="black" />
                    </TouchableOpacity>
                    <Text style={styles.heading}>Adding Two Numbers</Text>
                </View>

                {/* Inputs */}
                <TextInput
                    style={styles.input}
                    placeholder="First Number"
                    keyboardType="numeric"
                    value={firstNumber}
                    onChangeText={(text) => {
                        const numericText = text.replace(/[^0-9.]/g, '');
                        setFirstNumber(numericText);
                    }}
                />

                <TextInput
                    style={styles.input}
                    placeholder="Second Number"
                    keyboardType="numeric"
                    value={secondNumber}
                    onChangeText={(text) => {
                        const numericText = text.replace(/[^0-9.]/g, '');
                        setSecondNumber(numericText);
                    }}
                />

                {/* Add Button */}
                <StyledButtonView title="Add Two Numbers" onTap={handleAddition} />

                {/* Result */}
                <Text style={styles.total}>Total: {total !== null ? total : '—'}</Text>
            </View>
        </TouchableWithoutFeedback>
    );
};

export default CalculatorScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        paddingTop: 60,
        backgroundColor: '#fff',
        alignItems: 'center'
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
    input: {
        height: 50,
        borderColor: '#ccc',
        borderWidth: 1,
        marginBottom: 15,
        paddingHorizontal: 10,
        fontSize: 18,
        borderRadius: 8,
        minWidth: 250,
        alignSelf: 'center',
    },
    total: {
        fontSize: 22,
        fontWeight: '600',
        marginTop: 20,
        textAlign: 'center',
    },
});
