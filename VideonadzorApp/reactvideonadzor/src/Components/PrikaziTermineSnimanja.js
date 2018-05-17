import React from 'react';
import Popup from "reactjs-popup";
import Axios from 'axios';

class PrikaziTermineSnimanja extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
        rows: []
    }
    this.posaljiZahtjev = this.posaljiZahtjev.bind(this)
  }

  posaljiZahtjev(){    
    var prop = null;
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    Axios.post('http://localhost:27017/dajTermine', prop).then( (res) =>{
        this.setState({rows: res.data})
    })   
  }

  brisiTermin(vrPoc, vrKr) {
    console.log("obrisi video poc:"+vrPoc + ", kraj:" + vrKr);
    var prop = {
      vrijemePocetka: vrPoc,
      vrijemeKraja: vrKr
    };
    const config = {
        headers: {
            'content-type': 'application/json'
        }
    }
    Axios.post('http://localhost:27017/brisiTermin', prop).then( (res) =>{
      alert(res.data);
        //this.setState({rows: res.data})
    })   
  };

  
  
  render() {
    return (
      <Popup
        trigger={<button  className="button"> Prikazi Termine Snimanja</button>}
        modal
        closeOnDocumentClick
      >
        <h1 >Termini snimanja</h1>
        <button id="prikazi-button" onClick={this.posaljiZahtjev}>Prikazi Termine</button>
        
        <table>
          <tr>
            <th> Pocetak snimanja </th>
            <th> Kraj snimanja </th>
            <th> Brisanje snimanja </th>
          </tr>
          {this.state.rows.map((r) => (
            <tr key={r._id}>
              <td>{r.vrijemePocetka}</td>
              <td>{r.vrijemeKraja}</td>
              <td> 
                <button id="delete-button" onClick={() => { this.brisiTermin(r.vrijemePocetka, r.vrijemeKraja); }}>Brisi</button>
              </td>
            </tr>
          ))}
        </table>               
            
      </Popup>
    )
  }
}


export default PrikaziTermineSnimanja;