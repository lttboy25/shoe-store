
const Spinner = ({
  color = 'text-dark',
  className = ''
}) => {
  return (
    <div className={`spinner-border text-${color} ${className}`} role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
};

export default Spinner;