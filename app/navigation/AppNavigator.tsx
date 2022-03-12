import { logout } from '@app/store/reducers/user';
import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { useDispatch } from 'react-redux';

const AuthNavigator = () => {
    const dispatch = useDispatch();
    const handleLogin = () => {
        dispatch(logout(''));
    };
    return (
        <View
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
        </View>
    );
};

export default AuthNavigator;
