import { useState, createContext } from 'react';

const ImageContext = createContext({
    setDetailImage: (imageName) => {},
    isImageShown: () => {},
    getDetailImage: () => {}
});

export function ImageContextProvider(props) {
    const [detailImage, setImage] = useState(null);

    function setDetailImage(imageName) {
        setImage(imageName);
    }

    function getDetailImage() {
        return detailImage;
    }

    function isDetailImageShown() {
        return detailImage !== null;
    }

    const context = {
        isDetailImageShown: isDetailImageShown,
        setDetailImage: setDetailImage,
        getDetailImage: getDetailImage,
    };

    return (
        <ImageContext.Provider value={context}>
            {props.children}
        </ImageContext.Provider>
    );
}

export default ImageContext;