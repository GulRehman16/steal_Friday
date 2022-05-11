

import { Icon } from 'native-base';
import React, { useEffect, useState } from 'react';
import {
    BackHandler,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AppButton, Header, Shoebox } from '../../../components';
import { Images } from '../../../constants';


const ProductDetails = props => {

    const [isData, setData] = useState({
        bgImage: Images.Pictures.nikeShoe1,
        Price: '$15.00',
        Size: '8',
        Condition: 'New',
        Image: Images.Pictures.maskheader,
        Discription: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr,sed diam nonumy eirmod tempor invidunt'
    })

    return (
        <>
            <SafeAreaView style={styles.screenContainer}>
                <StatusBar backgroundColor={'white'} barStyle="dark-content" />
                <ScrollView
                    keyboardShouldPersistTaps="handled"
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flex: 1, }}>
                        <ImageBackground source={Images.Background.bg} resizeMode="cover" style={{ width: '100%', height: '100%' }}>
                            <View style={styles.mainBody}>
                                <View style={{
                                    marginTop: 10, width: '90%', height: 50, alignSelf: 'center', backgroundColor: 'yellow',
                                    justifyContent: 'center'
                                }}>
                                    <Header

                                        leftIcon
                                        IconColor="#fff"
                                        RightIcon
                                        leftIconProps={() => {
                                            props.navigation.goBack();
                                        }}
                                    />
                                </View>
                                <View style={{ width: 353, height: 353, alignSelf: 'center' }}>
                                    <Image source={isData.bgImage} resizeMode="cover" style={{ width: '100%', height: '100%' }} />
                                </View>
                                <View style={{ width: '90%', alignSelf: 'center', marginVertical: 10 }}>
                                    <View style={{ marginVertical: 15, }}>
                                        <Text style={{ color: '#fff', fontSize: 18 }}>Nike Limited Edition</Text>
                                        <Text style={{ color: '#fff', fontSize: 14 }}>Product Code:42303</Text>
                                    </View>
                                </View>
                                <View style={{ width: '100%', height: '100%', backgroundColor: '#fff', borderTopStartRadius: 25, borderTopEndRadius: 25, elevation: 1 }}>
                                    <View style={{ width: '80%', alignSelf: 'center', marginVertical: 10 }}>
                                        <View style={{ marginVertical: 15, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.50 }}>
                                            <Text>Price:</Text>
                                            <Text>{isData.Price}</Text>
                                        </View>
                                        <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.50 }}>
                                            <Text>Size:</Text>
                                            <Text>{isData.Size}</Text>
                                        </View>
                                        <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.50 }}>
                                            <Text>Condition:</Text>
                                            <Text>{isData.Condition}</Text>
                                        </View>
                                        <View style={{ marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between', borderBottomWidth: 0.50 }}>
                                            <Text>Brand</Text>
                                            <Image source={isData.Image} />

                                        </View>
                                        <View style={{ marginVertical: 10, }}>
                                            <Text style={{ fontSize: 15, fontWeight: '800', marginVertical: 5 }}>Description:</Text>
                                            <View style={{ width: 278 }}>
                                                <Text style={{}}>{isData.Discription}</Text>
                                            </View>
                                        </View>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                            <View style={{ width: '80%' }}>
                                                <AppButton btnWidth={197} btnHeight={47} label="Buy Now" text />
                                            </View>
                                            <View>
                                                <AppButton
                                                    btnWidth={58}
                                                    btnHeight={51}
                                                    iconW={20.34}
                                                    iconH={18.08}
                                                    // label="send"
                                                    brder1={10}
                                                    icon2
                                                    iconN={'shoppingcart'}
                                                    iconT={'AntDesign'}
                                                    onPress={() =>
                                                        props.navigation.replace('MyTabs', { screen: 'home' })
                                                    }
                                                />
                                            </View>
                                        </View>
                                    </View>

                                </View>

                            </View>
                        </ImageBackground>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </>
    );
};

export default ProductDetails;

const styles = StyleSheet.create({
    screenContainer: {
        flex: 1,
        backgroundColor: '#F8F8F8',
    },
    mainBody: {
        width: '100%',
        height: '100%',
        alignSelf: 'center',
        paddingBottom: 10,
    },
    noticeBox: {
        width: '100%',
        borderRadius: 10,
        backgroundColor: '#ffff',
        elevation: 5,
        marginTop: 30,
        // alignItems: 'center',


    },
    ortext: {
        width: '100%',
        height: 65,
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    loginBtn: {
        backgroundColor: 'red',
        width: '100%',
        alignSelf: 'center',
        height: 38,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
