import HomePosts from "./HomePosts.js";
import PostItem from "./PostItem.js";

const PostList = () => {
    return (`
            <ul class="list-group">
                ${
                    HomePosts.map(homepost => {
                        return(PostItem(homepost));
                    }).join('')
                 }                            
            </ul>
    `);
}
export default PostList;