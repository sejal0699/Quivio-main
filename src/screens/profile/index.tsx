import * as permissions from 'react-native-permissions';
import { request, PERMISSIONS } from 'react-native-permissions';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from '../../components/CustomTextInput';
import { Icons, Images } from '../../assets';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import { ImageLibraryOptions, launchCamera, launchImageLibrary } from 'react-native-image-picker';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import CountryPickerModal from '../../components/CountryPickerModal';
import GalleryModal from '../../components/GalleryModal';

interface Asset {
  fileName: string;
  fileSize: number;
  height: number;
  type: string;
  uri: string;
  width: number;
}

interface ResponseType {
  didCancel?: boolean;
  error?: string;
  assets?: Asset[]; 
}



const EditProfileScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [name, setName] = useState('');
  const [birthday, setBirthday] = useState('');
  const [gender, setGender] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [profileImage, setProfileImage] = useState('');
  const [genderDropdownVisible, setGenderDropdownVisible] = useState(false);
  const navigation = useNavigation();

  const handleGenderSelect = (selectedGender:string) => {
    setGender(selectedGender);
    setGenderDropdownVisible(false);
  };

  const genderOptions = [
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'None', value: 'none' },
  ];

  const requestPermission = async (permissionType:any) => {
    console.log(requestPermission , permissionType);
    try {
      const result = await request(permissionType);
      return result === 'granted';
    } catch (error) {
      console.error('Permission request error:', error);
      return false;
    }
  };

  const handleImagePick = async (source:string) => {
    let permissionType;
    if (source === 'gallery') {
      permissionType = PERMISSIONS.ANDROID.READ_EXTERNAL_STORAGE; 
    } else if (source === 'camera') {
      permissionType = PERMISSIONS.ANDROID.CAMERA; 
    } else {
      console.warn('Invalid source selected!');
      return;
    }
  
    const hasPermission = await requestPermission(permissionType);
    // if (!hasPermission) {
    //   console.warn('Permission not granted!');
    //   return;
    // }
  
    const options :ImageLibraryOptions= {
      mediaType: 'photo',
      includeBase64: false,
    };
  
    const callback = (response:ResponseType) => {
      console.log(response);
      
      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.error('ImagePicker Error: ', response.error);
      } else if (response.assets && response.assets.length > 0) {
        const selectedImage = response.assets[0];
        setProfileImage(selectedImage.uri);
        setModalVisible(false);
      } else {
        console.error('No valid assets found in the response');
      }
    };
  
    if (source === 'gallery') {
      launchImageLibrary(options, callback);
    } else {
      launchCamera(options, callback);
    }
  };
  

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date:Date) => {
    const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
    setBirthday(formattedDate);
    hideDatePicker();
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
          <View style={styles.backBox}>
            <Text style={{ left: 10 }}>{'<'}</Text>
          </View>
        </TouchableOpacity>
        <Text style={styles.headerText}>Edit Profile</Text>
      </View>

      <View style={styles.profileSection}>
        <View style={styles.profilePictureContainer}>
          <Image
            source={profileImage ? { uri: profileImage } : Images.profilePic}
            style={styles.profilePicture}
          />
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.changePhotoText1}>Profile Picture</Text>
          <Text style={styles.changePhotoText}>Change Photo</Text>
        </TouchableOpacity>
      </View>

      <CustomTextInput value={name} onChangeText={setName} placeholder="Name" />
      <CustomTextInput value={username} onChangeText={setUsername} placeholder="Username" />
      <CustomTextInput
        value={birthday}
        onChangeText={setBirthday}
        placeholder="Birthday (DD/MM/YYYY)"
        rightIconSource={Icons.calender}
        onRightIconPress={() => setDatePickerVisibility(true)}
      />

      <View>
        <TouchableOpacity style={styles.dropdownContainer} onPress={() => setGenderDropdownVisible(!genderDropdownVisible)}>
        <CustomTextInput
            value={gender}
            placeholder="Gender" 
          />
          <Image source={Icons.dropdown} style={styles.dropdownIcon} />
        </TouchableOpacity>

        {genderDropdownVisible && (
          <FlatList
            data={genderOptions}
            keyExtractor={(item) => item.value}
            renderItem={({ item }) => (
              <TouchableOpacity onPress={() => handleGenderSelect(item.value)}>
                <Text style={styles.modalOptionText}>{item.label}</Text>
              </TouchableOpacity>
            )}
            style={styles.dropdownList}
          />
        )}
      </View>

      <CountryPickerModal />

      <CustomTextInput
        value={email}
        onChangeText={setEmail}
        placeholder="Email Address"
        rightIconText="Verify"
      />

      <TouchableOpacity style={styles.updateButton}>
        <Text style={styles.updateButtonText}>Update</Text>
      </TouchableOpacity>

      <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display={'inline'}
      />

      <GalleryModal
        visible={modalVisible}
        closeModal={() => setModalVisible(false)}
        onImagePick={handleImagePick}
      />
    </SafeAreaView>
  );
};

export default EditProfileScreen;
