import { Link } from 'react-router-dom';
import Config from '../config/pageconfig.json';


import styles from './Menu.module.css';

export default function Menu() {

    return (
        <nav>
            <ul className={styles.leaders}>
                {Object.keys(Config.pages).map(key =>
                    (!Config.pages[key]['part'] || Config.pages[key]['part'] < 2) && (
                        <li key={Config.pages[key]['id']}>
                            <Link to={Config.pages[key]['url']}>
                                {Config.pages[key]['headline']}
                            </Link>
                            <span>{key}</span>
                        </li>
                    )
                )}
            </ul>
        </nav>
    );
}
