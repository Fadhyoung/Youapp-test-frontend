import ReactDOM from 'react-dom';

const Modal = ({ showModal, onClose, message }) => {
  if (!showModal) return null;

  return ReactDOM.createPortal(
    <div className="w-full h-screen p-10 fixed z-50 left-0 top-0 flex items-center justify-center bg-modal text-center transition-opacity duration-300">
      <div className="p-10 flex flex-col gap-10 items-center text-white-33 rounded-lg border border-white-22 bg-secondary">
        <p className='text-xl'>{message}</p>
        <button className='px-6 py-2 rounded-md foreground2 hover:scale-125 transition-transform duration-300' onClick={onClose}>Close</button>
      </div>
    </div>,
    document.getElementById('modal-root')
  );
};

export default Modal;
