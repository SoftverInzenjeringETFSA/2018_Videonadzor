import React from 'react';
import Popup from "reactjs-popup";
import Axios from 'axios';
import DateTimePicker from 'react-datetime-picker'

class ZakaziTerminSnimanja extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        vrijemePocetka: null,
        vrijemeKraja: null
    }
    this.posaljiZahtjev = this.posaljiZahtjev.bind(this)
  }

  promjenaPocetaka = date =>{
      this.setState({vrijemePocetka: date, vrijemeKraja: this.state.vrijemeKraja})
  }

  promjenaKraja = date =>{
    this.setState({vrijemePocetka: this.state.vrijemePocetka, vrijemeKraja: date})
}

  posaljiZahtjev(){

    console.log(this.state)
    if(this.state.vrijemeKraja === null || this.vrijemePocetka === null){
        alert("Morate unijeti oba polja")
    }else /*if(new Date(this.state.vrijemeKraja).getTime() >= new Date(this.vrijemePocetka).getTime() ){
        alert("Vrijeme kraja mora biti poslije vremena pocetka")
    } else*/{
        var prop = {
            vrijemeKraja:this.state.vrijemeKraja,
            vrijemePocetka: this.state.vrijemePocetka
        }
        const config = {
            headers: {
                'content-type': 'application/json'
            }
        }
        Axios.post('http://localhost:27017/zakaziTermin', prop).then( (res) =>{
            alert(JSON.stringify(res) )
        })
    }
    
  }

  render() {
    return (
        <Popup
            trigger={<button className="button"> Zakazi Termin Snimanja</button>}
            modal
            closeOnDocumentClick
      >
        <h1> Unesite podatke o teminu snimanja</h1>

        <form>
       
                <p>Termin pocetka:</p>
                <DateTimePicker
                    onChange={this.promjenaPocetaka}
                    value = {this.state.vrijemePocetka}
                    minDate={new Date()}
                />

                <p>TerminKraja:</p>
                <DateTimePicker
                    onChange={this.promjenaKraja}
                    value={this.state.vrijemeKraja}
                    minDate={new Date()}
                />

        </form>

        <button onClick={this.posaljiZahtjev}> Zakazi Termin </button>
      </Popup>
    )
  }
}

export default ZakaziTerminSnimanja;