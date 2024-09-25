import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image, KeyboardAvoidingView, Platform } from 'react-native';
import Toast from 'react-native-toast-message';
import CustomTextInput from '../../components/CustomTextInput';
import CustomToast from '../../components/CustomToast';
import styles from './styles';
import CustomModal from '../../components/CustomModal';

interface NavigationProps {

}

interface Props {
  email: string,
  isModalVisible: boolean,
  error: string,

}

interface States {
  email: string,
  isModalVisible: boolean,
  error: string,

}

class ForgotPasswordScreen extends Component<States, Props> {
  constructor(props: Props) {
    super(props);
    this.state = {
      email: '',
      isModalVisible: false,
      error: '',
    };
  }

  handleEmailChange = (email: string) => {
    this.setState({ email }, this.validateEmail);
  };

  validateEmail = () => {
    const { email } = this.state;
    let error = '';

    if (!email.trim()) {
      error = 'Email Address is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      error = 'Email Address is invalid';
    }

    this.setState({ error });
  };

  closeModal = () => {
    this.setState({ isModalVisible: false });
    this.props.navigation.navigate('reset');
  };

  handleHelp = () => {
    this.setState({ isModalVisible: true });

  };

  isButtonDisabled = () => {
    const { email, error } = this.state;
    return email.trim() === '' || error !== '';
  };

  handlePress = () => {
    const { email } = this.state;
    const validEmail = 'Test@gmail.com';

    if (email !== validEmail) {
      Toast.show({
        type: 'custom_error',
        text1: 'Email not found. Contact admin.',
      });
      return;
    }

    this.handleHelp();
  };

  render() {
    const { email, isModalVisible, error } = this.state;
    const buttonDisabled = this.isButtonDisabled();

    return (

      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          style={styles.container}
        >
          <View style={styles.imageContainer}>
            <View style={styles.backBox}>
              <TouchableOpacity style={styles.backButton} onPress={() => this.props.navigation.goBack()}
                hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
              >
                <Image source={require('../../assets/images/back.png')} style={styles.backIcon} />
              </TouchableOpacity>
            </View>

            <View>
              <Image source={require('../../assets/images/backdrop.png')} style={styles.backdropIcon} />
            </View>

          </View>

          <View style={styles.contentContainer}>
            <View style={styles.formContainer}>
              <View style={styles.header}>
                <Text style={styles.headerText}>Forgot Password</Text>
                <Text style={styles.subHeaderText}>Reset your password with just a few clicks</Text>
              </View>
              <View style={styles.form}>
                <CustomTextInput
                  value={email}
                  onChangeText={this.handleEmailChange}
                  placeholder="Email Address"
                  iconSource={require('../../assets/images/email.png')}
                  error={error}
                />
              </View>
            </View>
            <View style={{ flex: 1 }} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.loginButton, buttonDisabled ? styles.loginButtonDisabled : styles.loginButtonEnabled]}
              onPress={this.handlePress}
              disabled={buttonDisabled}
            >
              <Text style={styles.buttonText}>Send Link</Text>
            </TouchableOpacity>
          </View>

          <CustomModal
            visible={isModalVisible}
            title="Link Sent"
            description="The link to reset your password has been sent on your email address."
            imageSource={require('../../assets/images/link.png')}
            buttonText="Back to Login"
            closeModal={this.closeModal}

          />
          <Toast config={{ custom_error: ({ text1 }) => <CustomToast text1={text1} /> }} ref={(ref) => Toast.setRef(ref)} />

        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}



export default ForgotPasswordScreen;
