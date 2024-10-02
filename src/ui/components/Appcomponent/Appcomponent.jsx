import './Appcomponent.css';

const Appcomponent = ({ appTitle, d, viewBox }) => {
  return (
    <div className="appWrapper" onClick={() => handleClick({ appTitle })}>
      <div className="appIcon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox={viewBox}
          className="icon"
        >
          <path fill="currentColor" d={d} />
        </svg>
      </div>
      <p className="appTitle">{appTitle}</p>
    </div>
  );
};

export { Appcomponent };
