/* eslint-disable @typescript-eslint/no-explicit-any */
import React, {
  ReactNode,
  cloneElement,
  createContext,
  useContext,
  useState,
} from "react";
import { Modal as AntModal, ModalProps as AntModalProps } from "antd";

interface ModalProps {
  children?: ReactNode;
}

interface OpenProps {
  children?: any;
  opens: string;
}

interface WindowProps extends AntModalProps {
  children: any;
  name: string;
}

const ModalContext = createContext({
  openName: "",
  close: () => {},
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  open: (_: string) => {},
});

const Modal = ({ children }: ModalProps) => {
  const [openName, setOpenName] = useState("");

  const close = () => setOpenName("");
  const open = setOpenName;

  return (
    <ModalContext.Provider value={{ openName, close, open }}>
      {children}
    </ModalContext.Provider>
  );
};

function Open({ children, opens: opensWindowName }: OpenProps) {
  const { open } = useContext(ModalContext);

  return cloneElement(children, {
    onClick: () => open(opensWindowName),
  });
}

function Window({ children, name, ...restProps }: WindowProps) {
  const { openName, close } = useContext(ModalContext);

  return (
    <AntModal
      {...restProps}
      destroyOnClose
      open={name === openName}
      onCancel={close}
    >
      <div>{cloneElement(children, { onCloseModal: close })}</div>
    </AntModal>
  );
}

Modal.Open = Open;
Modal.Window = Window;

export default Modal;
