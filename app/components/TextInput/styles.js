import EStyleSheet from 'react-native-extended-stylesheet';

const INPUT_HEIGHT = 40;
const BORDER_RADIUS = 4;

export default EStyleSheet.create({
    container: {
        backgroundColor: '$white',
        width: '90%',
        height: INPUT_HEIGHT,
        borderRadius: BORDER_RADIUS,
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 11,
    },
    buttonText: {

    },
    input: {

    },
    border: {

    },
});

    // using % for width instead of exact pixel
    // for sizing to be consistent across all screens

    // by default, 'flexDirection' is column in react, 
    // want it to be column for our purposes.