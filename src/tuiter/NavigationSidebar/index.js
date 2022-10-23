import React from "react";
import {Link} from "react-router-dom";
import {useLocation} from "react-router";
const NavigationSidebar = () => {
    const {pathname} = useLocation();
    const paths = pathname.split('/')
    const active = paths[2];
    return(
        <div className="list-group">
            <Link to="/" className="list-group-item d-inline-flex justify-content-start">
                <i className="bi bi-journal-code me-1"></i>
                <span className="d-none d-xl-block">Labs</span>
            </Link>
            <a className="list-group-item d-inline-flex justify-content-start">
                <i className="bi bi-twitter me-1"></i>
                <span className="d-none d-xl-block">Tuiter</span>
            </a>
            <Link to="/tuiter/home" className={`list-group-item d-inline-flex justify-content-start
                           ${paths[2] === 'home' ? 'active' : ''}`}>
                <i className="bi bi-house-door-fill me-1"></i>
                <span className="d-none d-xl-block">Home</span>
            </Link>
            <Link to="/tuiter/explore" className={`list-group-item d-inline-flex justify-content-start
                    ${paths[2] === 'explore'?'active':''}`}>
                <i className="bi bi-hash me-1"></i>
                <span className="d-none d-xl-block">Explore</span>
            </Link>
            <Link to="#" className={`list-group-item d-inline-flex justify-content-start
                    ${active === 'notifications'?'active':''}`}>
                <i className="bi bi-bell-fill me-1"></i>
                <span className="d-none d-xl-block">Notifications</span>
            </Link>
            <Link to="#" className={`list-group-item d-inline-flex justify-content-start
                    ${active === 'messages'?'active':''}`}>
                <i className="bi bi-envelope-fill me-1"></i>
                <span className="d-none d-xl-block">Messages</span>
            </Link>
            <Link to="#" className={`list-group-item d-inline-flex justify-content-start
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="bi bi-bookmark-fill me-1"></i>
                <span className="d-none d-xl-block">Bookmarks</span>
            </Link>
            <Link to="#" className={`list-group-item d-inline-flex justify-content-start
                    ${active === 'lists'?'active':''}`}>
                <i className="bi bi-list-ul me-1"></i>
                <span className="d-none d-xl-block">Lists</span>
            </Link>
            <Link to="#" className={`list-group-item d-inline-flex justify-content-start
                    ${active === 'profile'?'active':''}`}>
                <i className="bi bi-person-fill me-1"></i>
                <span className="d-none d-xl-block">Profile</span>
            </Link>
            <Link to="#" className={`list-group-item d-inline-flex justify-content-start
                    ${active === 'more'?'active':''}`}>
                <i className="bi bi-three-dots me-1"></i>
                <span className="d-none d-xl-block">More</span>
            </Link>
        </div>
    );
};
export default NavigationSidebar;