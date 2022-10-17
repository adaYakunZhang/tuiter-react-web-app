import PostSummaryList from "../PostSummaryList/index.js";

const MainExploreComponent = () => {
    return(`
    <div class="row">
                <div class="col-11">
                    <span class="position-absolute zindex-bring-to-front"><i class="fas fa-search"></i></span>
                    <input class="ps-5 form-control rounded-pill mb-2" placeholder="Search Tuiter" id="search"/>
                </div>
                <div class="col-1 mt-1 float-end">
                    <i class="fas fa-cog fa-2x text-primary"></i>
                </div>
            </div>
            <ul class="nav nav-tabs mb-2">
                <li class="nav-item">
                    <a class="nav-link active" href="for-you.html">For you</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="trending.html">Trending</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="news.html">News</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="sports.html">Sports</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="entertainment.html" tabindex="-1">Entertainment</a>
                </li>
            </ul>

            <div class="position-relative">
                <img src="../../images/starship.jpg" class="card-img-bottom" width="100%"/>
                <h3 class="position-absolute bottom-0 left-0 text-white">SpaceX's Starship</h3>
            </div>
            ${PostSummaryList()}
    `);
}
export default MainExploreComponent;