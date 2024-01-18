import {
    BundledLanguage,
    StringLiteralUnion,
    SpecialLanguage,
    BundledTheme,
    ThemeRegistration,
    ThemeRegistrationRaw,
  } from "shikiji";
  
  export type Theme =
    | ThemeRegistration
    | ThemeRegistrationRaw
    | StringLiteralUnion<BundledTheme, string>;
  
  export interface CodeProps {
    code: string;
    lang: StringLiteralUnion<BundledLanguage | SpecialLanguage, string>;
    options?: {
      prepareThemes?: StringLiteralUnion<BundledTheme, string>[] | undefined;
      showLineNumbers?: boolean;
      theme?: Theme;
    };
    styles?: {
      width?: string;
      maxWidth?: string;
      maxHeight?: string;
      fontFamily?: string;
      fontSize?: string;
    };
  }