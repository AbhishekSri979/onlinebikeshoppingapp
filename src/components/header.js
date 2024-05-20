import { useNavigation } from '@react-navigation/native';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import LinearGradient from 'react-native-linear-gradient';


const Header = ({ title, leftIcon, righticon }) => {
    const navigation = useNavigation()
    return (
        <View style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '15%',
            paddingHorizontal: 20
        }}>
            {
                leftIcon &&
                <TouchableOpacity activeOpacity={.7} onPress={() => navigation.goBack()} style={styles.rectangleView}>
                    <LinearGradient
                        colors={['#34C8E8', '#4E4AF2']}
                        style={styles.linearGradient}
                    >
                        <Image source={leftIcon} resizeMode="contain" style={[styles.iconStyle]} />
                    </LinearGradient>
                </TouchableOpacity>

            }

            <Text style={{
                fontSize: 20,
                fontWeight: '700',
                lineHeight: 20,
                color: '#FFFFFF'
            }}>{title}</Text>
            {
                righticon ?
                    <View style={styles.rectangleView}>
                        <LinearGradient
                            colors={['#34C8E8', '#4E4AF2']}
                            style={styles.linearGradient}
                        >
                            <Image source={righticon} resizeMode="contain" style={[styles.iconStyle]} />
                        </LinearGradient>
                    </View>
                    :
                    <Text style={{
                        fontSize: 20,
                        fontWeight: '700',
                        lineHeight: 20,
                        color: '#FFFFFF',
                        opacity: 0
                    }}>{"title"}</Text>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        height: 20,
        width: 20,
    },
    rectangleView: {
        width: 44,
        height: 44,
        backgroundColor: '#2196F3',
        borderRadius: 10,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
    },
    linearGradient: {
        height: 44,
        width: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
});


export default Header;