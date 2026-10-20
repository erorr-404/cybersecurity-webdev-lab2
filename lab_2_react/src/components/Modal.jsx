import { useEffect, useRef } from "react";
import { Heading3 } from "./Headings";

export function Modal({ heading, children }) {
  const dialogRef = useRef(null);

  const openModal = () => dialogRef.current.showModal();
  const closeModal = () => dialogRef.current.close();

  useEffect(() => {
    if (dialogRef.current && !dialogRef.current.open) {
      const timer = setTimeout(openModal, 60000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <dialog
      ref={dialogRef}
      className="m-auto backdrop:backdrop-blur-3xl shadow-xl/30 bg-transparent text-body"
      onClick={(e) => {
        if (e.target === dialogRef.current) {
          closeModal();
        }
      }}
    >
      <div className="rounded-lg  border border-border bg-panel px-4 py-6 flex flex-col justify-center">
        <button
          onClick={closeModal}
          className="max-w-full break-all rounded-md border border-control-border bg-control px-3 py-1 text-sm text-control-text transition-colors hover:border-accent hover:bg-control-hover hover:text-white self-end"
        >
          х
        </button>
        <Heading3>{heading}</Heading3>
        {children}
      </div>
    </dialog>
  );
}
