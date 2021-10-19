import { useState, createContext } from 'react';

const ImageContext = createContext({
    setName: (name) => {},
    getName: () => {},
    isVisible: () => {},
    setVisible: (visible) => {}
});

export function ImageContextProvider(props) {
    const [detailImage, setImage] = useState({
        visible: false,
        name: null
    });

    function setName(name) {
        setImage(prevImage => {
            return {
                visible: prevImage.visible,
                name: name
            };
        })
    }

    function getName() {
        return detailImage.name;
    }

    function isVisible() {
        return detailImage.visible; 
    }

    function setVisible(visible) {
        setImage(prevImage => {
            return {
                visible: visible,
                name: prevImage.name
            };
        })
    }

    const context = {
        setName: setName,
        getName: getName,
        isVisible: isVisible,
        setVisible: setVisible
    };

    return (
        <ImageContext.Provider value={context}>
            {props.children}
        </ImageContext.Provider>
    );
}

export default ImageContext;