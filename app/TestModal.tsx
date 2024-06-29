"use client";

import { Modal } from "@/components/styled";
import { useRouter } from "next/navigation";
import { css } from "@/styled-system/css";

export const TestModal = () => {
  const router = useRouter();
  function onClose() {
    router.push("/");
  }
  return (
    <Modal onClose={onClose}>
      <div className={css({ p: "2rem" })}>
        <p>This is a modal with use client</p>
      </div>
    </Modal>
  );
};
