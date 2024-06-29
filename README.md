This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Test Panda: What do i want to learn?

- [ ] install google fonts
- [ ] component styles (similar to chakra)
- [ ] modal useDisclosure props
- [ ] responsive styling


# Notes

### Unable to have both object & template literal notation
It seems I can only use one or the other. This is a setting enabled in the `panda.config.js` under the `syntax` option

### jsx styled enables similar chakra experience
can get a similar chakra like experience with styled jsx

```
import { styled } from "@/styled-system/jsx";


<styled.button bg="blue">this is a button</styled.button>
```

### proper import
ensure that in the panda config, that you specify any folders that include styles

  ```
  include: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./app/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
  ],
  ```

### modal alternative
creating a modal requires some initial setup.

1) create the background
```
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

```
2) create the content container
```
export const ModalContent = styled("div", {
  base: {
    bg: "white",
    borderRadius: "8px",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
  },
});
```
3) wrap the dom elements

the critical element to get the close to only toggle on the dark background: 
`e.target === e.currentTarget`


```
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
```

