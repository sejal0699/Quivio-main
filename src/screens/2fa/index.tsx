import React, { useState } from 'react';
import { View, Text, SafeAreaView, TouchableOpacity, KeyboardAvoidingView, TextInput, Image, Platform, } from 'react-native';
import styles from './styles';
import CountryPicker from 'react-native-country-picker-modal';
import Toast from 'react-native-toast-message';
import CustomToast from '../../components/CustomToast';
import { ScreenNames } from '../../navigation/screenNames';
import { Icons, Images } from '../../assets';

interface NavigationProps {
  navigation: any
}

const FactorAuth = ({ navigation }: NavigationProps) => {
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

  const handlePress = () => {
    if (phone === defaultPhoneNumber) {
      Toast.show({
        type: 'custom_error',
        text1: 'User exists. Try a different number.',
      });
    } else {
      navigation.navigate(ScreenNames.Verify);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <View style={styles.backBox}>
          <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
            <Image source={Icons.backArrow} style={styles.backIcon} />
          </TouchableOpacity>
        </View>
        <View style={styles.contentContainer}>
          <View style={styles.formContainer}>
            <View style={styles.header}>
              <Text style={styles.headerText}>Add Phone Number</Text>
              <Text style={styles.subHeaderText}>
                To initiate the two-factor authentication, provide your phone number below.
              </Text>
            </View>
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
                <Text>+{callingCode}</Text>
                <TextInput
                  value={phone}
                  onChangeText={handlePhoneChange}
                  placeholder="Phone Number"
                  style={styles.inputPhone}
                  keyboardType="phone-pad"
                />
              </View>
            </View>
          </View>
          <View style={{ flex: 1 }} />
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[
              styles.loginButton,
              buttonDisabled ? styles.loginButtonDisabled : styles.loginButtonEnabled,
            ]}
            onPress={handlePress}
            disabled={buttonDisabled}
          >
            <Text style={styles.buttonText}>Send Code</Text>
          </TouchableOpacity>
        </View>
        <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default FactorAuth;