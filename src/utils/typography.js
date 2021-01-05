// https://www.gatsbyjs.com/docs/tutorial/part-three/#-install-and-configure-gatsby-plugin-typography
// https://github.com/KyleAMathews/typography.js/tree/master/packages/typography-theme-github

import Typography from "typography";
import githubTheme from "typography-theme-github";

const typography = new Typography(githubTheme);

export const { scale, rhythm, options } = typography;
export default typography;