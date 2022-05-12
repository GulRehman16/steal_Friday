
import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, ScrollView } from 'react-native'
import { Button, Card, Overlay } from 'react-native-elements';
import { Themes, Images } from '../../../constants';
import { Boxs, TextWithLine, data1, Header } from '../../../components';


import { AppButton, Overlays } from '../../../components';

const width = Dimensions.get('screen').width / 2 - 15
const Adeals = () => {

    const Catagories = ['Name1', 'Name2', 'Name3', 'Name4'];
    const [catagoryIndex, setCatagoryIndex] = useState(2)

    const CatagoryList = () => {
        return (
            <View style={{ width: '70%', flexDirection: 'row', justifyContent: 'space-around', marginTop: 10, marginBottom: 10, alignSelf: 'center' }}>

                <TouchableOpacity onPress={() => setCatagoryIndex(0)}>

                    <Text style={[styles.CatagoriesText, catagoryIndex == 0 && styles.catagoryTextSelected]}>Clothing
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCatagoryIndex(1)}>

                    <Text style={[styles.CatagoriesText, catagoryIndex == 1 && styles.catagoryTextSelected]}>Shoes
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCatagoryIndex(2)}>

                    <Text style={[styles.CatagoriesText, catagoryIndex == 2 && styles.catagoryTextSelected]}>Accessories
                    </Text>
                </TouchableOpacity>

            </View>
        )
    }


    const data = [
        {
            color: Themes.boxColors.grayLite,
            text: 'old',
            img: Images.Icon.grayStar,
            itemImg: Images.Pictures.tShirt2,
            itemName: 'Gym T-Shirt',
            ammount: ' $15.00',
            imgW: 65,
            imgH: 10,
            category: 'clothes'
        },
        {
            color: Themes.boxColors.purpulLite,
            text: 'old',
            img: Images.Icon.purpleStar,
            itemImg: Images.Pictures.purpleShoes,
            ammount: ' $15.00',
            itemName: 'Nike Collection',
            imgW: 75,
            imgH: 80,
        },
        {
            color: Themes.boxColors.blueLite,
            text: 'New',
            itemName: 'Beats Up HeadSet',
            img: Images.Icon.star1,
            itemImg: Images.Pictures.headPhone,
            ammount: ' $15.00',
            imgW: 65,
            imgH: 65,
        },
        {
            img: Images.Icon.greenStar,
            itemImg: Images.Pictures.greenShoes,
            color: Themes.boxColors.greenLite,
            text: 'New',
            ammount: ' $15.00',
            itemName: 'Nike Collection',
            imgW: 60,
            imgH: 65,
        },

        {
            color: Themes.boxColors.grayLite,
            text: 'old',
            img: Images.Icon.grayStar,
            itemName: 'Gym T-Shirt',
            itemImg: Images.Pictures.tShirt1,
            ammount: ' $15.00',
            imgW: 70,
            imgH: 100,
        },
    ];

    const data1 = [
        {
            color: Themes.boxColors.grayLite,
            text: 'old',
            img: Images.Icon.grayStar,
            itemImg: Images.Pictures.tShirt,
            itemName: 'Gym T-Shirt',
            ammount: ' $15.00',
            imgW: 65,
            imgH: 100,
        },
        {
            color: Themes.boxColors.purpulLite,
            text: 'old',
            img: Images.Icon.purpleStar,
            itemImg: Images.Pictures.tShirt,
            ammount: ' $15.00',
            itemName: 'Gym T-Shirt',
            imgW: 75,
            imgH: 80,
        },
        {
            color: Themes.boxColors.blueLite,
            text: 'New',
            itemName: 'Gym T-Shirt',
            img: Images.Icon.star1,
            itemImg: Images.Pictures.tShirt2,
            ammount: ' $15.00',
            imgW: 65,
            imgH: 65,

        },
        {
            img: Images.Icon.greenStar,
            itemImg: Images.Pictures.greenShoes,
            color: Themes.boxColors.tShirt1,
            text: 'New',
            ammount: ' $15.00',
            itemName: 'Gym T-Shirt',
            imgW: 60,
            imgH: 65,
        },

        {
            color: Themes.boxColors.redLite,
            text: 'old',
            img: Images.Icon.grayStar,
            itemName: 'Gym T-Shirt',
            itemImg: Images.Pictures.tShirt2,
            ammount: ' $15.00',
            imgW: 70,
            imgH: 100,
        },

        {
            color: Themes.boxColors.grayLite,
            text: 'old',
            img: Images.Icon.grayStar,
            itemName: 'Gym T-Shirt',
            itemImg: Images.Pictures.tShirt1,
            ammount: ' $15.00',
            imgW: 70,
            imgH: 100,
        },
    ];

    const data2 = [
        {
            color: Themes.boxColors.grayLite,
            text: 'old',
            img: Images.Icon.grayStar,
            itemImg: Images.Pictures.nikeShoes,
            itemName: 'Gym T-Shirt',
            ammount: ' $15.00',
            imgW: 65,
            imgH: 100,
        },
        {
            color: Themes.boxColors.purpulLite,
            text: 'old',
            img: Images.Icon.purpleStar,
            itemImg: Images.Pictures.purpleShoes,
            ammount: ' $15.00',
            itemName: 'Nike Collection',
            imgW: 75,
            imgH: 80,
        },
        {
            color: Themes.boxColors.blueLite,
            text: 'New',
            itemName: 'Beats Up HeadSet',
            img: Images.Icon.star1,
            itemImg: Images.Pictures.purpleShoes,
            ammount: ' $15.00',
            imgW: 65,
            imgH: 65,
            category: "accessrories"
        },
        {
            img: Images.Icon.greenStar,
            itemImg: Images.Pictures.greenShoes,
            color: Themes.boxColors.greenLite,
            text: 'New',
            ammount: ' $15.00',
            itemName: 'Nike Collection',
            imgW: 60,
            imgH: 65,
        },

        {
            color: Themes.boxColors.redLite,
            text: 'old',
            img: Images.Icon.grayStar,
            itemName: 'Gym T-Shirt',
            itemImg: Images.Pictures.blackShoes,
            ammount: ' $15.00',
            imgW: 70,
            imgH: 100,
        },

        {
            color: Themes.boxColors.grayLite,
            text: 'old',
            img: Images.Icon.grayStar,
            itemName: 'Gym T-Shirt',
            itemImg: Images.Pictures.greenShoes,
            ammount: ' $15.00',
            imgW: 70,
            imgH: 100,
        },
    ];
    const data3 = [
        {
            color: Themes.boxColors.grayLite,
            text: 'old',
            img: Images.Icon.grayStar,
            itemImg: Images.Pictures.headPhone,
            itemName: 'Gym T-Shirt',
            ammount: ' $15.00',
            imgW: 65,
            imgH: 100,
        },
        {
            color: Themes.boxColors.purpulLite,
            text: 'old',
            img: Images.Icon.purpleStar,
            itemImg: Images.Pictures.blackHeadfone,
            ammount: ' $15.00',
            itemName: 'Nike Collection',
            imgW: 75,
            imgH: 80,
        },
        {
            color: Themes.boxColors.blueLite,
            text: 'New',
            itemName: 'Beats Up HeadSet',
            img: Images.Icon.star1,
            itemImg: Images.Pictures.headfone,
            ammount: ' $15.00',
            imgW: 65,
            imgH: 65,
            category: "accessrories"
        },
        {
            img: Images.Icon.greenStar,
            itemImg: Images.Pictures.headPhone,
            color: Themes.boxColors.greenLite,
            text: 'New',
            ammount: ' $15.00',
            itemName: 'Nike Collection',
            imgW: 60,
            imgH: 65,
        },



    ];
    const Card = ({ }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Details', plant)}>

                <View style={styles.cards}>


                </View>


            </TouchableOpacity>
        );
    };

    return (
        <View style={{
        }}>
            <View>

                <View style={{ width: '100%', alignSelf: 'center', marginTop: 10 }}>
                    <Header leftIcon headerText />
                    <View style={{ alignItems: 'center', width: '90%', alignSelf: 'center' }}><Text style={{ fontSize: 22, fontWeight: '700', color: 'black' }}>Active Deals</Text></View>
                </View>
                <View style={{ marginTop: 10, alignSelf: 'center', }}>

                    <CatagoryList />
                    <View style={{ width: '100%', marginTop: 10, }}>
                        <View style={styles.box4}>
                            {catagoryIndex == 1 ?
                                <FlatList
                                    columnWrapperStyle={{ justifyContent: 'space-between' }}
                                    showsVerticalScrollIndicator={false}
                                    contentContainerStyle={{
                                        marginTop: 10,
                                        paddingBottom: 30,
                                    }}
                                    numColumns={2}
                                    data={data}
                                    renderItem={({ item }) => {
                                        return <Boxs

                                            Bgcolor={item.color}
                                            marginRight={10}
                                            text={item.text}
                                            icon={item.img}
                                            itemImg={item.itemImg}
                                            itemName={item.itemName}
                                            amount={item.ammount}
                                            imgHeight={item.imgH}
                                            imgWidth={item.imgW}
                                            StockNewOld
                                            FeaturedDeals
                                        />

                                    }}
                                />
                                : null}
                        </View>
                    </View>
                </View>


            </View>




        </View >
    );
};
export default Adeals

const styles = StyleSheet.create({
    CatagoriesText: {
        fontSize: 16
    },
    catagoryTextSelected: {
        width: '100%',
        borderBottomColor: '#CD1C1B',
        borderBottomWidth: 3,
    },

    cards: {


        // marginHorizontal: 2,

        // // borderRadius: 10,
        // marginBottom: 25,
        // // padding: 15,
        // alignSelf: 'center',
        // justifyContent: 'space-between', alignSelf: 'center'
    },
    box4: {

        flexDirection: 'row',
        justifyContent: 'space-between',
        // marginLeft: -7,

        flexWrap: 'wrap',
        // width,
        backgroundColor: '#F8F8F8',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center'
    },


})