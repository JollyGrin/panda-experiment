import { ReactNode } from "react";
import { modal, ModalContent } from ".";

export const Modal = (props: { children: ReactNode; onClose: () => void }) => {
  return (
    <div
      className={modal()}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          props.onClose();
        }
      }}
    >
      <ModalContent>{props.children}</ModalContent>
    </div>
  );
};
