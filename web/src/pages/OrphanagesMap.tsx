import React from 'react';
import { Link} from 'react-router-dom'
import {FiPlus } from 'react-icons/fi'
import {Map, TileLayer} from 'react-leaflet'
import mapMarkerImg from '../images/map-Marker.svg';

import '../sytles/pages/OrphanagesMap.css';
import "leaflet/dist/leaflet.css";

const OrphanagesMap = () =>{
    return(
        <div id="page-map">
            <aside>
                <header>
                    <img src={mapMarkerImg} alt="Happy" />
                    <h2>Escolha um Orfanato no Mapa</h2>
                    <p>Muitas Crianças estão Esperando a sua Visita :)</p>
                </header>
                <footer>
                    <strong>São Paulo</strong>
                    <span>Guarulhos</span>
                </footer>
            </aside>
            <Map 
                center={[-23.4090,-46.5395]}
                zoom={12}
                style={{width: '100%', height: '100%'}}
            >
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
            </Map>
            <Link to="/" className="create-orphanage">
              <FiPlus size={32} color="#FFF" />
            </Link>
        </div>
    )

};

export default OrphanagesMap;