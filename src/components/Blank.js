import NavBar from "./Navbar";

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
                        Dashboard
                    </span>
                </div>
                <div className="navbar__item_2">
                    <div className="navLeftList">
                        <ul className="ulListLeft">
                            <li>1</li>
                            <li>1</li>
                            <li>1</li>
                        </ul>
                    </div>
                    <div className="navHelpPopup">

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