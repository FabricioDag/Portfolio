import './SettingsModal.css';

const SettingsModal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;

  return (
    <div className="modalBg" onClick={onClose}>
      <div className="modalWrapper">
        <h3 className="modalTitle">{title}</h3>

        <div className="modalChildren" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>

        <div className="modalButton" onClick={onClose}>
          Ok
        </div>
      </div>
    </div>
  );
};

export { SettingsModal };
