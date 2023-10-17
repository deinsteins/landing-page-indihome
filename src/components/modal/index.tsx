import { ReactNode } from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  const modalClasses = isOpen ? "block" : "hidden";
  const overlayClasses = isOpen ? "opacity-100" : "hidden";

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 ${overlayClasses} transition-opacity duration-300`}
    >
      <div
        className={`bg-white rounded-lg text-sm shadow-lg p-4 ${modalClasses}`}
      >
        <div className="flex justify-end">
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-gray-700 focus:outline-none"
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
