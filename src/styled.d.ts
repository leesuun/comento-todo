import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    SectionColor_R: string;
    SectionColor_L: string;
    BasicColor: string;
    textColor: string;
  }
}
