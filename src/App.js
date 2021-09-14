import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './layout/Layout';

export default function App() {
    return (
        <React.StrictMode>
            <BrowserRouter>
                <Layout />
            </BrowserRouter>
        </React.StrictMode>
    );
}
