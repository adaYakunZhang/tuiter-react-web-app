import React from "react";
import homeposts from './homeposts.json';
import HomePostItem from "./home-post-item";

    const HomePostList = () => {
    return(
        <ul className="list-group">
            {
                homeposts.map(homepost =>
                    <HomePostItem
                        key={homepost._id} homepost={homepost}/> )
            }
        </ul>
    );
};
export default HomePostList;