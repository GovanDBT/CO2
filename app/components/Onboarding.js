import React, {useState, useRef } from 'react';
import { Text, View, StyleSheet, FlatList, Animated, TouchableOpacity } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import NextButton from './NextButton';
import PrevButton from './PrevButton';
// import react icons
import { FontAwesome5 } from '@expo/vector-icons';
// import colors were using
import colors from '../config/colors';

function Onboarding(props) {
    // holds the currently view index
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollX = useRef(new Animated.Value(0)).current;
    // sets the index of the current slide
    const viewableItemsChanged = useRef(({ viewableItems }) => { setCurrentIndex(viewableItems[0].index); }).current;
    const slidesRef = useRef(null);

    const scrollTo = () => {
        if (currentIndex < slide.length - 1) {
            slidesRef.current.scrollToIndex({ index: currentIndex + 1 });
        }
    };

    const scrollFrom = () => {
        if (currentIndex <= slide.length - 1 && currentIndex > 0) {
            slidesRef.current.scrollToIndex({ index: currentIndex - 1});
        }
    };

    const [selected, setSelected] = useState("");
    const slide = [
        {
        id: '1',
        caption: 'Measure of the amount of Carbon emission',
        image: require('../../assets/planet.png'),
        title: 'Carbon Dioxide',
        amount: '180000 MT',
        person: '2.99 per person',
        icon: 'hippo',
        approx: 'Approximately 1200 hippos',
        },
        {
        id: '2',
        caption: 'Something',
        image: {uri: 'https://www.unep.org/explore-topics/climate-action/what-we-do/climate-action-note/embed.js'},
        },
        {
        id: '3',
        caption: 'Measure of the amount of Carbon emission',
        image: require('../../assets/planet.png'),
        },
    ];
  
    const data = [
        {key:'1', value:'2009'},
        {key:'2', value:'2010'},
        {key:'3', value:'2011'},
        {key:'4', value:'2012'},
        {key:'5', value:'2013'},
        {key:'6', value:'2014'},
        {key:'7', value:'2015'},
        {key:'8', value:'2018'},
    ];

    // slide needs to be 50% on screen before changing to next slide
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;

    // const shareContents = async() => {
    //     const shareOptions = {
    //         message: "This is my message",
    //     }

    //     try {
    //         const shareResponse = await share.open(shareOptions);
    //     } catch(error) {
    //         console.log('Error => ', error);
    //     }
    // };

    return (
        <View style={styles.container}>
            <Text>Hello There</Text>
            <TouchableOpacity style={styles.shareButton} onPress={() => console.log("Tapped Share")}>
                <FontAwesome5 name="share" size={25} color={'white'} />
            </TouchableOpacity>
            <TouchableOpacity style={styles.chartButton} onPress={() => console.log("Tapped Chart")}>
                <FontAwesome5 name="chart-line" size={25} color={'white'} />
            </TouchableOpacity>
            <View style={styles.slider}>
                <FlatList data={slide} renderItem={({ item }) => <OnboardingItem item={item}/>} horizontal showsHorizontalScrollIndicator={false} pagingEnabled bounces={false} keyExtractor={(item) => item.id} onScroll={ Animated.event([{ nativeEvent: {contentOffset: { x: scrollX } } }], { useNativeDriver: false, }) }  onViewableItemsChanged={viewableItemsChanged} viewabilityConfig={ viewConfig } scrollEventThrottle={32} ref={slidesRef} />
            </View>
            <Paginator data={slide} scrollX={scrollX} />
            <NextButton scrollTo={scrollTo}/>
            <PrevButton scrollFrom={scrollFrom}/>
            
            <View style={styles.select}>
                <SelectList 
                    setSelected={(val) => setSelected(val)} 
                    data={data}
                    placeholder='Countries'
                    save="value"
                    arrowicon={<FontAwesome5 name="caret-down" size={20} color={'white'} />}
                    boxStyles={{backgroundColor: colors.secondary, borderColor: 0, color: colors.white, width: 95, height: 45,}}
                    inputStyles={{color: colors.white, fontWeight: 'bold', }}
                    dropdownStyles={{backgroundColor: colors.accent, borderColor: 0, width: 95,}}
                    dropdownTextStyles={{color: colors.white, }}
                    searchPlaceholderStyles={{color: colors.white}}
                    defaultOption={{ key:'8', value:'2018' }}
                    search={false}
                    maxHeight={100}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    airs: {
        flexDirection: 'row',
        position: 'absolute',
        justifyContent: 'flex-end',
        top: 20,
        marginBottom: 100,
    },
    chartButton: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 100,
        position: 'absolute',
        bottom: 15,
        right: 12,
        zIndex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        borderWidth: 1,
        borderColor: 'red',
    },
    select: {
        position: 'absolute',
        left: 10,
        bottom: 15,
    },
    selectItem: {
        color: colors.white,
        position: 'absolute',
    },
    shareButton: {
        backgroundColor: colors.secondary,
        padding: 10,
        borderRadius: 100,
        position: 'absolute',
        top: 15,
        right: 12,
        zIndex: 1,
    },
    slider: {
        height: 340,
    },
});

export default Onboarding;