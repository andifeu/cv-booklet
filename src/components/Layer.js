import { useContext } from 'react';
import ImageContext from '../store/ImageContext';

import css from '../styles/Layer.module.css';

export default function Layer(props) {
    const imageContext = useContext(ImageContext);

    return (
        <div
            onClick={() => imageContext.setVisible(false)}
            className={css.layer}
        ></div>
    );
}
