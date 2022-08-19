import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    L_SectionBgColor: string;
    R_SectionBgColor: string;
    textColor: string;
    CalenderTitleColor: string;
  }
}
