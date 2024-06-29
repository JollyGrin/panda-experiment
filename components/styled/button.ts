import { cva } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

export const button = cva({
  base: {
    display: "flex",
    bg: "red.600",
    cursor: "pointer",
  },

  variants: {
    visual: {
      solid: { bg: "red.200", color: "white" },
      outline: { borderWidth: "1px", borderColor: "red.200", bg: "blue" },
      disabled: { opacity: 0.5, cursor: "not-allowed" },
    },
    size: {
      sm: { padding: "4", fontSize: "12px" },
      lg: { padding: "8", fontSize: "24px" },
    },
  },
});

export const Button = styled("button", button);
