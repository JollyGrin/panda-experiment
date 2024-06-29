"use client";

import { css } from "@/styled-system/css";
import { Box } from "@/styled-system/jsx";
import { Button, button } from "@/components/styled";
import { useState } from "react";
import { modal, ModalContent } from "@/components/styled/modal";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <main style={{ position: "relative" }}>
      {isOpen && (
        <div
          className={modal()}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
        >
          <ModalContent>
            <Box bg="red" w="400px" h="600px">
              <p>dhjska</p>
            </Box>
          </ModalContent>
        </div>
      )}
      <div>
        <div
          className={css({
            display: "flex",
            flexDirection: "column",
            bg: "red",
            w: "10rem",
            h: "10rem",
          })}
        >
          <p>hi</p>

          <p>hi</p>
        </div>
        <Box>Hello</Box>
        <Button visual="outline" size="lg" onClick={() => setIsOpen(true)}>
          JSX
        </Button>

        <Button
          disabled={true}
          visual="disabled"
          size="lg"
          onClick={() => setIsOpen(true)}
        >
          JSX
        </Button>
        <button className={button({ visual: "solid", size: "lg" })}>
          function
        </button>
      </div>
    </main>
  );
}
