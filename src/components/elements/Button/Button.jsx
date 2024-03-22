import PropTypes from "prop-types";
import "./Button.css";

export default function Button({ type, classname, children, onclick }) {
  return (
    <button type={type} className={classname} onClick={onclick}>
      {children}
    </button>
  );
}
Button.propTypes = {
  type: PropTypes.string,
  classname: PropTypes.string,
  children: PropTypes.node,
  onclick: PropTypes.func,
};
