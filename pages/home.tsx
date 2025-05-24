import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import StyledButtonView from '@/components/styled_button'
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '@/App'

type NavigationProp = StackNavigationProp<RootStackParamList, 'Calculator'>;

export default function App() {
    const navigation = useNavigation<NavigationProp>();

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Select the answer you want to see:</Text>

            <View style={styles.column}>
                <StyledButtonView onTap={() => { navigation.navigate('Calculator') }} title='Calculator' />
                <StyledButtonView onTap={() => { navigation.navigate('Navbar') }} title='Navbar' />
                <StyledButtonView onTap={() => { navigation.navigate('TwoSumUI') }} title='TwoSumUI' />
            </View>
            <StatusBar style="auto" />
        </View>
    );

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: { fontSize: 16, fontWeight: '600' },
    column: { flexDirection: 'column', gap: 10, marginTop: 20 },
});