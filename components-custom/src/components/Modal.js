import ReactDOM from 'react-dom';

function Modal({ onClose }) {
  return ReactDOM.createPortal(
    <div>
      {/* Gray background */}
      <div className="absolute inset-0 bg-gray-300 opacity-80" onClick={onClose}></div>
      {/* Actual Modal */}
      <div className="absolute inset-40 p-10 bg-white">
        This is the Modal
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
