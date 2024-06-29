import { cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export * from "./Modal";

export const modal = cva({
  base: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    bg: "rgba(0, 0, 0, 0.5)",
    zIndex: 1000,
  },
});

export const ModalContent = styled("div", {
  base: {
    bg: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
});
