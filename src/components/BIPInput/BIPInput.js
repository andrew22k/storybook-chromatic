import PropTypes from 'prop-types'
import './BIPInput.css'

const BIPInput = ({ size = 'medium', ...rest }) => {
  return <input className={`input ${size}`} {...rest} />
}

export default BIPInput
