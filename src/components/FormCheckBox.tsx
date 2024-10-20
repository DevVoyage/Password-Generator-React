import React from "react";
import {
    View,
    Text,
    StyleSheet
} from "react-native";

import BouncyCheckbox from "react-native-bouncy-checkbox";

type FormCheckBoxProps = {
    id: string;
    label: string;
    checked: boolean;
    onChange: () => void;
    checkboxColor?: string;
    labelColor?: string;
};

const FormCheckBox: React.FC<FormCheckBoxProps> = ({ id, label, checked, onChange, checkboxColor = "#000", }) => {
    return (
        <View style={styles.container}>
            <BouncyCheckbox
                isChecked={checked}
                onPress={onChange}
                fillColor={checkboxColor}
                unFillColor="#FFFFFF"
                iconStyle={{ borderColor: checkboxColor }}
                textStyle={styles.label}
                useBuiltInState={false}
            />
            <Text style={[styles.label, {}]}>{label}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flexDirection: "column",
        alignItems: "flex-start",
        marginVertical: 10,
        width: '100%',
    },
    label: {
        fontSize: 24,
        marginLeft: 40,
        lineHeight: 25,
        marginTop: -25,
        fontWeight: 'bold',
    }
});

export default FormCheckBox;
