import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface StyledButtonInterface {
    onTap: () => void;
    title: string;
    width?: number;
}

const StyledButtonView: React.FC<StyledButtonInterface> = ({ onTap, title, width }) => {
    return <TouchableOpacity onPress={onTap}>
        <View style={[styles.buttonStyle, { width: width ?? 200 }]}>
            <Text style={styles.buttonTextStyle}>{title}</Text>
        </View>
    </TouchableOpacity>
}

const styles = StyleSheet.create({
    buttonStyle: {
        backgroundColor: 'black',
        height: 45,
        paddingHorizontal: 14,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10
    },
    buttonTextStyle: {
        color: 'white',
        fontSize: 16
    }
});

export default StyledButtonView