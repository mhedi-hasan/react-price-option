import PropTypes from 'prop-types';
const Link = ({route}) => {
    return (
        <li >
            <a href={route.path}>{route.name}</a>
        </li>
    );
};
Link.propTypes={
    route:PropTypes.object.isRequired
}

export default Link;