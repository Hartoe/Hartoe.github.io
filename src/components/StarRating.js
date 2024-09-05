import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

export default function StarRating({rate}) {
    return (
        <span className='star-rating'>
            <FontAwesomeIcon className='star' icon={faStar} color={rate >= 1 ? 'gold' : 'gray'}/>
            <FontAwesomeIcon className='star' icon={faStar} color={rate >= 2 ? 'gold' : 'gray'} />
            <FontAwesomeIcon className='star' icon={faStar} color={rate >= 3 ? 'gold' : 'gray'} />
        </span>
    );
}