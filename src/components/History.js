import { BackPage } from "./Blank";
import { faMap, faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faHistory, faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useState, useEffect } from "react";

import { getEvents } from "../services/crime";

import { MyMapComponent } from "./Map";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import Loader from "react-loader-spinner";


const googleMapURL =
  'https://maps.googleapis.com/maps/api/js?v=3.27&libraries=places,geometry&key=AIzaSyD3eJCzMm3h3SHO3TyeM3CdRRTbpf8jP9Y&callback=initialize';

const dateParser = date => {
    var month = {
        1: "Январь",
        2: "Февраль",
        3: "Март",
        4: "Апрель",
        5: "Май",
        6: "Июнь",
        7: "Июль",
        8: "Август",
        9: "Сентябрь",
        10: "Октябрь",
        11: "Ноябрь",
        12: "Декабрь",
    };

    var dateObj = new Date(date);
    var minutes = dateObj.getMinutes().toString();
    if (minutes.length == 1) {
        minutes = "0" + minutes;
    }

    return `${dateObj.getDay()} ${month[dateObj.getMonth()]} 
            ${dateObj.getFullYear()} года 
            ${dateObj.getHours()}:${minutes}`;
}

const openCrimeOnMap = object_id => {
    window.open(`http://localhost:3000/map?object_id=${object_id}`, "_blank");
}

const History = () => {
    const [page, setPage] = useState(1);
    const [crimes, setCrimes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const handleNextPage = event => {
        setCrimes([]);
        setIsLoading(true);
        getEvents(page + 1)
        .then(res => res.json())
        .then(json => {
            setIsLoading(false);
            setCrimes(json.results);
            setPage(page + 1);
        })
        .catch(err => console.error(err));
    }

    const handlePrevPage = event => {
        if (page == 1) {
            return 
        }
        setCrimes([]);
        setIsLoading(true);
        getEvents(page - 1)
        .then(res => res.json())
        .then(json => {
            setIsLoading(false);
            setCrimes(json.results)
            setPage(page - 1);
        })
        .catch(err => console.error(err));
    }

    useEffect(() => {
        getEvents(page)
        .then(res => res.json())
        .then(json => {
            setCrimes(json.results);
            setIsLoading(false);
        })
        .catch(err => console.error(err));
    }, []);

    return (
        <Fragment>
            <BackPage />
            <div className="blankContainer">
                <div className="blankFrames__item_1" style={{ background: "#f7f4f5" }}>
                    <div className="navbar__item_1">
                        <span style={{ position: "absolute", bottom: "1em", paddingLeft: "1em", fontWeight: 'bold', fontSize: 24 }}>
                            История
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
                        </div>
                    </div>
                </div>
                <div className="blankFrames__item_2" style={{ background: "#ffffff" }}>
                    <div className="navbar__item_1" style={{ display: "grid", justifyItems: "center", alignItems: "center", gridTemplateColumns: "4fr 1fr" }}>
                        <div className="searchBar" style={{ display: "grid", gridTemplateColumns: "7fr 1.5fr", gridGap: ".5em" }}>
                            <input type="text" className="searchInput" placeholder="Поиск..." style={{ padding: "0 2em" }} />
                            <button id="sbmBtn">
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr" }}>
                            <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateColumns: "1fr 1fr 1fr", alignItems: "center", justifyItems: "center" }}>
                                <div>
                                    <button class="sbmBtn" onClick={event => handlePrevPage(event)}>
                                        <FontAwesomeIcon icon={faArrowLeft} size="lg" />
                                    </button>
                                </div>
                                <div><span id="currentPage" style={{ fontSize: "1.5em", fontWeight: 600 }}>{page}</span></div>
                                <div>
                                    <button class="sbmBtn" onClick={event => handleNextPage(event)}>
                                        <FontAwesomeIcon icon={faArrowRight} size="lg" />
                                    </button>
                                </div>
                            </div>
                            <div></div>
                        </div>
                    </div>
                    <div style={{ width: "100%", maxHeight: "87%", height: "87%", display: "flex", flexDirection: "column", gap: "1em", marginTop: "2em", alignItems: "center" }}>
                        { 
                            isLoading 
                            ? <Loader
                                style={{ position: "absolute", bottom: "45%", left: "60%" }}
                                type="TailSpin"
                                color="#151220"
                                height={100}
                                width={100}
                                timeout={15000000} 
                            /> 
                            : null 
                        }
                        {
                            crimes.map(e => {
                                return (
                                    <div onClick={() => openCrimeOnMap(e.object_id)} style={{ cursor: "pointer", height: "100px", background: "#f6f6f6", width: "95%", borderRadius: "20px", display: "flex", flexDirection: "column", justifyContent: "space-evenly" }}>
                                        <div>
                                            {e.crime.description} | {e.city.name}
                                        </div>
                                        <div>
                                            {e.stat}
                                        </div>
                                        <div>
                                            {dateParser(e.dat_sover_str)}
                                        </div>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default History;