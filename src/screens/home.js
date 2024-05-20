import { View, Text, ImageBackground, Image, StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { BoootomTab, Header } from '../components'
import { AppImages } from '../themes';
import LinearGradient from 'react-native-linear-gradient';
import { useNavigation } from '@react-navigation/native';

const Home = () => {
    const navigation = useNavigation()

    const productArray = [
        {
            id: 1,
            title: "Road Bike",
            desc: "PEUGEOT - LR01",
            price: `$ 1,999.99`,
            image: AppImages.electricBicycle1
        },
        {
            id: 2,
            title: "Road Helmet",
            desc: "SMITH - Trade",
            price: `$ 120`,
            image: AppImages.halmet
        },
        {
            id: 3,
            title: "Road Helmet",
            desc: "SMITH - Trade",
            price: `$ 120`,
            image: AppImages.electricBicycle2
        },
        {
            id: 3,
            title: "Road Helmet",
            desc: "SMITH - Trade",
            price: `$ 120`,
            image: AppImages.electricBicycle3
        },
    ]

    const tabArray = [
        {
            id: 1,
            image: null
        },
        {
            id: 2,
            image: AppImages.battery
        },
        {
            id: 3,
            image: AppImages.Union
        },
        {
            id: 4,
            image: AppImages.Union2
        },
        {
            id: 5,
            image: AppImages.Union3
        },
    ];

    const renderCard = () => {
        return (
            <LinearGradient style={styles.rectangleView}
                colors={['#353F54', '#22283499']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <Image source={AppImages.electricBicycle1} resizeMode='contain' style={{ height: 153, width: 316.82 }} />
            </LinearGradient>
        )
    }

    const _renderItem = ({ item, index }) => {
        return (
            <LinearGradient key={"item" + index} style={styles.itemview}
                colors={['#363E5199', '#191E2699']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
            >
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={() => navigation.navigate("ProductDetails", { item })}
                >
                    <Image source={item.image} resizeMode='contain' style={{ height: 88.57, width: 121 }} />
                    <View>
                        <Text style={styles.itemTitle}>{item.title}</Text>
                        <Text style={styles.itemDesc}>{item.desc}</Text>
                        <Text style={styles.itemTitle}>{item.price}</Text>
                    </View>
                </TouchableOpacity>
            </LinearGradient>
        )
    }

    const renderProductList = () => {
        return (

            <FlatList
                numColumns={2}
                data={productArray}
                extraData={productArray}
                keyExtractor={(item) => item.id.toString()}
                renderItem={_renderItem}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    alignItems: 'center',
                    paddingBottom: '40%'
                }}
            />
        )
    }

    const _renderTabItem = ({ item, index }) => {
        return (
            <TouchableOpacity style={{
                bottom: item.id * 10,

            }}>
                <LinearGradient key={"item" + index} style={[styles.tabItemview, {

                }]}
                    colors={item.image ? ['#363E5199', '#191E2699'] : ['#34C8E8', '#4E4AF2']}
                >
                    {
                        item.image ?
                            <Image source={item.image} resizeMode='contain' style={{ height: 21, width: 26.65 }} />
                            :
                            <Text style={styles.itemDesc}>{"All"}</Text>
                    }
                </LinearGradient>
            </TouchableOpacity>
        )
    }

    const rendertab = () => {
        return (
            <View>
                <FlatList
                    horizontal
                    data={tabArray}
                    extraData={tabArray}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={_renderTabItem}
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{
                        // backgroundColor: 'red',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%',
                        paddingHorizontal: 20,
                        marginTop: '15%'
                    }}
                />
            </View>
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
                title={"Choose Your Bike"}
                righticon={AppImages.search}
            />
            {renderCard()}
            {rendertab()}
            {renderProductList()}
            <BoootomTab />
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
        height: 50,
        width: 50,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
    rectangleView: {
        height: "30%",
        width: "90%",
        alignSelf: 'center',
        marginTop: '10%',
        borderRadius: 20,
        alignItems: 'center',
        justifyContent: 'center',
        transform: [{ skewY: '-10deg' }],
        borderWidth: 1,
        borderColor: 'grey'
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
});


export default Home;