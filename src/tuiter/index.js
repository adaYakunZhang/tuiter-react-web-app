import NavigationSidebar from "./NavigationSidebar";
import WhoToFollowList from "./who-to-follow-list";
import ExploreComponent from "./explore";
// import HomePostList from "./home/home-post-list";
import {Routes, Route} from "react-router";
import whoReducer from "./reducers/who-reducer";
import tuitsReducer from "./reducers/tuits-reducer";
import profileReducer from "./reducers/profile-reducer";
import {configureStore} from "@reduxjs/toolkit";
import {Provider} from "react-redux";
import HomeComponent from "./home";
import ProfileComponent from "./profile";
import EditProfile from "./edit-profile";

const store = configureStore(
    {reducer: {who: whoReducer, tuits: tuitsReducer, profile: profileReducer, tuitsData: tuitsReducer}}
);

function Tuiter() {
    // const { pathname } = useLocation(); Redirect from="/:url*(/+)" to={pathname.slice(0, -1)}
    return(
        <Provider store={store}>
            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar/>
                    <button className="btn btn-primary w-100 mt-2 rounded-pill">Tuit</button>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    <Routes>
                        <Route index    element={<HomeComponent/>}/>
                        <Route path="home"    element={<HomeComponent/>}/>
                        <Route path="explore" element={<ExploreComponent/>}/>
                        <Route path="profile" element={<ProfileComponent/>}/>
                        <Route path="edit-profile" element={<EditProfile/>}/>
                    </Routes>
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    )
}
export default Tuiter;