import Constants from 'expo-constants';
import React, { FC, ReactNode } from 'react';
import { SafeAreaView, StyleProp, StyleSheet, View, ViewStyle } from 'react-native';

interface Props {
    children: ReactNode;
    style?: StyleProp<ViewStyle>;
}

const Screen: FC<Props> = ({ children, style }) => {
    return (
        <SafeAreaView style={[styles.screen, style]}>
            <View style={[styles.view, style]}>{children}</View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        flex: 1,
    },
    view: {
        flex: 1,
    },
});

export default Screen;
