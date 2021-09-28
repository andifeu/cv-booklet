import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import { ImageContextProvider } from './store/ImageContext';

import Layout from './layout/Layout';
import Config from './config/appconfig.json';

export default function App() {

    function getLayout() {
        return (
            <ImageContextProvider>
                <Layout />
            </ImageContextProvider>
        );
    }

    return (
        <React.StrictMode>
            {Config.hashrouting.indexOf(window.location.hostname) === -1 ? (
                <BrowserRouter>{getLayout()}</BrowserRouter>
            ) : (
                <HashRouter>{getLayout()}</HashRouter>
            )}
        </React.StrictMode>
    );
}
