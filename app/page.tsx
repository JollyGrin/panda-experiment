import { css } from "@/styled-system/css";
import { styled } from "@/styled-system/jsx";

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
        <styled.button bg="blue">this is a button</styled.button>
      </div>
    </main>
  );
}
