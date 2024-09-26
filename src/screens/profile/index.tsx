import * as permissions from 'react-native-permissions';
import { request, PERMISSIONS } from 'react-native-permissions';
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import CustomTextInput from '../../components/CustomTextInput';
import { Icons, Images } from '../../assets';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';
import SecureAccountModal from '../../components/SecureAccountModal';
import { colors } from '../../themes';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';
import CountryPickerModal from '../../components/CountryPickerModal';

const EditProfileScreen = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [name, setName] = useState('');
    const [error, setError] = useState(null);
    const [birthday, setBirthday] = useState('');
    const [gender, setGender] = useState('');
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [profileImage, setProfileImage] = useState(Images.profilePic);
    const [genderDropdownVisible, setGenderDropdownVisible] = useState(false);
    const navigation = useNavigation();
    console.log('Current profile image:', profileImage);

    const handleGenderSelect = (selectedGender) => {
        setGender(selectedGender);
        setGenderDropdownVisible(false);
    };
    const genderOptions = [
        { label: 'Male', value: 'male' },
        { label: 'Female', value: 'female' },
        { label: 'None', value: 'none' },
    ];

    const requestPermission = async (permissionType) => {
        console.log(permissionType);
        try {
            const result = await request(permissionType);
            return result === 'granted';
        } catch (error) {
            console.error("Permission request error:", error);
            return false;
        }
    };


    const handleImagePick = async (source) => {
        let hasPermission;
        if (source === 'gallery') {
            hasPermission = await requestPermission(PERMISSIONS.IOS.PHOTO_LIBRARY);
        } else if (source === 'camera') {
            hasPermission = await requestPermission(PERMISSIONS.IOS.CAMERA);
        } else {
            console.warn("Invalid source selected!");
            return;
        }

        // if (!hasPermission) {
        //     console.warn("Permission not granted!");
        //     return;
        // }

        const options = {
            mediaType: 'photo',
            includeBase64: false,
        };

        const callback = (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.error('ImagePicker Error: ', response.error);
            } else if (!response.assets || response.assets.length === 0) {
                console.error('No assets found in the response');
            } else {
                const selectedImage = response.assets[0];
                setProfileImage(selectedImage.uri);
                setModalVisible(false);
            }
            setModalVisible(false);
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

    const handleConfirm = (date) => {
        const formattedDate = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`;
        setBirthday(formattedDate);
        setDatePickerVisibility(false);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Text>{'<'}</Text>
                </TouchableOpacity>
                <Text style={styles.headerText}>Edit Profile</Text>
            </View>

            <View style={styles.profileSection}>
                <View style={styles.profilePictureContainer}>
                    <Image
                        source={{ uri: profileImage.toString() }}
                        style={styles.profilePicture}
                    />
                </View>
                <TouchableOpacity onPress={() => setModalVisible(true)}>
                    <Text style={styles.changePhotoText1}>Profile Picture</Text>
                    <Text style={styles.changePhotoText}>Change Photo</Text>
                </TouchableOpacity>
            </View>


            <CustomTextInput
                value={name}
                onChangeText={setName}
                placeholder="Name"
                error={error}
            />

            <CustomTextInput
                value={username}
                onChangeText={setUsername}
                placeholder="Username"
                error={error}
            />

            <CustomTextInput
                value={birthday}
                onChangeText={setBirthday}
                placeholder="Birthday (DD/MM/YYYY)"
                rightIconSource={Icons.calender}
                onRightIconPress={() => setDatePickerVisibility(true)}
                error={error}
            />

            <View>
                <TouchableOpacity
                    style={styles.dropdownContainer}
                    onPress={() => setGenderDropdownVisible(!genderDropdownVisible)}
                >
                    <CustomTextInput
                        value={gender}
                        placeholder="Gender"
                        editable={false}
                        error={error}
                    />
                    <Image
                        source={Icons.dropdown}
                        style={styles.dropdownIcon}
                    />
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

            <View style={{ marginTop: 15 }}>
                <CustomTextInput
                    value={email}
                    onChangeText={setEmail}
                    placeholder="Email Address"
                    rightIconText="Verify"
                    error={error}
                />
            </View>

            <TouchableOpacity style={styles.updateButton}>
                <Text style={styles.updateButtonText}>Update</Text>
            </TouchableOpacity>


            <DateTimePickerModal
                isVisible={isDatePickerVisible}
                mode="date"
                onConfirm={handleConfirm}
                onCancel={hideDatePicker}
                display={"inline"}
            />


            <SecureAccountModal
                visible={modalVisible}
                closeModal={() => setModalVisible(false)}
                onImagePick={handleImagePick}
            />
        </SafeAreaView>
    );
};


export default EditProfileScreen;
