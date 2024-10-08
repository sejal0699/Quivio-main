import React, { useState } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import styles from './styles';
import CustomTextInput from '../../components/CustomTextInput';
import Toast from 'react-native-toast-message';
import { useNavigation } from '@react-navigation/native';


import CustomToast from '../../components/CustomToast';

import CustomModal from '../../components/CustomModal';
import { ScreenNames } from '../../navigation/screenNames';
import { Icons, Images } from '../../assets';

const ResetPasswordScreen = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigation = useNavigation();
  const checkPassword = () => {
    return {
      length: password.length >= 8,
      specialChar: /[^A-Za-z0-9]/.test(password),
      number: /\d/.test(password),
      upperLower: /(?=.*[a-z])(?=.*[A-Z])/.test(password),
    };
  };

  const passwordCriteria = checkPassword();

  const handlePasswordChange = (value: string) => {
    setPassword(value);
    setIsTyping(value.length > 0 || confirmPassword.length > 0);
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    setIsTyping(value.length > 0 || password.length > 0);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const toggleConfirmPasswordVisibility = () => {
    setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
  };

  const isButtonDisabled = !isTyping;

  const handleSubmit = () => {
    if (password !== confirmPassword) {
      Toast.show({
        type: 'custom_error',
        text1: 'Your password doesn’t match',
      });

    } else {
      setIsModalVisible(true);
    }
  };

  const handleCloseModal = () => {

    setIsModalVisible(false);
    navigation.navigate(ScreenNames.Login);
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.headerContainer}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View>
              <Image source={Images.color} style={styles.eyeIcon} />
            </View>
            <View>
              <Image source={Images.backDrop} style={styles.backdropIcon} />
            </View>
          </View>

        </View>
        <Text style={styles.header}>Reset Password</Text>
        <Text style={styles.subHeader}>Enter in your new password.</Text>

        <View style={styles.inputContainer}>
          {/* <Text style={styles.label}>New Password</Text> */}
          <CustomTextInput
            value={password}
            onChangeText={handlePasswordChange}
            placeholder="New Password"
            iconSource={Icons.lockIcon}
            secureTextEntry={!isPasswordVisible}
            rightIconSource={Icons.eyeIcon}
            onRightIconPress={togglePasswordVisibility}
          />

          {isTyping && (
            <View style={styles.criteriaContainer}>
              <View style={styles.criteriaItem}>
                <Image source={passwordCriteria.length ? Icons.tick : Icons.cross} style={styles.criteriaIcon} />
                <Text style={passwordCriteria.length ? styles.valid : styles.invalid}>8 characters or above</Text>
              </View>
              <View style={styles.criteriaItem}>
                <Image source={passwordCriteria.specialChar ? Icons.tick : Icons.cross} style={styles.criteriaIcon} />
                <Text style={passwordCriteria.specialChar ? styles.valid : styles.invalid}>1 or more special characters</Text>
              </View>
              <View style={styles.criteriaItem}>
                <Image source={passwordCriteria.number ? Icons.tick : Icons.cross} style={styles.criteriaIcon} />
                <Text style={passwordCriteria.number ? styles.valid : styles.invalid}>1 or more numbers</Text>
              </View>
              <View style={styles.criteriaItem}>
                <Image source={passwordCriteria.upperLower ? Icons.tick : Icons.cross} style={styles.criteriaIcon} />
                <Text style={passwordCriteria.upperLower ? styles.valid : styles.invalid}>Upper and lowercase</Text>
              </View>
            </View>
          )}
        </View>

        <View style={styles.inputContainer}>
          {/* <Text style={styles.label}>Confirm Password</Text> */}
          <CustomTextInput
            value={confirmPassword}
            onChangeText={handleConfirmPasswordChange}
            placeholder="Confirm Password"
            iconSource={Icons.lockIcon}
            secureTextEntry={!isConfirmPasswordVisible}
            rightIconSource={Icons.eyeIcon}
            onRightIconPress={toggleConfirmPasswordVisibility}
          />
        </View>
      </ScrollView>

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          style={[styles.button, isButtonDisabled ? styles.buttonDisabled : styles.buttonEnabled]}
          disabled={isButtonDisabled}
          onPress={handleSubmit}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>

      <CustomModal
        visible={isModalVisible}
        title="Password Updated!"
        description="  Your new password has been updated successfully."
        imageSource={Icons.keyIcon}
        buttonText="Back to Login"
        closeModal={handleCloseModal}

      />
      <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} />
    </View>
  );
};

export default ResetPasswordScreen;
