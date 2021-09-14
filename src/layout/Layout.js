import Book from '../Book';
import Menu from '../components/Menu';

import css from './Layout.module.css';

export default function Layout(props) {
    return (
        <>
            <aside className={css['sidebar']}>
                <Menu />
            </aside>
            <div className={css.book}>
                <div className={css.cover}>
                    <div className={css['page-container']}>
                        <Book />
                    </div>
                </div>
            </div>
        </>
    );
}
