import { faMap, faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faHistory, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Fragment } from 'react';
import { Link } from "react-router-dom";
import { useState } from "react";

import LineChart from "./Chart";
import { getCrimesByYears, getCrimesByCities, getCrimes, getCrimesByYearsPeriods } from "../services/crime";
import { useEffect } from "react";
import Loader from "react-loader-spinner";

import IconSvg from "./Icon";


const BackPage = () => {
    return (
        <div className="backPage" style={{ display: "grid" }}>
            <div style={{ background: "#f2eff0" }}></div>
            <div style={{ background: "#f6f6f6" }}></div>
        </div>
    )
}

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

const StatisticBlock = (props) => {
    var [lastThreeCrimes, setLastThreeCrimes] = useState([]);
    var [periodCrimes, setPeriodCrimes] = useState({});
    var years = [0, 0, 0, 0, 0].map((_, index) => props.defaultYear - 4 + index);

    useEffect(() => {
        getCrimes(3)
        .then(res => res.json())
        .then(json => setLastThreeCrimes(json.results))
        .catch(err => console.error(err));

        getCrimesByYearsPeriods(props.selectVal != null ? props.selectVal : props.defaultYear)
        .then(res => res.json())
        .then(json => setPeriodCrimes(json))
        .catch(err => console.error(err));
    }, []);

    return (
        <div style={{
            display: "grid",
            gridTemplateColumns: "2.2fr 1fr",
            width: "100%",
            height: "100%"
        }}>
            <div style={{
                display: "grid",
                gridTemplateRows: "0.2fr .7fr .1fr .7fr",
                width: "100%",
                height: "100%"
            }}>
                <div style={{
                    display: "grid",
                    gridTemplateColumns: "1.5fr 1fr",
                }}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-start",
                        marginLeft: "2.5em",
                    }}>
                        <span
                            style={{
                                fontSize: "20px",
                                fontWeight: "800"
                            }}>
                            Обзор преступлений</span>
                        <span style={{
                            fontSize: "14px",
                            fontWeight: "400"
                        }}>Обновления значений</span>
                    </div>
                    <div>
                        <select onChange={event => props.onChangeSelect(event)} style={{ border: "none", width: "8em", fontSize: "1.3em", textAlign: "center", borderRadius: "10px", padding: ".2em", background: "#f6f6f6" }}>
                            {
                                years.map(e => {
                                    if (props.selectVal === null) {
                                        if (props.defaultYear == e) return <option value={e} selected>{e}</option>;
                                        else return <option value={e}>{e}</option>;
                                    } else if (props.selectVal !== null) {
                                        if (props.selectVal == e) return <option value={e} selected>{e}</option>;
                                        else return <option value={e}>{e}</option>
                                    }
                                })
                            }
                        </select>
                    </div>
                </div>
                <div style={{
                    marginLeft: "2.5em",
                    paddingBottom: "1em",
                    height: "14em"
                }}>
                    <LineChart data={periodCrimes}></LineChart>
                </div>
                <div style={{
                    display: "flex",
                    alignItems: "flex-start",
                    marginLeft: "2.5em",
                }}>
                    <span
                        style={{
                            justifyContent: "",
                            fontSize: "20px",
                            fontWeight: "800"
                        }}>
                        Последние события</span>
                </div>
                <div style={{
                    display: "grid",
                    gridTemplateRows: "1fr 1fr 1fr",
                    width: "100%",
                    height: "85%",
                    marginLeft: "1em",
                    // justifyContent: "center",
                alignItems: "center",
                textAlign: "center"
            }}>
                {
                    lastThreeCrimes.map(e => {
                        return (
                            <div style={{
                                display: "grid",
                                gridTemplateColumns: ".5fr 1.5fr 1fr",
                                alignItems: "center",
                            }}>
                                <div><IconSvg svgName="linear_blue_icon"></IconSvg></div>
                                <div>{e.crime.description.length > 40 ? `${e.crime.description.slice(0, 40)}...` : e.crime.description}</div>
                                <div>{dateParser(e.dat_sover_str)}</div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        <div style={{
            justifyContent: "center",
            alignItems: "center",
            display: "flex"
        }}>
            <div style={{
                backgroundColor: "#000000",
                width: "85%",
                height: "75%",
                borderRadius: "3em",
                display: "grid",
                gridTemplateRows: ".2fr .1fr 1.1fr",
                alignItems: "center"
            }}>
                <div style={{
                    color: "white",
                    fontSize: "1.5em",
                    fontWeight: "bold",

                }}>
                    Города
                </div>

                <div style={{
                    color: "white",
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",

                }}>
                    <div>Город</div>
                    <div>Количество</div>
                </div>
                <div style={{
                    overflowY: "scroll", height: "85%", backgroundColor: "black", marginBottom: "2.5em",
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    {
                        Object.keys(props.cityCrimes).map(e => {
                            var val = props.cityCrimes[e];
                            return (
                                <div className="cityTable">
                                    <div>{e}</div>
                                    <div>{val}</div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

const Blank = () => {
    const yearCrimesBlockColors = ["#EEFCF0", "#EBEEFA", "#FDF0E8"];
    const [yearCrimes, setYearCrimes] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [cityCrimes, setCityCrimes] = useState({});
    const defaultYear = new Date().getFullYear();
    const [selectVal, setSelectVal] = useState(null);
    
    useEffect(() => {
        getCrimesByYears()
        .then(res => res.json())
        .then(json => {
            setYearCrimes(json);
        })
        .then(() => {
            getCrimesByCities(defaultYear)
            .then(res => res.json())
            .then(json => {
                setCityCrimes(json);
                setIsLoading(false);
            });
        })
        .catch(err => console.error(err));
    }, []);

    const onYearChange = (event) => {
        var target = event.target;
        setIsLoading(true);
        getCrimesByCities(target.value)
        .then(res => res.json())
        .then(json => {
            setSelectVal(target.value);
            setCityCrimes(json);
            setIsLoading(false);
        });

    }

    return (
        <Fragment>
            <BackPage />
            <div className="blankContainer">
                <div className="blankFrames__item_1" style={{ background: "#f7f4f5" }}>
                    <div className="navbar__item_1">
                        <span style={{ position: "absolute", bottom: "1em", paddingLeft: "1em", fontWeight: 'bold', fontSize: 24 }}>
                            Дэшборд
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
                        <div className="searchBar" style={{ display: "grid", gridTemplateColumns: "7fr 1.5fr", gridGap: ".5em" }}>
                            
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateRows: "1fr 4fr" }}>
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
                            : null }
                        <div style={{ display: "flex", justifyContent: "space-evenly", justifyItems: "center", gridGap: 0 }}>
                            {
                                Object.keys(yearCrimes).map((key, index) => {
                                    var val = yearCrimes[key];
                                    return (
                                        <div style={{ 
                                            background: `${yearCrimesBlockColors[index]}`, width: "70%", height: "90%", margin: "1.5em", borderRadius: "30px",
                                            display: "grid", alignItems: "center"
                                        }}>
                                            <div>
                                                <div><span style={{ fontWeight: "bold", fontSize: "2em" }}>{key}</span></div>
                                                <div><br/><span style={{ fontSize: "1.5em" }}>{val}</span> <br />преступлений</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <div style={{ height: "80%", marginTop: "1.3em" }}>
                            { !isLoading ? <StatisticBlock 
                                            cityCrimes={cityCrimes} 
                                            defaultYear={defaultYear} 
                                            onChangeSelect={onYearChange} 
                                            selectVal={selectVal} /> : null }
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export {Blank, BackPage};