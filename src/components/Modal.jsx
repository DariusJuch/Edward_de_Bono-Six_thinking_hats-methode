const Modal = ({ children, modalName, style, items }) => {

  return (
    <div>
      <dialog id={modalName} className="modal">
        <div className={`modal-box w-auto max-w-[90vw] max-h-[90vh] ${style}`}>
          <form method="dialog">
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <div>
            {children}
            <div className=" flex flex-nowrap justify-center p-6">
            <ul style={{ listStyleType: 'disc', textAlign: 'left' }}>
                {items && items.length > 0 ? (
                  items.map((item, index) => (
                    <li key={index}>
                      <p>{item}</p>
                    </li>
                  ))
                ) : (
                  <li>
                    <p>No content</p>
                  </li>
                )}
              </ul>
            </div>
          </div>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Modal;
