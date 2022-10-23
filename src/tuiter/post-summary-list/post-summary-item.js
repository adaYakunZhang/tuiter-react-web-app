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
                    <div className="text-secondary">{post.topic}</div>
                    <div className="fw-bolder">{post.userName} <i className="bi bi-check-circle-fill"></i> <span className="fw-normal text-secondary">- {post.time}</span></div>
                    <div className="fw-bolder">{post.title}</div>
                    {/*<div className="text-secondary">${post.tweets}</div>
                    <div>{post.userName} . {post.time}</div>
                    <div className="fw-bolder">{post.topic}</div>
                    <div>{post.title}</div>*/}
                </div>
                <div className="col-2">
                    <img width={70} className="float-end rounded-3" src={post.image}/>
                </div>
            </div>
        </li>
    );
};
export default PostSummaryItem;