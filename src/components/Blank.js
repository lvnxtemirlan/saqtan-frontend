import { faMap, faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const BackPage = () => {
    return (
        <div className="backPage" style={{ display: "grid" }}>
            <div style={{ background: "#f2eff0" }}></div>
            <div style={{ background: "#f6f6f6" }}></div>
        </div>
    )
}

const Blank = () => {
    return (
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
                                    <span style={{ color: "gray", fontWeight: 600 }}>Дэшборд</span>
                                </div>
                            </li>
                            <li className="ul__item">
                                <div className="leftNavItems" style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gridGap: "1.95em", alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faMap} size="lg" />
                                    <span style={{ color: "gray", fontWeight: 600 }}>Карта</span>
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
                <div className="navbar__item_1">
                    
                </div>
            </div>
        </div>
    )
}

export {Blank, BackPage};