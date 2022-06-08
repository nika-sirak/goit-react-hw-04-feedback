import PropTypes from 'prop-types';

  
function Section({ title, children}) {
  return (
    <>
      <h1>{title}</h1> 
      {children}
    </>
  )
}
Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node,
};
  
export default Section