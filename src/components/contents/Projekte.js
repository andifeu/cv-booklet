import PageContent from './PageContent';
import Card from '../widgets/Card';

import { FaCheck } from 'react-icons/fa';

export default class Projekte extends PageContent {

    /**
     * @todo: 
     * - Projekt-Komponente erstellen
     */

    render1() {
        const imageStyles = {
            width: '40%',
            height: '26%',
        };

        return (
            <>
                <div
                    className={`${this.css['ospneo-bg']} ${this.css['project-bg-image']}`}
                ></div>
                <h2>{this.headline}</h2>
                <div className={this.css['project-name']}>
                    <h3>OSPlus_neo</h3>
                </div>
                <div
                    style={imageStyles}
                    className={this.css['image-container']}
                >
                    <Card image="ospneo.png" filterFrequency="0.2" />
                </div>
                <div className={this.css['project-desc']}>
                    <div className={this.css.line}>
                        <p>
                            <b>Kunde:</b>{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.microdoc.com/"
                            >
                                MicroDoc Computersysteme GmbH
                            </a>{' '}
                            als Dienstleister für die{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.f-i.de/"
                            >
                                Finanz Informatik GmbH & Co. KG.
                            </a>
                        </p>
                    </div>
                    <div className={this.css.line}>
                        <p>
                            <b>Dauer:</b> April 2016 - Februar 2021
                        </p>
                    </div>
                    <div className={this.css.line}>
                        <b>Technologien:</b>
                        <ul className={this.css.technologies}>
                            <li>
                                <FaCheck />
                                <span>Javascript</span>
                            </li>
                            <li>
                                <FaCheck />
                                <span>HTML5</span>
                            </li>
                            <li>
                                <FaCheck />
                                <span>CSS3</span>
                            </li>
                        </ul>
                    </div>
                    <div className={this.css.line}>
                        <b>Beschreibung:</b>
                        <p>
                            Mitentwicklung des Javascript UI-Frameworks
                            OSPlus_neo, für den Einsatz bei
                            Onlinebanking-Frontends, Bankberater-Software und
                            inzwischen auch Geldautomaten:
                            <br />
                            <a
                                rel="noreferrer"
                                target="_blank"
                                href="https://www.youtube.com/watch?v=3RqmiVekSNA"
                            >
                                Produktvideo
                            </a>
                        </p>
                    </div>
                </div>
            </>
        );
    }

    render2() {
        return (
            <>
                <div
                    className={`${this.css['giesecke-bg']} ${this.css['project-bg-image']}`}
                ></div>
                <div className={this.css['project-name']}>
                    <h3>
                        Intranet Telefonbuch
                        <br />-<br />
                        Giesecke+Devrient
                    </h3>
                </div>
                <div className={this.css['image-container']}>
                    <Card image="giesecke.jpg" filterFrequency="0.2" />
                </div>
                <div className={this.css['project-desc']}>
                    <div className={this.css.line}>
                        <p>
                            <b>Kunde:</b>{' '}
                            <a
                                target="_blank"
                                rel="noreferrer"
                                href="https://www.gi-de.com/"
                            >
                                Giesecke & Devrient
                            </a>
                        </p>
                    </div>
                    <div className={this.css.line}>
                        <p>
                            <b>Dauer:</b> September 2015 - Dezember 2015
                        </p>
                    </div>
                    <div className={this.css.line}>
                        <b>Technologien:</b>
                        <ul className={this.css.technologies}>
                            <li>
                                <FaCheck />
                                <span>PHP</span>
                            </li>
                            <li>
                                <FaCheck />
                                <span>Javascript</span>
                            </li>
                        </ul>
                    </div>
                    <div className={this.css.line}>
                        <b>Beschreibung:</b>
                        <p>
                            Entwicklung eines leichtgewichtigen PHP-MVC
                            Frameworks zur internen Verwendung für G&D.
                            <br />
                            Portierung des alten Intranet-Telefonbuchs auf das
                            neue System.
                        </p>
                    </div>
                </div>
            </>
        );
    }

    render3() {
        const imageStyles = {
            width: '80%',
            height: '35%',
        };

        return (
            <>
                <div className={this.css['project-name']}>
                    <h3>CV Booklet</h3>
                </div>
                <div
                    style={imageStyles}
                    className={this.css['image-container']}
                >
                    <Card image="cv-booklet.png" filterFrequency="0.2" />
                </div>
                <div className={this.css['project-desc']}>
                    <div className={this.css.line}>
                        <p>
                            <b>Kunde:</b> privates Projekt
                        </p>
                    </div>
                    <div className={this.css.line}>
                        <p>
                            <b>Dauer:</b> August 2021 - September 2021
                        </p>
                    </div>
                    <div className={this.css.line}>
                        <b>Technologien:</b>
                        <ul className={this.css.technologies}>
                            <li>
                                <FaCheck />
                                <span>Javascript</span>
                            </li>
                            <li>
                                <FaCheck />
                                <span>React.js</span>
                            </li>
                        </ul>
                    </div>
                    <div className={this.css.line}>
                        <b>Beschreibung:</b>
                        <p>
                            Entwicklung eines Lebenslaufs in Form eines 3D-Hefts
                            auf Basis von Vanilla Javascript und React.js.
                        </p>
                    </div>
                </div>
            </>
        );
    }
}
