import React from 'react'

import { FiArrowLeft } from "react-icons/fi";
import { useHistory } from 'react-router-dom';

import mapMarkerImg from '../images/map-Marker.svg';
import '../styles/components/Sidebar.css';

const Sidebar = () => {
    const { goBack } = useHistory();
    
    return (
      <aside className="sideBar">
        <img src={mapMarkerImg} alt="Happy" />
        <footer>
          <button type="button" onClick={goBack}>
            <FiArrowLeft size={24} color="rgba(0,0,0 0.6)" />
          </button>
        </footer>
      </aside>
    );
}

export default Sidebar;