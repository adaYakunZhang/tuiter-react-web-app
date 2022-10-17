
const WhoToFollowListItem = (who) => {
    return (`
        <li class="list-group-item">
             <div class="row">
                <div class="col-2 pe-0">
                    <img class="rounded-circle " src=${who.avatarIcon} width="100%"/>
                </div>
                <div class="col-7 ps-1">
                    <div class="fw-bolder">${who.userName} <i class="fas fa-check-circle"></i></div>
                    <div>${who.handleName}</div>
                </div>
                <div class="col-3 ps-0">
                    <button class="btn btn-primary rounded-pill mt-2">Follow</button>
                </div>
             </div>
        </li>     
    `);
}
export default WhoToFollowListItem;