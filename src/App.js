import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import Layout from './layout/Layout';
import { ImageContextProvider } from './store/ImageContext';

export default function App() {
    return (
        <React.StrictMode>
            <HashRouter>
                <ImageContextProvider>
                    <Layout />
                </ImageContextProvider>
            </HashRouter>
        </React.StrictMode>
    );
}
