import { PT_Serif } from "next/font/google";
import { createTheme } from "@mui/material/styles";
export const ptSerif = PT_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  display: "swap",
  fallback: ["Helvetica", "Arial", "sans-serif"],
});

declare module "@mui/material/styles" {
  interface TypographyVariants {
    primary: React.CSSProperties;
    secondary: React.CSSProperties;
  }
  interface TypographyVariantsOptions {
    primary?: React.CSSProperties;
    secondary?: React.CSSProperties;
  }
}

declare module "@mui/material/Typography" {
  interface TypographyPropsVariantOverrides {
    primary: true;
    secondary: true;
  }
}

let theme = createTheme({
  typography: {
    allVariants: {
      color: "white",
    },
    fontFamily: ptSerif.style.fontFamily,
    // body1: {
    //   fontFamily: ptSerif.style.fontFamily,
    // },
    // primary: {
    //   fontFamily: ptSerif.style.fontFamily,
    // },
    // secondary: {
    //   fontFamily: ptSerif.style.fontFamily,
    // },
  },
});

export default theme;
