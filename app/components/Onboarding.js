import React, {useState, useRef} from 'react';
import { Text, View, StyleSheet, FlatList, Animated } from 'react-native';

import slide from './slide';
import OnboardingItem from './OnboardingItem';
import Paginator from './Paginator';
import NextButton from './NextButton';
import PrevButton from './PrevButton';

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

    // slide needs to be 50% on screen before changing to next slide
    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50}).current;
    return (
        <View style={styles.container}>
            <View >
                <FlatList data={slide} renderItem={({ item }) => <OnboardingItem item={item}/>} horizontal showsHorizontalScrollIndicator={false} pagingEnabled bounces={false} keyExtractor={(item) => item.id} onScroll={ Animated.event([{ nativeEvent: {contentOffset: { x: scrollX } } }], { useNativeDriver: false, }) }  onViewableItemsChanged={viewableItemsChanged} viewabilityConfig={ viewConfig } scrollEventThrottle={32} ref={slidesRef} />
            </View>
            <Paginator data={slide} scrollX={scrollX} />
            <NextButton scrollTo={scrollTo}/>
            <PrevButton scrollFrom={scrollFrom}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default Onboarding;