import PropTypes from 'prop-types'
import './BIPButton.css'

const BIPButton = ({
  color,
  text,
  onClick,
  variant = 'primary',
  children,
  ...rest
}) => {
  return (
    <button
      onClick={onClick}
      className={`btn ${variant}`}
      style={{ backgroundColor: color }}
      {...rest}
    >
      longgggg {text} {children}
    </button>
  )
}

BIPButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  onClick: PropTypes.func,
}

export default BIPButton
