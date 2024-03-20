import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';
const PriceOption = ({option}) => {
    const {name,price,features} =option;
    return (
        <div className='bg-blue-300 rounded-xl text-center px-5 py-3 mt-4'>
        <h1>
            <span className='text-6xl'>{price}</span>
            <span className='text-3xl'>/mon</span>
        </h1>
        <h2 className='text-2xl  mt-3 font-medium'>{name}</h2>
        <div>
        {
            features.map((feature,idx) =><Feature key={idx} feature={feature}></Feature>)
        }
        </div>
        <button className="py-2 rounded-xl bg-amber-300 text-xl font-semibold w-full px-4 border-2 duration-1000 border-[#e304e3] mt-2 hover:bg-amber-600 hover:text-white">Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;