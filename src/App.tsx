import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
// 外部からインポートしたモノとローカルにファイルの間に一行開けておくと後から追いやすい
import theme from "./theme/theme";
import { Router } from "./router/Router";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
