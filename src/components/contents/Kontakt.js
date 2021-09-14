
import PageContent from './PageContent';

export default class Ausbildung extends PageContent {

    render() {
        return (
            <>
                <h2>{this.headline}</h2>
                <div>
                    <p>Andreas Feuerstein - Software Entwickler</p>
                    <p>
                        Email:&nbsp;
                        <a href="mailto:andreas.feuerstein@mail.de">
                            andreas.feuerstein@mail.de
                        </a>
                    </p>
                    <p>
                        Tel.:&nbsp;
                        <a href="tel:+4915753093362">+49 1575 / 30 933 62</a>
                    </p>
                    <p>Geburtsdatum: 09.05.1985</p>
                    <p>Adresse:</p>
                    <address>
                        Blumenweg 10
                        <br />
                        88319 Aitrach
                    </address>
                </div>
            </>
        );
    }
}
