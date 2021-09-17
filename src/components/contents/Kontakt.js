import PageContent from './PageContent';

export default class Ausbildung extends PageContent {
    
    number = 0x47889b788f2;

    callNumber(e) {
        const intVal = parseInt(this.number, 10);
        e.preventDefault();
        window.location.href = 'tel://+' + intVal;
    }

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
                        <a
                            onClick={(e) => this.callNumber(e)}
                            href="#"
                        >
                            0 1575 / 30 933 62
                        </a>
                    </p>
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
