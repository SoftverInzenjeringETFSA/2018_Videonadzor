import React, {Component} from 'react'
const plavo={
    color: '#0033cc'
}
const crveno={
    color: '#ff0000'
}
const bordo={
    color: '#800000'
}
const zeleno={
    color: '#009900'
}
class Help extends Component{
    render(){
        return(
            <div>
                <h1>Help</h1>
                <p>Aplikacija <text style={bordo}>„Aware“</text> kompanije služi za video nadzor objekata. Za uspješno korištenje aplikacije neophodno je znati koristiti se osnovnim funkcionalnostima koje aplikacija pruža.</p>
                <p>Opcija <text style={crveno}>„Live stream“</text> iz horizontalnog menija omogućava gledanje uživo onoga što kamera trenutno snima. 
                <p>Dugme <text style={plavo}>„Start Record“</text> započinje snimanje trenutnog sadržaja koji se prenosi, dok dugme <text style={plavo}>„Stop Record“</text> zaustavlja snimanje, te se taj video spašava u bazu podatka kao i u folder <text style={zeleno}>„Uploads“</text>.</p>
                <p>Dugme <text style={plavo}>„Zakazi termin snimanja“</text> omogućava odabir datuma početka i kraja snimanja, te se taj datum smješta u bazu podataka.</p>
                <p>Dugme <text style={plavo}>„Prikaži termin snimanja“</text> prikazuje sve zakazane termine snimanja, koje su se povukle iz baze podataka i omogućava brisanje nekog od tih termina.</p>
                <p>Dugme <text style={plavo}>„Izdvoji frame“</text> snima sliku onoga što se trenutno emituje tj. uživo prenosi putem kamere i smješta kreiranu sliku (eng.screenshot) u polja ispod videa koja su namijenjena za napravljene screenshot-ove tj. izdvojene frame-ove.</p>
                
                <p>Opcija <text style={crveno}>„Videos“</text> iz horizontalnog menija omogućava pretraživanje i prikaz snimljenih videa, te se pored svakog pojavljuju dugmad koja omogućavaju sljedeće:</p>
                <p>Dugme  <text style={plavo}>„Search““</text> prikazuje u vidu tabele videe iz baze podataka tj.sve snimljene videe.</p>
                <p>Dugme  <text style={plavo}>„X“</text> briše onaj video pored kojeg smo kliknuli na dugme "X".</p>
                <p>Dugme  <text style={plavo}>„Watch“</text> omogućava pregledenje tj.puštanje videa. Tu se pojavljuju opcije <text style={plavo}>„Play“</text> i <text style={plavo}>„Stop“</text> koje omogućavaju pokretanje i zaustavljanje trenutno puštenog videa.</p>
                <p>Dugme  <text style={plavo}>„Archive“</text> omogućava smještanje označenog videa u bazu podataka i to u posebu tabelu <text style={zeleno}>„archive“</text>. Smješta se u posebnu tabelu jer su to podaci koji se kasnije neće moći brisati.</p>
                <p>Dugme  <text style={plavo}>„Save“</text> omogućava smještanje označenog videa u bazu podataka i to u posebu tabelu <text style={zeleno}>„saved“</text>. Smješta se u posebnu tabelu jer su to podaci koji se kasnije automatski brišu nakon 10 dana.</p>
                
                </p>


            </div>
        );
    }
}

export default Help