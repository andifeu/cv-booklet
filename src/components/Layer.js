import { useContext } from 'react';
import ImageContext from '../store/ImageContext';

import css from './Layer.module.css';

export default function Layer(props) {

    const imageContext = useContext(ImageContext);

    return (
        <div onClick={() => imageContext.setDetailImage(null)} className={css.layer}></div>
    );
}