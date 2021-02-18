import PropTypes from "prop-types";
import { useLocation } from "react-router-dom";
import BIPButton from "./BIPButton/BIPButton";

const Header = ({ title, onAdd, showAdd }) => {
  const location = useLocation();

  return (
    <header className='header'>
      {/* <h1 style={headinsgStyle}>{title}</h1> */}
      <h1>{title}</h1>
      {location.pathname === "/" && (
        <BIPButton
          color={showAdd ? "grey" : "green"}
          text={showAdd ? "Close" : "Add Task"}
          onClick={onAdd}
        />
      )}
    </header>
  );
};

Header.defaultProps = {
  title: "Default Title",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

// CSS IN REACT INLINE EXAMPLE
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header;
