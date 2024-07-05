import { useNavigate } from 'react-router-dom';
import './Country.css'

const Country = (props) => {
    const { item } = props;
    const nav = useNavigate()
    const handleClick = () => {
        if(item.name === 'Vietnam'){
            return nav('/destination/vietnam')
        }
    }
    return (
        <div className='country' onClick={handleClick}>
            <div className='img'><img src={item.img}></img></div>
            <div className='region'>{item.region}</div>
            <div className='name'>{item.name}</div>
        </div>
    )
}

export default Country