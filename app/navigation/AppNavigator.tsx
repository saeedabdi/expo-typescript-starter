import { logout } from '@app/store/reducers/user';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch } from 'react-redux';

const AuthNavigator = () => {
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(logout(''));
    };
    return (
        <SafeAreaView
            style={{
                height: '100%',
                backgroundColor: 'red',
            }}
        >
            <TouchableOpacity
                onPress={() => {
                    handleLogin();
                }}
            >
                <View
                    style={{
                        backgroundColor: 'white',
                        padding: 10,
                    }}
                >
                    <Text>Logout</Text>
                </View>
            </TouchableOpacity>
            <Text>safsssasa</Text>
        </SafeAreaView>
    );
};

export default AuthNavigator;
