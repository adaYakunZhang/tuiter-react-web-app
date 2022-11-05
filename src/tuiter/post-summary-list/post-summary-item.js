import React from "react";
const PostSummaryItem = (
    {
        post = {
            "topic": "Web Development",
            "userName": "ReactJS",
            "time": "2h",
            "title": "React.js is a component based front end library that makes it very easy to build Single Page Applications or SPAs",
            "image": "../../images/react2.jpg"
        }
    }
) => {
    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-10">
                    <div className="text-secondary">{post.userName}<span className="fw-normal text-secondary"> • {post.time}</span></div>
                    <div className="fw-bolder">{post.topic} </div>
                    <div>{post.title}</div>
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={post.image} alt="..."/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;