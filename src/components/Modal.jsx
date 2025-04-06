import { ReactNode } from "react";

const Modal = ({ children, modalName, style }) => {
  return (
    <div>
      <dialog id={modalName} className="modal">
        <div className={`modal-box w-auto max-w-[90vw] max-h-[90vh] ${style}`}>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>{children}</div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;