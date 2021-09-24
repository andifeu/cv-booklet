import { useContext } from 'react';
import Book from '../Book';
import Layer from '../components/Layer';
import Menu from '../components/Menu';
import ImageContext from '../store/ImageContext';

import css from './Layout.module.css';

export default function Layout(props) {
    const context = useContext(ImageContext);
    let perspectiveClass = 'book';
    let visibility = 'hide';

    if (context.isVisible()) {
        perspectiveClass = 'book image-shown';
        visibility = 'show'
    }

    return (
        <>
            <aside className={css['sidebar']}>
                <Menu />
            </aside>
            <div className={`${css.book} ${perspectiveClass}`}>
                {context.isVisible() && <Layer />}
                <div className={css.cover}>
                    <div className={css['page-container']}>
                        <Book />
                    </div>
                </div>
            </div>
            <div className={`detail-image ${visibility}`}>
                {
                /**
                 * @todo: Alt Tag mit Bildbeschreibung anpassen
                 */
                }
                <div className="image-container">
                    <img src={context.getName()} alt="Details" />
                </div>
            </div>
        </>
    );
}
