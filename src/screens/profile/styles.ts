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
        paddingTop: 50

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
        width: 140,
        height: 140,
        borderRadius: 90,
        resizeMode: 'cover',
        backgroundColor: colors.skyblue,

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
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20,
        width: '80%',
        alignSelf: 'center'

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
        width: 10,
        height: 10,
        position: 'absolute',
        right: 20,
        top: 30,
    },
    dropdownList: {
        position: 'absolute',
        backgroundColor: 'white',
        elevation: 3,
        width: '100%',
        zIndex: 1,
        top: 10

    },
    modalOptionText: {
        fontSize: 16,
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ddd',
    },
    backBox: {
        backgroundColor: colors.gray,
        width: 50,
        margin: 10,
        borderRadius: 10,
        padding: 12,
        right: 10
    },
    backIcon: {
        width: 22,
        height: 22,
        alignSelf: 'center'
    },

})