import BIPButton from "./BIPButton/BIPButton";
import PropTypes from "prop-types";
import { CSSTransition } from "react-transition-group";

const Modal = (props) => {
  return (
    <CSSTransition
      in={props.show}
      unmountOnExit
      timeout={{ enter: 0, exit: 300 }}
    >
      <div className='modal' onClick={props.onClose}>
        <div className='modal-content' onClick={(e) => e.stopPropagation()}>
          <div className='modal-header'>
            <h4 className='modal-title'>{props.title}</h4>
          </div>
          <div className='modal-body'>{props.children}</div>
          <div className='modal-footer'>
            <BIPButton
              onClick={props.onClose}
              color='gray'
              text='Close Modal'
            />
          </div>
        </div>
      </div>
    </CSSTransition>
  );
};

Modal.defaultProps = {
  title: "Modal Title",
  children: "Modal Content",
};

Modal.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};

export default Modal;
