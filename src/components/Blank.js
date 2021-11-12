import { faMap, faChartBar } from "@fortawesome/free-regular-svg-icons";
import { faHistory, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { Fragment } from 'react';
import { Link } from "react-router-dom";


const BackPage = () => {
    return (
        <div className="backPage" style={{ display: "grid" }}>
            <div style={{ background: "#f2eff0" }}></div>
            <div style={{ background: "#f6f6f6" }}></div>
        </div>
    )
}

const IconSvg = (props) => {

    if (props.svgName == "green_worm_25") {
        return (
            <svg width="80" height="20" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 67.7169C40.8715 67.7169 66.7429 67.7169 92.6144 67.7169C110.459 67.7169 129.502 68.7464 147.151 66.8789C163.337 65.1663 178.203 59.865 191.857 54.7877C216.45 45.6431 241.991 24.577 274.956 28.3905C284.544 29.4996 293.221 31.6749 302.794 32.7003C314.371 33.9403 327.386 33.4703 339.118 33.239C362.894 32.7701 374.604 19.9325 395 16" stroke="#A7C9B0" stroke-width="30" stroke-linecap="round" />
            </svg>
        )
    }

    if (props.svgName == "green_worm_50") {
        return (
            <svg width="65" height="70" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 226C32.1852 226 49.3704 226 66.5556 226C80.9818 226 94.7375 226.393 108.889 223.222C132.228 217.993 157.377 215.785 179.667 206.778C200.937 198.182 218.564 189.117 234 171.778C251.248 152.403 260.309 130.242 269 106.222C277.17 83.6444 290.878 61.6343 309 45.7778C320.106 36.0599 332.848 29.6533 346.778 24.7778C366.904 17.7335 386.7 15 408 15" stroke="#A7C9B0" stroke-width="30" stroke-linecap="round" />
            </svg>
        )
    }

    if (props.svgName == "green_worm_75") {
        return (
            <svg width="60" height="90" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 309.756C26.1758 309.756 37.6226 310.398 48.7697 309.599C62.5775 308.611 73.8753 302.884 86.6678 298.787C97.5781 295.293 109.297 293.869 119.777 289.228C133.29 283.244 146.727 276.686 159.161 268.857C186.467 251.664 206.576 225.906 224.884 200.535C238.683 181.414 246.06 158.747 257.993 138.559C275.823 108.4 292.2 73.5122 323.304 53.1569C335.767 45.0004 349.01 38.3462 362.853 32.5506C371.493 28.9336 381.405 25.4152 389.192 20.3279C390.73 19.3228 397.633 15 396.953 15" stroke="#A7C9B0" stroke-width="30" stroke-linecap="round" />
            </svg>
        )
    }

    if (props.svgName == "green_worm_100") {
        return (
            <svg width="60" height="98" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 361C27.0318 361 39.0636 361 51.0954 361C81.5047 361 107.145 357.024 134.731 346.078C202.78 319.078 261.532 271.268 302.802 219.994C337.974 176.297 367.181 124.92 381.396 73.8395C386.606 55.116 391 34.3314 391 15" stroke="#A7C9B0" stroke-width="30" stroke-linecap="round" />
            </svg>
        )
    }

    if (props.svgName == "blue_worm_25") {
        return (
            <svg width="80" height="20" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 67.7169C40.8715 67.7169 66.7429 67.7169 92.6144 67.7169C110.459 67.7169 129.502 68.7464 147.151 66.8789C163.337 65.1663 178.203 59.865 191.857 54.7877C216.45 45.6431 241.991 24.577 274.956 28.3905C284.544 29.4996 293.221 31.6749 302.794 32.7003C314.371 33.9403 327.386 33.4703 339.118 33.239C362.894 32.7701 374.604 19.9325 395 16" stroke="#BEC1DA" stroke-width="30" stroke-linecap="round" />
            </svg>
        )
    }

    if (props.svgName == "blue_worm_50") {
        return (
            <svg width="65" height="70" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 226C32.1852 226 49.3704 226 66.5556 226C80.9818 226 94.7375 226.393 108.889 223.222C132.228 217.993 157.377 215.785 179.667 206.778C200.937 198.182 218.564 189.117 234 171.778C251.248 152.403 260.309 130.242 269 106.222C277.17 83.6444 290.878 61.6343 309 45.7778C320.106 36.0599 332.848 29.6533 346.778 24.7778C366.904 17.7335 386.7 15 408 15" stroke="#BEC1DA" stroke-width="30" stroke-linecap="round" />
            </svg>
        )
    }

    if (props.svgName == "blue_worm_75") {
        return (
            <svg width="60" height="90" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 309.756C26.1758 309.756 37.6226 310.398 48.7697 309.599C62.5775 308.611 73.8753 302.884 86.6678 298.787C97.5781 295.293 109.297 293.869 119.777 289.228C133.29 283.244 146.727 276.686 159.161 268.857C186.467 251.664 206.576 225.906 224.884 200.535C238.683 181.414 246.06 158.747 257.993 138.559C275.823 108.4 292.2 73.5122 323.304 53.1569C335.767 45.0004 349.01 38.3462 362.853 32.5506C371.493 28.9336 381.405 25.4152 389.192 20.3279C390.73 19.3228 397.633 15 396.953 15" stroke="#BEC1DA" stroke-width="30" stroke-linecap="round" />
            </svg>
        )
    }

    if (props.svgName == "blue_worm_100") {
        return (
            <svg width="60" height="98" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 361C27.0318 361 39.0636 361 51.0954 361C81.5047 361 107.145 357.024 134.731 346.078C202.78 319.078 261.532 271.268 302.802 219.994C337.974 176.297 367.181 124.92 381.396 73.8395C386.606 55.116 391 34.3314 391 15" stroke="#BEC1DA" stroke-width="30" stroke-linecap="round" />
            </svg>
        )
    }

    if (props.svgName == "yellow_worm_25") {
        return (
            <svg width="80" height="20" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 67.7169C40.8715 67.7169 66.7429 67.7169 92.6144 67.7169C110.459 67.7169 129.502 68.7464 147.151 66.8789C163.337 65.1663 178.203 59.865 191.857 54.7877C216.45 45.6431 241.991 24.577 274.956 28.3905C284.544 29.4996 293.221 31.6749 302.794 32.7003C314.371 33.9403 327.386 33.4703 339.118 33.239C362.894 32.7701 374.604 19.9325 395 16" stroke="#D3B3A2" stroke-width="30" stroke-linecap="round" />
            </svg>
        )
    }

    if (props.svgName == "yellow_worm_50") {
        return (
            <svg width="65" height="70" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 226C32.1852 226 49.3704 226 66.5556 226C80.9818 226 94.7375 226.393 108.889 223.222C132.228 217.993 157.377 215.785 179.667 206.778C200.937 198.182 218.564 189.117 234 171.778C251.248 152.403 260.309 130.242 269 106.222C277.17 83.6444 290.878 61.6343 309 45.7778C320.106 36.0599 332.848 29.6533 346.778 24.7778C366.904 17.7335 386.7 15 408 15" stroke="#D3B3A2" stroke-width="30" stroke-linecap="round" />
            </svg>
        )
    }

    if (props.svgName == "yellow_worm_75") {
        return (
            <svg width="60" height="90" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15 309.756C26.1758 309.756 37.6226 310.398 48.7697 309.599C62.5775 308.611 73.8753 302.884 86.6678 298.787C97.5781 295.293 109.297 293.869 119.777 289.228C133.29 283.244 146.727 276.686 159.161 268.857C186.467 251.664 206.576 225.906 224.884 200.535C238.683 181.414 246.06 158.747 257.993 138.559C275.823 108.4 292.2 73.5122 323.304 53.1569C335.767 45.0004 349.01 38.3462 362.853 32.5506C371.493 28.9336 381.405 25.4152 389.192 20.3279C390.73 19.3228 397.633 15 396.953 15" stroke="#D3B3A2" stroke-width="30" stroke-linecap="round" />
            </svg>
        )
    }

    if (props.svgName == "yellow_worm_100") {
        return (
            <svg width="60" height="98" viewBox="0 0 411 83" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 361C31.0318 361 43.0636 361 55.0954 361C85.5047 361 111.145 357.024 138.731 346.078C206.78 319.078 265.532 271.268 306.802 219.994C341.974 176.297 371.181 124.92 385.396 73.8396C390.606 55.116 395 34.3314 395 15" stroke="#D3B3A2" stroke-width="30" stroke-linecap="round" />
            </svg>
        )
    }

}

export default IconSvg;

const Blank = () => {
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
                            <input type="text" className="searchInput" placeholder="Поиск..." style={{ padding: "0 2em" }} />
                            <button id="sbmBtn">
                                <FontAwesomeIcon className="prevPage" icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                    <div style={{ width: "100%", height: "100%", display: "grid", gridTemplateRows: "1fr 3fr" }}>
                        <div style={{ display: "flex", justifyContent: "space-evenly", justifyItems: "center", gridGap: 0 }}>
                            <div style={{ 
                                background: "#EEFCF0", width: "80%", height: "90%", margin: "1.5em", borderRadius: "30px",
                                display: "grid", gridTemplateRows: "1.2fr 1.2fr .9fr"
                            }}>
                                <img src={require("../assets/img/statis.png")} />
                            </div>
                            <div style={{ background: "#EBEEFA", width: "80%", height: "90%", margin: "1.5em", borderRadius: "30px" }}></div>
                            <div style={{ background: "#FDF0E8", width: "80%", height: "90%", margin: "1.5em", borderRadius: "30px" }}></div>
                        </div>
                        <div style={{ height: "80%" }}></div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export {Blank, BackPage};