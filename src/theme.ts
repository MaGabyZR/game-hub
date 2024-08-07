import { extendTheme, ThemeConfig } from "@chakra-ui/react"; //to customize the default theme

const config: ThemeConfig= {
    initialColorMode: 'dark'
};

const theme = extendTheme({ config });

export default theme;