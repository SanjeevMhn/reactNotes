const Navbar = () => {
    return (
        <nav className="main-nav">
            <div className="main-nav__brand">
                <button className="sidebar-btn">
                    <ion-icon name="menu"></ion-icon>
                </button>
                <div className="logo">
                    <div className="logo__container">
                        <ion-icon name="document"></ion-icon>
                    </div>
                    <span className="logo__text">Notes</span>
                </div>
            </div>

            <form action="#" method="post" className="main-nav__search">
                <input type="text" name="notes" id="note-search" className="search-text" placeholder="Search"/>
                <ion-icon name="search"></ion-icon>
            </form>

            <div className="main-nav__options">

                <ul className="options-list">
                    <div className="options-list__item">
                        <button className="search-btn">
                            <ion-icon name="search"></ion-icon>
                        </button>
                    </div>
                    <li className="options-list__item">
                        <button className="refresh-btn">
                            <ion-icon name="refresh"></ion-icon>
                        </button>
                    </li>
                    <li className="options-list__item">
                        <button className="view-btn">
                            <ion-icon name="file-tray-stacked"></ion-icon>
                        </button>
                    </li>
                    <li className="options-list__item">
                        <button className="settings-btn">
                            <ion-icon name="settings"></ion-icon>
                        </button>
                    </li>
                    {/* <li className="options-list__item">
                        <div className="profile-img"></div>
                    </li> */}
                </ul>

                {/* <div className="options__profile">
                    <div className="profile-img">
                    </div>
                </div> */}
            </div>
        </nav>
    )
}

export default Navbar;