import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, Platform, StyleSheet, } from 'react-native';

import CountryPicker from 'react-native-country-picker-modal';
import { colors } from '../themes';



const CountryPickerModal = () => {
    const defaultPhoneNumber = '1234567890';
    const [phone, setPhone] = useState('');
    const [countryCode, setCountryCode] = useState('US');
    const [callingCode, setCallingCode] = useState('1');
    const [buttonDisabled, setButtonDisabled] = useState(true);
    const [isPickerVisible, setPickerVisible] = useState(false);

    const handlePhoneChange = (value: string) => {
        setPhone(value);
        setButtonDisabled(value.length < 10);
    };


    return (
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.container}
            >

                <View style={styles.form}>
                    <TouchableOpacity onPress={() => setPickerVisible(true)}>
                        <View style={styles.flagView}>
                            <CountryPicker
                                withFlag
                                withCallingCode
                                withFilter
                                withCountryNameButton={false}
                                countryCode={countryCode}
                                visible={isPickerVisible}
                                onSelect={(country) => {
                                    setCountryCode(country.cca2);
                                    setCallingCode(country.callingCode[0]);
                                    setPickerVisible(false);
                                }}
                                onClose={() => setPickerVisible(false)}
                            />

                            <Image
                                source={{ uri: `https://flagcdn.com/w320/${countryCode.toLowerCase()}.png` }}
                                style={styles.flagImage}
                            />
                        </View>
                    </TouchableOpacity>
                    <View style={styles.phoneInput}>
                        <Text style={{ top: 15 }}>+{callingCode}</Text>
                        <TextInput
                            value={phone}
                            onChangeText={handlePhoneChange}
                            placeholder="Phone Number"
                            style={styles.inputPhone}
                            keyboardType="phone-pad"

                        />
                        <TouchableOpacity style={styles.textContainer}>
                            <Text style={styles.verifyText}>Change</Text>
                        </TouchableOpacity>
                    </View>
                </View>

            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

export default CountryPickerModal;

const styles = StyleSheet.create({
    container: {

    },
    backButton: {
        margin: 16,
    },
    Icon: {
        alignSelf: 'center',
    },
    loginButtonEnabled: {
        backgroundColor: '#007BFF',
    },
    loginButtonDisabled: {
        backgroundColor: '#B0B0B0',
    },
    verifyText: {
        color: colors.pink,
        fontSize: 16,


    },
    input: {
        flexDirection: 'row'
    },
    backIcon: {
        width: 20,
        height: 20,
        alignSelf: 'center'
    },
    contentContainer: {
        flex: 1,
        paddingHorizontal: 16,
    },
    formContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    phoneInput: {
        flex: 3,
        margin: 5,
        flexDirection: 'row',
        borderRadius: 10,
        borderWidth: 1,

        backgroundColor: "#ffffff",

        borderColor: '#E7EBF3'
    },
    backBox: {
        backgroundColor: "#FFFFFF",
        width: 50,
        margin: 10,
        borderRadius: 10
    },
    header: {
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    subHeaderText: {
        fontSize: 16,
        color: '#666',
        marginTop: 10
    },
    form: {

        flexDirection: 'row',

    },
    buttonContainer: {
        paddingHorizontal: 16,
        paddingBottom: 20,
    },
    loginButton: {
        height: 50,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: '#007BFF',
    },

    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: 'bold'
    },
    phonebox: {
        marginLeft: 10,
    },
    inputPhone: {
        fontSize: 14,
        left: 10
    },
    flagView:
    {
        flex: 0.5,
        alignItems: 'center',
        justifyContent: 'center',
        width: 60,
        height: 80,
        backgroundColor: "#ffffff",
        borderRadius: 8,
        marginTop: 6,
        padding: 26,
        borderWidth: 1,
        borderColor: '#E7EBF3'

    },
    countryPicker: {
        color: 'black',
        fontSize: 14,
        fontWeight: 'bold',
        width: 40,
        height: 40
    },
    errorMessage: {
        color: 'red',
        fontSize: 14,
        marginBottom: 10,
    },
    flagImage: {
        width: 40,
        height: 60,
        resizeMode: 'center',
        marginRight: 1,

    },
    textContainer: {
        position: 'absolute',
        right: 20,

        transform: [{ translateY: 10 }],
        paddingLeft: 10,
    }

})