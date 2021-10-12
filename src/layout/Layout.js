import { useContext, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import Book from '../Book';
import Layer from '../components/Layer';
import ImageContext from '../store/ImageContext';

import css from '../styles/Layout.module.css';

export default function Layout() {
    const menuRef = useRef(null);
    const context = useContext(ImageContext);
    const history = useHistory();

    let perspectiveClass = 'book';
    let visibility = 'hide';

    function menuClickHandler() {
        history.push('/');
    }

    if (context.isVisible()) {
        perspectiveClass = 'book image-shown';
        visibility = 'show';
    }

    function setSize(loadEvent) {
        // const image = loadEvent.target;
        // image.style.maxHeight = image.naturalHeight + "px";
        // image.style.maxWidth = image.naturalWidth + "px";
    }

    return (
        <>
            <div ref={menuRef} onClick={menuClickHandler} className={css['btn-menu']}>
                <span>Menu</span>
                <div className={css.line}></div>
                <div className={css.line}></div>
                <div className={css.line}></div>
            </div>
            <div className={`${css.book} ${perspectiveClass}`}>
                {context.isVisible() && <Layer />}
                <div className={css.cover}>
                    <div className={css['page-container']}>
                        <Book menuRef={menuRef} />
                    </div>
                </div>
            </div>
            <div className={`detail-image ${visibility}`}>
                {/**
                 * @todo: Alt Tag mit Bildbeschreibung anpassen
                 */}
                <div className="image-container">
                    <img onLoad={setSize} src={context.getName()} alt="Details" />
                </div>
            </div>
        </>
    );
}
