import { memo, useState } from 'react'
import { View, Text, ImageBackground, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { BoootomTab, Header } from '../components'
import { AppImages } from '../themes';
import LinearGradient from 'react-native-linear-gradient';
import Swiper from 'react-native-swiper'


const ProductDetails = (props) => {
    const itemdata = props?.route?.params?.item
    const [showBottomView, setShowBottomView] = useState(false)


    const swiperComponent = () => {
        return (
            <Swiper activeDotColor='#FFFFFF' dotColor='rgb(80,85,96)' showsPagination style={styles.wrapper} showsButtons={false}>
                <View style={styles.slide1}>
                    <Image source={AppImages.electricBicycle1} resizeMode='contain' style={{ height: 289.58, width: 388.9 }} />
                </View>
                <View style={styles.slide2}>
                    <Image source={AppImages.electricBicycle2} resizeMode='contain' style={{ height: 289.58, width: 388.9 }} />
                </View>
                <View style={styles.slide3}>
                    <Image source={AppImages.electricBicycle3} resizeMode='contain' style={{ height: 289.58, width: 388.9 }} />
                </View>
            </Swiper>
        )
    }

    return (
        <ImageBackground style={{
            flex: 1,
        }}
            source={AppImages.bg}
            resizeMode='contain'
        >
            <Header
                title={itemdata?.title}
                leftIcon={AppImages.back}
            />

            {
                showBottomView ?
                    <View style={{
                        height: '40%'
                    }}>
                        {swiperComponent()}
                    </View>
                    :
                    <View style={styles.rectangleView}
                    >
                        <Image source={itemdata.image} resizeMode='contain' style={{ height: 289.58, width: 388.9 }} />
                    </View>
            }


            <View style={{
                height: showBottomView ? "50%" : '15%',
                width: '100%',
                borderRadius: 30,
                backgroundColor: '#353F54',
                position: 'absolute',
                bottom: 0,
            }}>

                <View style={{
                    alignItems: 'center',
                    justifyContent: 'space-around',
                    flexDirection: 'row',
                    top: 20,
                }}>
                    <TouchableOpacity
                        style={{
                            height: 43,
                            width: 129,
                            backgroundColor: '#28303F',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                        }}
                        activeOpacity={.7}
                        onPress={() => setShowBottomView(!showBottomView)}
                    >
                        <View style={[[styles.neumorphicBase, {
                            shadowColor: showBottomView ? "#FFF" : '#252B39',
                        }]]}>
                            <View style={styles.neumorphicInner}>
                                <Text style={showBottomView ? styles.buttontextSTyleWithShadow : styles.buttontextSTyle}>Description</Text>
                            </View>
                        </View>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            height: 43,
                            width: 129,
                            backgroundColor: '#28303F',
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 10,
                        }}
                        activeOpacity={.7}
                    >
                        <View style={[styles.neumorphicBase]}>
                            <View style={styles.neumorphicInner}>
                                <Text style={{
                                    fontSize: 15,
                                    fontWeight: '400',
                                    lineHeight: 22.5,
                                    color: "#FFFFFF",
                                }}>Specification</Text>
                            </View>
                        </View>
                    </TouchableOpacity>
                </View>
                {
                    showBottomView &&
                    <View style={{
                        marginTop: '15%',
                        width: '100%',
                        height: '100%'
                    }}>
                        <View style={{
                            paddingHorizontal: 30
                        }}>
                            <Text style={styles.productTitle}>{itemdata.title}</Text>
                            <Text style={styles.productDesc}>{`The LR01 uses the same design as the most iconic bikes from PEUGEOT Cycles' 130-year history and combines it with agile, dynamic performance that's perfectly suited to navigating today's cities. As well as a lugged steel frame and iconic PEUGEOT black-and-white chequer design, this city bike also features a 16-speed Shimano Claris drivetrain.
                        `}</Text>
                        </View>
                        <View style={{
                            height: 104,
                            width: '100%',
                            borderRadius: 50,
                            borderWidth: 2,
                            backgroundColor: '#262E3D',
                            flexDirection: 'row',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            paddingBottom: 20,
                            borderColor: "#1C222E"
                        }}>
                            <Text style={{
                                fontSize: 24,
                                fontWeight: '400',
                                lineHeight: 36,
                                color: "#3D9CEA"
                            }}>{itemdata?.price}</Text>

                            <LinearGradient style={[styles.tabItemview, {

                            }]}
                                colors={['#34C8E8', '#4E4AF2']}
                            >
                                <Text style={styles.itemDesc}>{"Add to Cart"}</Text>
                            </LinearGradient>


                        </View>
                    </View>
                }


            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    iconStyle: {
        height: 20,
        width: 20,
    },
    itemview: {
        height: 241,
        width: 165,
        // alignSelf: 'center',
        marginTop: '10%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ skewY: '-10deg' }],
        margin: 20,
        borderWidth: 1,
        borderColor: 'grey'
    },
    tabItemview: {
        height: 44,
        width: 160,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rectangleView: {
        height: "70%",
        width: "100%",
        alignItems: 'center',
        justifyContent: 'center'
    },
    linearGradient: {
        height: 44,
        width: 44,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
    itemTitle: {
        fontSize: 13,
        fontWeight: '500',
        lineHeight: 19.5,
        color: 'rgb(170,173,179)'
    },
    itemDesc: {
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 22.5,
        color: '#FFFFFF'
    },
    buttonOuter: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        borderRadius: 12,
        marginTop: 12,
        marginBottom: 12,
        padding: 30,
    },
    buttonInner: {
        backgroundColor: '#55b9f3',
        borderRadius: 12,
    },
    buttonFace: {
        borderRadius: 12,
        padding: 12,
    },
    neumorphicBase: {
        borderRadius: 8, // Adjust as needed

        shadowOffset: { width: 0, height: 0 },
        shadowOpacity: 0.3,
        shadowRadius: 4,
        elevation: 4, // For Android
        height: '100%',
        width: 129,
    },
    neumorphicInner: {
        backgroundColor: '#28303F',
        borderRadius: 8, // Adjust as needed
        shadowColor: '#252B39',
        shadowOffset: { width: -2, height: -2 },
        shadowOpacity: 0.7,
        shadowRadius: 4,
        height: '100%',
        width: 129,
        alignItems: 'center',
        justifyContent: 'center'
    },

    button: {
        shadowOffset: { width: -6, height: -6 },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#ffffff',
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        shadowOffset: { width: 6, height: 6 },
        shadowColor: '#aeaec0',
    },
    inner: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        backgroundColor: '#e0e0e0',
        borderRadius: 10,
        shadowOffset: { width: 6, height: 6 },
        shadowOpacity: 1,
        shadowRadius: 6,
        shadowColor: '#aeaec0',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttontextSTyle: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 22.5,
        color: "#FFFFFF",
    },
    buttontextSTyleWithShadow: {
        fontSize: 15,
        fontWeight: '700',
        lineHeight: 22.5,
        color: "#3CA4EB",
    },
    productTitle: {
        fontSize: 17,
        fontWeight: '700',
        lineHeight: 25.5,
        color: "#FFFFFF"
    },
    productDesc: {
        fontSize: 15,
        fontWeight: '400',
        lineHeight: 22.5,
        color: "#FFFFFF",
        marginTop: 10
    },
    slide1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide2: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    slide3: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#fff',
        fontSize: 30,
        fontWeight: 'bold'
    },
    wrapper: {
        height: '50%'
    }
});



export default memo(ProductDetails);