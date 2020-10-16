import { FiArrowLeft, FiPlus } from "react-icons/fi";
import L from "leaflet";
import mapMarkerImg from "../images/map-Marker.svg";

const happyMapIcon = L.icon({
  iconUrl: mapMarkerImg,
  iconSize: [64, 48],
  iconAnchor: [32, 48],
  popupAnchor: [0, -60],
});

export default happyMapIcon;
