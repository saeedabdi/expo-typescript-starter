import { routes } from '@app/navigation/routes';
import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const Welcome = () => {
    const navigator = useNavigation();
    return (
        <View
            style={{
                backgroundColor: 'red',
                flex: 1,
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    navigator.navigate(routes.LOGIN as never);
                }}
            >
                <Text>test324</Text>
            </TouchableOpacity>
            <Text>welcome</Text>
        </View>
    );
};

export default Welcome;
