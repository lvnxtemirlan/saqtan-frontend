import { BackPage } from "./Blank";
import { faMap, faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faHistory, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState, useEffect } from "react";
import queryString from 'query-string';

import { getCities, searchForEvents, utmToLatLng } from "../services/crime";

import { Link } from "react-router-dom";
import { compose, withProps } from "recompose";
import { withScriptjs, GoogleMap, Marker, withGoogleMap } from "react-google-maps";
import swal from 'sweetalert';


const KEY = "AIzaSyBU-HFRJv4gEA5NTG-ugyXVv2KuV2GtCck";
const googleMapURL =
  'https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyD3eJCzMm3h3SHO3TyeM3CdRRTbpf8jP9Y&callback=initialize';

const MyMapComponent = compose(
    withProps({
      googleMapURL: "https://maps.googleapis.com/maps/api/js?&key=AIzaSyD3eJCzMm3h3SHO3TyeM3CdRRTbpf8jP9Y",
      loadingElement: <div style={{ height: `100%` }} />,
      containerElement: <div style={{ height: `80%` }} />,
      mapElement: <div style={{ height: `100%` }} />,
    }),
    withScriptjs,
    withGoogleMap
  )((props) =>
    <GoogleMap
      defaultZoom={14}
      defaultCenter={props.position}
      center={props.position}
    >
      {props.positions.map(e => {
          return <Marker clickable onClick={() => callSweetAlert(
            `Преступление #${e.crime_obj ? e.crime_obj.id : 0}`, 
            e.crime_obj ? e.crime_obj.description : null,
            e.dat_sover_str,
            e.fe1r32p1 ? e.fe1r32p1 : ""
        )} position={{ 'lat': e.geometry['y'], 'lng': e.geometry['x'] }} />
      })}
    </GoogleMap>
  )


const googleApiSearch = async (city, address) => {
    return await fetch(
        `https://maps.googleapis.com/maps/api/geocode/json?address=${city},+${address}&key=${KEY}`
    );
}

const callSweetAlert = (title, msg, date, item) => {
    swal({
        title: title,
        text: `${msg} ${item} \n\n\n${date}`
    });
}


const Map = () => {
    const [cities, setCities] = useState([]);
    const [positions, setPositions] = useState([{geometry: {'x': 0, 'y': 0}}]);
    let search = window.location.search;
    let q_params = queryString.parse(search);

    useEffect(() => {
        getCities()
        .then(res => res.json())
        .then(json => setCities(json.results.map(e => {return {"name": e.name, "code": e.code}})))
        .catch(err => console.error(err));
        
        if (Object.keys(q_params).length) {
            searchForEvents("", "", q_params["object_id"])
                .then(res => res.json())
                .then(json => setPositions(json))
                .catch(err => console.error(err));
        }
    }, []);
    

    const searchOnClick = (event) => {
        var city = event.target.parentNode.parentNode.parentNode.querySelector("#searchSelect").value;
        var address = event.target.parentNode.parentNode.parentNode.querySelector("#searchInput").value;

        googleApiSearch(city, address)
        .then(res => res.json())
        .then(json => {
            if (json.results.length > 0) {
                var val = json.results[0];
                searchForEvents(city, val.geometry.location)
                .then(res => res.json())
                .then(json => setPositions(json))
                .catch(err => console.error(err));
            }
        })
        .then(() => console.log(positions))
        .catch(err => console.error(err));
    } 

    return (
        <Fragment>
            <BackPage />
            <div className="blankContainer">
                <div className="blankFrames__item_1" style={{ background: "#f7f4f5" }}>
                    <div className="navbar__item_1">
                        <span style={{ position: "absolute", bottom: "1em", paddingLeft: "1em", fontWeight: 'bold', fontSize: 24 }}>
                            Карта
                        </span>
                    </div>
                    <div className="navbar__item_2">
                        <div className="navLeftList">
                            <ul className="ulListLeft" style={{ marginTop: "9em" }}>
                                <li className="ul__item">
                                    <div className="leftNavItems" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gridGap: "1em", alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faChartBar} size="lg" />
                                        <Link style={{ textDecoration: "none", }} to="/">
                                            <span style={{ color: "gray", fontWeight: 600 }}>Дэшборд</span>
                                        </Link>
                                    </div>
                                </li>
                                <li className="ul__item">
                                    <div className="leftNavItems" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gridGap: "1.95em", alignItems: 'center' }}>
                                        <FontAwesomeIcon icon={faMap} size="lg" />
                                        <Link style={{ textDecoration: "none", }} to="/map" >  
                                            <span style={{ color: "gray", fontWeight: 600 }}>Карта</span>
                                        </Link>
                                    </div>
                                </li>

                            </ul>
                        </div>
                        <div className="navHelpPopup">
                            <Link style={{ textDecoration: "none", }} to="/history" > 
                                <div className="leftPopup" style={{ display: "grid", gridTemplateRows: "1fr 2fr", gridGap: "1em" }}>
                                    <div style={{ paddingLeft: "2.3em", paddingTop: "2em", display: "flex", justifyContent: "left" }}>
                                        <FontAwesomeIcon icon={faHistory} style={{ color: "white" }} size="lg" />
                                        <div></div>
                                    </div> 
                                    <div style={{ display: "flex", justifyContent: "left", gap: "1em", textAlign: "start", paddingLeft: "2.3em", flexDirection: "column" }}>
                                        <span style={{ color: "white", fontWeight: "bolder" }}><strong>История доступна</strong></span>
                                        <span style={{ color: "white", fontSize: ".7em" }}>Просмотрите историй преступлений</span>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="blankFrames__item_2" style={{ background: "#ffffff" }}>
                    <div className="navbar__item_1" style={{ display: "grid", justifyItems: "center", alignItems: "center" }}>
                        <div className="searchBar" style={{ display: "grid", gridTemplateColumns: "3fr 3fr .7fr", gridGap: ".5em" }}>
                            <select id="searchSelect" className="searchInput" style={{ padding: "0 2em" }}>
                                {
                                    cities.map(e => <option value={e.name} >{e.name}</option>)
                                }
                            </select>
                            <input type="text" id="searchInput" className="searchInput" placeholder="Поиск..." style={{ padding: "0 2em" }} />
                            <button id="sbmBtn" onClick={event => searchOnClick(event)}>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "100%" }}>
                    <MyMapComponent 
                        isMarkerShown 
                        loadingElement={<div style={{ height: `100%` }} />}
                        containerElement={<div style={{ height: `50%` }} />}
                        mapElement={<div style={{ height: `100%` }} />}
                        googleMapURL={googleMapURL}
                        positions={positions}
                        position={
                            positions.length > 0
                            ? { 'lat': positions[0]['geometry']['y'], 'lng': positions[0]['geometry']['x'] }
                            : callSweetAlert("Преступления не найдены", "", "", "")
                        }
                    />
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export { Map, MyMapComponent };