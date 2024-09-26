import { StyleSheet } from "react-native";
import { colors } from "../../themes";
export default StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        justifyContent: 'center',
        position: 'relative',
    },
    backButton: {
        position: 'absolute',
        left: 0,
    },
    headerText: {
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    profileSection: {
        alignItems: 'center',
        marginBottom: 20,
        flexDirection: 'row',
        paddingTop: 20

    },
    profilePictureContainer: {
        // width: 100,
        // height: 100,
        borderRadius: 70,
        backgroundColor: '#f0f0f0',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,

    },
    profilePicture: {
        width: 100,
        height: 100,
        borderRadius: 60,
        resizeMode: 'cover',
        backgroundColor: colors.skyblue
    },
    changePhotoText: {
        color: colors.pink,
        left: 20,
        paddingTop: 10
    },
    changePhotoText1: {
        color: colors.grey,
        left: 20
    },
    updateButton: {
        backgroundColor: colors.darkblue,
        padding: 15,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 20,

    },
    updateButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    dropdownContainer: {
        position: 'relative',
        marginTop: 10,

    },
    dropdownIcon: {
        width: 8,
        height: 8,
        position: 'absolute',
        right: 10,
        top: 30,
    },
    dropdownList: {
        position: 'absolute',
        backgroundColor: 'white',
        elevation: 3,
        width: '100%',
        zIndex: 1,

    },
    modalOptionText: {
        fontSize: 16,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },


})