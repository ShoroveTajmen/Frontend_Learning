import PropTypes from 'prop-types';
import { FaClipboardCheck } from "react-icons/fa";



const Feature = ({feature}) => {
    return (
        <div>
            <p className='flex items-center'><FaClipboardCheck className='text-yellow-500 mr-2'></FaClipboardCheck>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;