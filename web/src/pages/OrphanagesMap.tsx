import React from 'react';
import { useHistory, Link} from 'react-router-dom'

import { FiArrowRight,FiArrowLeft, FiPlus } from "react-icons/fi";

import {Map, TileLayer, Marker, Popup} from 'react-leaflet'
import mapMarkerImg from '../images/map-Marker.svg';
import Leaflet from 'leaflet';

import '../styles/pages/OrphanagesMap.css';
import "leaflet/dist/leaflet.css";

const mapIcon = Leaflet.icon({
    iconUrl: mapMarkerImg,
    iconSize: [64, 48],
    iconAnchor:[32, 48],
    popupAnchor: [160,15]
})

const OrphanagesMap = () =>{
    const { goBack } = useHistory();
  
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
                    <br/>
                    <button type="button" onClick={goBack}>
                        <FiArrowLeft size={24} color="rgba(0,0,0 0.6)" />
                    </button>
                </footer>
            </aside>
            <Map 
                center={[-23.4437189,-46.52452469]}
                zoom={12}
                style={{width: '100%', height: '100%'}}
            >
            <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} />
                <Marker 
                    position= {[-23.49033783,-46.54556125]}
                    icon={mapIcon}
                >            
                    <Popup 
                    closeButton={false} 
                    minWidth= {240}
                    maxWidth={240}
                    maxHeight={480}
                    className="map-popup"
                    >
                    Drogaria Guarulhos Ponte Grande
                    <Link to="/orphanages/1" className="enter-app">
                    <FiArrowRight size={26} color="rgba(0,0,0 0.6)" />
                    </Link>
                    </Popup>
                </Marker>
            </Map>
            <Link to="/orphanages/create" className="create-orphanage">
              <FiPlus size={32} color="rgba(0,0,0 0.6)" />
            </Link>
        </div>
    )

};

export default OrphanagesMap;