import './Location.css'

const Location = (props) => {
    const {item} = props;
    return(
        <div className="loca">
            <div className="loca-img">
                <img src = {item.img}></img>
            </div>
            <div className="loca-city">
                <p>{item.city}</p>
            </div>
            <div className="loca-name">
                <h1>{item.loca}</h1>
            </div>
        </div>
    ) 
}

export default Location