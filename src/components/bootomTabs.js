import React, { memo, useState } from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { AppImages } from "../themes";
import LinearGradient from 'react-native-linear-gradient';


const BottomBar = () => {
    // This is bottom tab array containing name, icon, etc..
    const [bottomTabList, setBottomTabList] = useState([
        {
            no: 1,
            name: "bicycle",
            icon: AppImages.bicycle,
            selectedTab: true,
        },
        {
            no: 2,
            name: "map",
            icon: AppImages.map,
            selectedTab: false,
        },
        {
            no: 3,
            name: "cart",
            icon: AppImages.cart,
            selectedTab: false,
        },
        {
            no: 4,
            name: "Person",
            icon: AppImages.person,
            selectedTab: false,
        },
        {
            no: 5,
            name: "Document",
            icon: AppImages.doc,
            selectedTab: false,
        },
    ])

    const handleTab = (index) => {

        const updatedTabs = bottomTabList.map((tab, tabIndex) => ({
            ...tab,
            selectedTab: tabIndex === index,
        }));
        setBottomTabList(updatedTabs);
    }

    // function to render tab icon
    const _renderTabIcon = (data) => {
        if (data?.selectedTab) {
            return (
                <View style={styles.selectedTabStyle}>
                    <LinearGradient
                        colors={['#34C8E8', '#4E4AF2']}
                        style={styles.linearGradient}
                    >
                        <Image source={data?.icon} resizeMode="contain" style={[styles.iconStyle, { width: 27.39, tintColor: '#FFFFFF' }]} />
                    </LinearGradient>
                </View>
            )

        } else {
            return <Image source={data?.icon} resizeMode="contain" style={styles.iconStyle} />
        }
    };


    //This is main render method
    return (
        <View style={styles.mainContainer}>
            {bottomTabList.map((data, index) =>
                <TouchableOpacity
                    activeOpacity={.7}
                    onPress={() => handleTab(index)}
                    key={"bottomTabList" + index}
                    style={styles.smallBox}
                >
                    {_renderTabIcon(data)}
                </TouchableOpacity>
            )}
        </View>
    );
};

export default memo(BottomBar);
const styles = StyleSheet.create({
    mainContainer: {
        height: '14%',
        flexDirection: "row",
        backgroundColor: "rgb(54,61,94)",
        paddingLeft: 0,
        justifyContent: "space-around",
        position: "absolute",
        bottom: 0,
        width: "100%",
        borderColor: "rgb(54,61,94)",
        alignItems: "flex-start",
        paddingTop: 5,
        transform: [{ skewY: '-5deg' }],
        bottom: -15,
    },
    smallBox: {
        alignItems: "center",
        justifyContent: "center",
        borderTopColor: "white",
        paddingBottom: 10,
        alignContent: "center",
    },
    icon: {
        width: 23.3,
        height: 23.3,
    },
    text: {
        color: "white",
        fontSize: 13,
        fontWeight: '400',
        textAlign: "center",
    },
    iconStyle: {
        height: 17.38,
        width: 18.53,
        paddingVertical: 20,
    },
    selectedTabStyle: {
        width: 60,
        height: 60,
        backgroundColor: '#2196F3',
        borderRadius: 15,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 10,
        },
        shadowOpacity: 0.25,
        shadowRadius: 10,
        elevation: 10,
        transform: [{ skewY: '-6deg' }],
        bottom: 20
    },
    linearGradient: {
        height: 60,
        width: 60,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
    },
});
