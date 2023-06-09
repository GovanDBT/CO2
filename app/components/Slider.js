/** Horizontal slider component with slider items */
import React, {useState, useRef } from 'react';
import { View, StyleSheet, FlatList, Animated } from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';

// import slider items component (allows us to render items in the slider)
import SliderItem from './SliderItem';
// import paginator (round scroll indicators below the slider)
import Paginator from './Paginator';
// import next button component (slides to next slider item)
import NextButton from './NextButton';
// import previous button component (slides to previous slider item)
import PrevButton from './PrevButton';
// import react icons
import { FontAwesome5 } from '@expo/vector-icons';
// import colors were using
import colors from '../config/colors';

function Slider(props) {
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
        amount: '1,800,000 MT',
        person: '2.99 per person',
        icon: 'hippo',
        approx: 'Approximately 1200 hippos',
        },
        {
        id: '2',
        caption: 'Measure of the amount of Carbon emission',
        image: require('../../assets/planet.png'),
        title: 'Methane',
        amount: '550,000 MT',
        person: '2.99 per person',
        icon: 'hippo',
        approx: 'Approximately 1200 hippos',
        },
        {
        id: '3',
        caption: 'Measure of the amount of Carbon emission',
        image: require('../../assets/planet.png'),
        title: 'Nitrous Oxide',
        amount: '70,000 MT',
        person: '2.99 per person',
        icon: 'hippo',
        approx: 'Approximately 1200 hippos',
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

    

    return (
        <View style={styles.container}>
            <View style={styles.slider}>
                <FlatList data={slide} renderItem={({ item }) => <SliderItem item={item}/>} horizontal showsHorizontalScrollIndicator={false} pagingEnabled bounces={false} keyExtractor={(item) => item.id} onScroll={ Animated.event([{ nativeEvent: {contentOffset: { x: scrollX } } }], { useNativeDriver: false, }) }  onViewableItemsChanged={viewableItemsChanged} viewabilityConfig={ viewConfig } scrollEventThrottle={32} ref={slidesRef} />
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
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
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
    slider: {
        height: 340,
    },
});

export default Slider;