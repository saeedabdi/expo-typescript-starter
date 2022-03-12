import { LoginScreen, RegisterScreen, WelcomeScreen } from '@app/screens';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import { routes } from './routes';

const Stack = createStackNavigator();

const AuthNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen
            name={routes.WELCOME}
            component={WelcomeScreen}
            options={{ headerShown: false }}
        />

        <Stack.Screen
            options={{
                gestureEnabled: true,
            }}
            name={routes.LOGIN}
            component={LoginScreen}
        />
        <Stack.Screen name={routes.REGISTER} component={RegisterScreen} />
    </Stack.Navigator>
);

export default AuthNavigator;
