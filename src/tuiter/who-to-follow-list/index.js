import React from "react";
import whoArray from "./who.json";
import WhoToFollowListItem from "./who-to-follow-list-item.js";

const WhoToFollowList = () => {
    return (
            <ul class="list-group">
                <li class="list-group-item"><h3>Who to follow</h3></li>
                {
                    whoArray.map(who =>
                        <WhoToFollowListItem
                            key={who._id}
                            who={who}/>
                    )
                }

            </ul>
    );
}
export default WhoToFollowList;