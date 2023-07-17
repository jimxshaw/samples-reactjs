import ReactDOM from 'react-dom';
import { useEffect } from 'react';

function Modal({ onClose, children, actionBar }) {

  // When the Modal appears add this class to resolve
  // the overflow bug by preventing scrolling.
  useEffect(() => {
    document.body.classList.add('overflow-hidden');

    // Clean up function to remove the class when
    // the Modal is removed from the screen.
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, []);

  return ReactDOM.createPortal(
    <div>
      {/* Gray background */}
      <div className="fixed inset-0 bg-gray-300 opacity-80" onClick={onClose}></div>
      {/* Actual Modal */}
      <div className="fixed inset-40 p-10 bg-white">
        <div className="flex flex-col justify-between h-full">
          {children}
          <div className="flex justify-end">
            {actionBar}
          </div>
        </div>
      </div>
    </div>,
    document.querySelector('.modal-container')
  );
}

export default Modal;
