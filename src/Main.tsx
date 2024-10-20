import React from "react";
import { useState } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from "react-native";

import Clipboard from '@react-native-clipboard/clipboard';
import InputBox from "./components/InputBox";
import FormCheckBox from "./components/FormCheckBox";
import Output from "./components/Output";
import Btn from "./components/Btn";
import {
    generatePasswordString,
    PasswordRequirement
} from "./utility/passwordGenerator";

import {
    showErrorSnackbar,
    showSuccessSnackBar,
    showInfoSnackBar
} from "./utility/utils";

const Main = (): React.JSX.Element => {
    const [passwordLength, setPasswordLength] = useState<string>('');
    const [passwordRequirements, setPasswordRequirements] = useState<PasswordRequirement>({
        length: 0,
        includeUpper: false,
        includeLower: false,
        includeNumber: false,
        includeSymbol: false,
    });
    const [generatedPassword, setGeneratedPassword] = useState<string>('');

    const handleGeneratePassword = () => {
        const length = parseInt(passwordLength);
        const hasSelection = passwordRequirements.includeUpper || 
                             passwordRequirements.includeLower || 
                             passwordRequirements.includeNumber || 
                             passwordRequirements.includeSymbol;

        if (!passwordLength || isNaN(length)) {
            showErrorSnackbar("Invalid Length Value"); // No input or invalid input
            return;
        }

        if (length < 8 || length > 16) {
            showErrorSnackbar("Invalid length value"); // Length not in range
            return;
        }

        if (!hasSelection) {
            showErrorSnackbar("Make a Selection"); // No checkboxes selected
            return;
        }

        const newPassword = generatePasswordString({  
            length,
            includeUpper: passwordRequirements.includeUpper,
            includeLower: passwordRequirements.includeLower,
            includeNumber: passwordRequirements.includeNumber,
            includeSymbol: passwordRequirements.includeSymbol,
        });
        setGeneratedPassword(newPassword);
    };

    const handleCopy = (password: string) => {
        if (password) {
            Clipboard.setString(password);
            showSuccessSnackBar("Password Copied!");
        } else {
            showErrorSnackbar("No password to copy.");
        }
    };

    const handleReset = () => {
        setPasswordLength('');
        setPasswordRequirements({
            length: 0,
            includeUpper: false,
            includeLower: false,
            includeNumber: false,
            includeSymbol: false,
        });
        setGeneratedPassword('');
        showInfoSnackBar("Cleared");
    };

    const handleCheckboxChange = (key: keyof PasswordRequirement) => {
        setPasswordRequirements(prev => ({
            ...prev,
            [key]: !prev[key]
        }));
    };

    return (
        <ScrollView contentContainerStyle={styles.container}>
            <Text style={styles.header}>Password Generator</Text>
            <InputBox passwordLength={passwordLength} setPasswordLength={setPasswordLength} />
            <View style={styles.checkboxContainer}>
                <FormCheckBox 
                    id="U_Checkbox" 
                    label="Upper Case Letter" 
                    checked={passwordRequirements.includeUpper} 
                    onChange={() => handleCheckboxChange('includeUpper')} 
                    checkboxColor="#4F75FF"
                    labelColor="#686D76"
                />
                <FormCheckBox 
                    id="L_Checkbox" 
                    label="Lower Case Letter" 
                    checked={passwordRequirements.includeLower} 
                    onChange={() => handleCheckboxChange('includeLower')} 
                    checkboxColor="#FF9D3D"
                    labelColor="#686D76"
                />
                <FormCheckBox 
                    id="S_Checkbox" 
                    label="Special Character" 
                    checked={passwordRequirements.includeSymbol} 
                    onChange={() => handleCheckboxChange('includeSymbol')} 
                    checkboxColor="#8E44AD"
                    labelColor="#686D76"
                />
                <FormCheckBox 
                    id="N_Checkbox" 
                    label="Numbers" 
                    checked={passwordRequirements.includeNumber} 
                    onChange={() => handleCheckboxChange('includeNumber')} 
                    checkboxColor="#FFB800"
                    labelColor="#686D76"
                />
            </View>
            <Output generatedPassword={generatedPassword} placeholder="Generated Password" handleCopy={handleCopy} />
            <View style={styles.buttonContainer}>
                <Btn type={1} title="Generate Password" onPress={handleGeneratePassword} />
            </View>
            <View style={styles.buttonContainer}>
                <Btn type={2} title="Reset" onPress={handleReset} />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft: 20,
        
        
    },


    header: {
        fontSize: 35,
        fontWeight: 'bold',
        color: '#000',
        marginTop: -200,
        marginBottom: 20,
        textAlign: 'center',
    },


    checkboxContainer: {
        width: '100%',
        alignItems: 'flex-start',
        paddingLeft: 20,
        justifyContent: 'space-between',
    },


    buttonContainer: {
        width: '100%',
        alignItems: 'center',
        marginTop: 20,
    },
});

export default Main;
