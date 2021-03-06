import { useTranslation } from "react-i18next";

import {
  Box,
  ChakraProvider,
  Code,
  Grid,
  Link,
  Text,
  theme,
  VStack,
} from "@chakra-ui/react";

import ColorModeSwitcher from "./ColorModeSwitcher";
import Logo from "./Logo";

export default function App() {
  const { t } = useTranslation();
  return <ChakraProvider theme={theme}>
    <Box fontSize="xl" textAlign="center">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
          <Link
            color="teal.500"
            fontSize="2xl"
            href="https://chakra-ui.com"
            rel="noopener noreferrer"
            target="_blank"
          >
            {t("home.demo.learn")}
          </Link>
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>;
}
