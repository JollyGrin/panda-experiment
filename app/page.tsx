import { css } from "@/styled-system/css";
import { styled, Box, LinkOverlay } from "@/styled-system/jsx";
import { Button, button } from "@/components/styled";

export default function Home() {
  return (
    <main>
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
        <Button visual="outline" size="lg">
          JSX
        </Button>

        <Button visual="disabled" size="lg">
          JSX
        </Button>
        <button className={button({ visual: "solid", size: "lg" })}>
          function
        </button>
      </div>
    </main>
  );
}
