import React, { FC, PropsWithChildren, useCallback, useState } from "react";
import { Modal } from "antd";
import styles from "./modals.module.css";

interface ModalProps extends PropsWithChildren {
  title: React.ReactNode;
  isModalOpen: boolean;
  showModal: () => void;
  handleButtonOk: () => void;
  handleButtonCancel: () => void;
}

const CustomModal: FC<ModalProps> = ({
  title,
  children,
  isModalOpen,
  showModal,
  handleButtonCancel,
  handleButtonOk,
}) => {
  const handleShowModal = useCallback(() => {
    showModal();
  }, [showModal]);

  const handleOk = useCallback(() => {
    handleButtonOk();
  }, [handleButtonOk]);

  const handleCancel = useCallback(() => {
    handleButtonCancel();
  }, [handleButtonCancel]);

  return (
    <>
      <Modal
        title={title}
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        styles={{
          header: { backgroundColor: "blue", width: "100%", padding: "2rem" },
        }}
        style={{ padding: 0 }}
        className={styles.modal}
        width="80rem"
        footer={null}>
        {children}
      </Modal>
    </>
  );
};

export default CustomModal;
