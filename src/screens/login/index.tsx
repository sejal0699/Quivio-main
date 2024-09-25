import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import BackgroundImage from '../../components/BackgroundImage';
import CustomTextInput from '../../components/CustomTextInput';
import AccountLockedModal from '../../components/AccountLockedModal';
import styles from './styles';
import Toast from 'react-native-toast-message';
import { NavigationContext } from '@react-navigation/native';
import CustomToast from '../../components/CustomToast';

interface NavigationProps{
  
}

interface Errors {
  email?: string;
  password?: string;
}


interface Props{
  email: string,
      password: string,
      errors: Errors,
      isModalVisible: boolean,
      isPasswordVisible: boolean,
      
}

interface States{
  email: string,
      password: string,
      errors: Errors,
      isModalVisible: boolean,
      isPasswordVisible: boolean,
}

class LoginScreen extends Component<Props,States> {
  static contextType = NavigationContext;

  constructor(props:Props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      errors: {},
      isModalVisible: false,
      isPasswordVisible: false,
    };
  }

  handleEmailChange = (email:string) => {
    this.setState({ email }, this.validateInputs);
  };

  handlePasswordChange = (password:string) => {
    this.setState({ password }, this.validateInputs);
  };

  validateInputs = () => {
    const { email, password } = this.state;
    const errors :Errors= {};

    if (!email.trim()) {
      errors.email = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      errors.email = 'Invalid email address entered.';
    }
    if (!password) {
      errors.password = 'Password is required';
    }

    this.setState({ errors });
  };

  handleLogin = () => {
    const { email, password } = this.state;
    const validEmail = 'Test@gmail.com';
    const validPassword = '123456';

    if (email !== validEmail || password !== validPassword) {
      Toast.show({
          type: 'custom_error',
        text1: 'Email not found. Contact admin.',
        position: 'top',
      });
      return;
    }

    Toast.show({
      type: 'success',
      text1: 'Login successful!',
    });
  };

  handleHelp = () => {
    this.setState({ isModalVisible: true });
  };

  closeModal = () => {
    this.setState({ isModalVisible: false });
    const navigation = this.context;
    navigation.navigate('drawerStack');
  };

  isButtonDisabled = () => {
    const { email, password, errors } = this.state;
    return Object.keys(errors).length > 0 || !email || !password;
  };

  handleClickPassword = () => {
    const navigation = this.context;
    navigation.navigate('forgetPassword');
    // navigation.navigate('tutorial')
  };

  togglePasswordVisibility = () => {
    this.setState(prevState => ({ isPasswordVisible: !prevState.isPasswordVisible }));
  };

  handlePress = () => {
    const { email, password } = this.state;
    const validEmail = 'Test@gmail.com';
    const validPassword = '123456';

    if (email !== validEmail || password !== validPassword) {
      this.handleLogin();
    } else {
      this.handleHelp();
    }
  };

  handlePassword=()=>{
    const navigation = this.context;
    navigation.navigate('reset');
  }

  render() {
    const { email, password, errors, isModalVisible, isPasswordVisible } = this.state;
    const buttonDisabled = this.isButtonDisabled();

    return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
       <BackgroundImage>
          <View style={styles.loginBox}>
            <Text style={styles.title}>Sign in</Text>
            <Text style={styles.subtitle}>with your valid credentials</Text>

            <CustomTextInput 
              value={email} 
              onChangeText={this.handleEmailChange} 
              placeholder="Email Address" 
              iconSource={require('../../assets/images/email.png')} 
              error={errors.email}
             
            />
              <View style={{top:10}}>

             
            <CustomTextInput 
              value={password} 
              onChangeText={this.handlePasswordChange} 
              placeholder="Password" 
              iconSource={require('../../assets/images/lock.png')} 
              error={errors.password}
              secureTextEntry={!isPasswordVisible}
              rightIconSource={require('../../assets/images/eye.png')} 
              onRightIconPress={this.togglePasswordVisibility} 
            />
             </View>

            <TouchableOpacity onPress={this.handleClickPassword}>
              <Text style={styles.forgotPassword}>Forgot Password</Text>
            </TouchableOpacity>

            {/* <TouchableOpacity onPress={this.handlePassword}>
              <Text style={styles.forgotPassword}>Reset Password</Text>
            </TouchableOpacity> */}

            <TouchableOpacity
              style={[styles.loginButton, buttonDisabled ? styles.loginButtonDisabled : styles.loginButtonEnabled]}
              onPress={this.handlePress}
              disabled={buttonDisabled}
            >
              <Text style={styles.loginButtonText}>Primary</Text>
            </TouchableOpacity>
          </View>
        </BackgroundImage>

        <AccountLockedModal
          visible={isModalVisible}
          closeModal={this.closeModal}
        />

      <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} />
      </KeyboardAvoidingView>
    );
  }
}

export default LoginScreen;
