import React from "react";
import { Map, Marker, TileLayer } from 'react-leaflet';
import { useHistory } from "react-router-dom";

import { FiPlus } from "react-icons/fi";
import Sidebar from '../components/Sidebar'
import 
import '../styles/pages/create-orphanage.css';


export default function CreateOrphanage() {
  const { goBack } = useHistory();

  return (
    <div id="page-create-orphanage">
       <Sidebar /> 

      <main>
        <form className="create-orphanage-form">
          <fieldset>
            <legend>Dados</legend>

            <Map 
              center={[-23.4437189,-46.52452469]}
              zoom={12}
              style={{ width: '100%', height: 280 }}
            >
             <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />

              <Marker interactive={false} icon={happyMapIcon} position= {[-23.49033783,-46.54556125]} />
            </Map>

            <div className="input-block">
              <label htmlFor="name">Nome</label>
              <input id="name" />
            </div>

            <div className="input-block">
              <label htmlFor="about">Sobre <span>Máximo de 300 caracteres</span></label>
              <textarea id="name" maxLength={300} />
            </div>

            <div className="input-block">
              <label htmlFor="images">Fotos</label>

              <div className="uploaded-image">

              </div>

              <button className="new-image">
                <FiPlus size={24} color="#15b6d6" />
              </button>
            </div>
          </fieldset>

          <fieldset>
            <legend>Visitação</legend>

            <div className="input-block">
              <label htmlFor="instructions">Instruções</label>
              <textarea id="instructions" />
            </div>

            <div className="input-block">
              <label htmlFor="opening_hours">Nome</label>
              <input id="opening_hours" />
            </div>

            <div className="input-block">
              <label htmlFor="open_on_weekends">Atende fim de semana</label>

              <div className="button-select">
                <button type="button" className="active">Sim</button>
                <button type="button">Não</button>
              </div>
            </div>
          </fieldset>

          <button className="confirm-button" type="submit">
            Confirmar
          </button>
        </form>
      </main>
    </div>
  );
}

// return `https://a.tile.openstreetmap.org/${z}/${x}/${y}.png`;
