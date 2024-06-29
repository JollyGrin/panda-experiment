"use client";
import { Button } from "@/components/styled";
import { useRouter } from "next/navigation";

export const ModalButton = () => {
  const router = useRouter();

  function openModal() {
    router.push("?modal=true");
  }

  return <Button onClick={openModal}>Hello</Button>;
};
