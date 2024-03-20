import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li className='hover:bg-green-700 duration-1000 hover:text-white px-2 py-1 rounded-lg cursor-pointer'>
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes={
    route:PropTypes.object.isRequired
}

export default Link;