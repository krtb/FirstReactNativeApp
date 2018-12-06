import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({
    container: {
        alignItems: 'center',
    },
    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    icon: {
        width: 19,
        marginRight: 11,
    },
    text: {
        color: '$white',
        fontSize: 14, 
        fontWeight: '300',
        paddingVertical: 20,
    }
});


// would try to avoid setting styles to
// touchable elements, inconsistent
// the way that they work