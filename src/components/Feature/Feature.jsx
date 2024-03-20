import PropTypes from 'prop-types';
import { AiFillCheckCircle } from "react-icons/ai";
const Feature = ({feature}) => {
    return (
        <div>
            <p className=' text-left py-1 flex items-center gap-2'> <AiFillCheckCircle className='text-2xl text-green-700' />{feature}</p>
        </div>
    );
};
Feature.propTypes={
    feature:PropTypes.string
}

export default Feature;