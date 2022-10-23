import './index.css';

function Classes() {
    const color = 'blue';
    const dangerous = true;
    const dangerous2 = false;
    return (
        <div>
            <h2>Classes</h2>
            <div className={`${dangerous2 ? 'wd-bg-red' : 'wd-bg-green'}
                                              wd-fg-black wd-padding-10px`}>
                Not dangerous background
            </div>
            <div className={`${dangerous ? 'wd-bg-red' : 'wd-bg-green'}
                                            wd-fg-black wd-padding-10px`}>
                Dangerous background
            </div>
            <div className={`wd-bg-${color} wd-fg-black wd-padding-10px`}>
                Dynamic Blue background
            </div>
        </div>
    )
};
export default Classes;