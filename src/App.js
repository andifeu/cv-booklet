import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { ImageContextProvider } from './store/ImageContext';

import Layout from './layout/Layout';
import Config from './config/appconfig.json';

export default function App() {
    if (Config.hashrouting[window.location.hostname]) {
    }

    function getLayout() {
        return (
            <ImageContextProvider>
                <Layout />
            </ImageContextProvider>
        );
    }

    return (
        <React.StrictMode>
            {Config.hashrouting[window.location.hostname] === undefined ? (
                <BrowserRouter>{getLayout()}</BrowserRouter>
            ) : (
                <HashRouter>{getLayout()}</HashRouter>
            )}
        </React.StrictMode>
    );
}
