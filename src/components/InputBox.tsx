import React from "react";
import { View, TextInput, StyleSheet } from "react-native";

type InputBoxProps = {
    passwordLength: string;
    setPasswordLength: (length: string) => void;
};

const InputBox: React.FC<InputBoxProps> = ({ passwordLength, setPasswordLength }) => {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                value={passwordLength}
                onChangeText={setPasswordLength}
                placeholder="Password Length (8-16)"
                keyboardType="numeric"
                maxLength={2} // Limit to 2 characters
                placeholderTextColor="#686D76"
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        alignItems: 'center',
        width: '100%',
    },

    input: {
        height: 60,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 10,
        paddingHorizontal: 10,
        width: '90%',
        fontSize: 18,
        textAlign: 'center',
    },
});

export default InputBox;
