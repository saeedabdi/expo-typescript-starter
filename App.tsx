import store from '@app/store';
import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Provider } from 'react-redux';

import App from './app/app';
import { OfflineNotice } from './app/components';

const _App = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <Provider store={store}>
                <OfflineNotice />
                <App />
            </Provider>
        </QueryClientProvider>
    );
};

export default _App;
