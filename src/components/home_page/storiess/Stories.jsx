import { CiLocationArrow1 } from 'react-icons/ci';
import './Stories.css'
import { GoDotFill } from "react-icons/go";

const Stories = (props) => {
    const { item } = props;
    return (
        <div className='stories'>
            <div className='str-img'>
                <img src={item.img}></img>
            </div>
            <div className='str-infor'>
                <div className='str-location'>
                    <p>{item.location}</p>
                </div>
                <div className='str-time'>
                    <p>{item.time} <GoDotFill /> {item.read}</p>
                </div>
            </div>
            <div className='str-title'>{item.title}</div>
            <div className='str-short'>{item.short}</div>
            <a href=''>Read Full Post <CiLocationArrow1/></a>
        </div>
    )
}

export default Stories