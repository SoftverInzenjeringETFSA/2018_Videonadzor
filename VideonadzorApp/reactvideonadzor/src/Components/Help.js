import React, {Component} from 'react'

class Help extends Component{
    render(){
        return(
            <div>
                <h1>Help</h1>
                <p>Trentuno aktivne kamere moguce je vidjeti u kartici stream. Snimanje se pokrece klikom na dugme "pokreni snimanje", te se zaustavlja klikom na dugme
                    "zaustavi snimanje". Moguce je zakazati automatsko snimanje videa klikom na dugme "zakazi termin snimanja". Temine snimanja je moguce obrisati ili pregledati klikom
                    na dugme prikazi termine snimanja.
                </p>

                <p>
                    Prtragu i pregled snimljenih videa moguce je obaviti u kartici videos. Klikom na element iz liste videa otvara se njegov pregled.
                </p>


            </div>
        );
    }
}

export default Help