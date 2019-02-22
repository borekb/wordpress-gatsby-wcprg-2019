import theme from "mdx-deck/themes";
import okaidia from 'react-syntax-highlighter/styles/prism/okaidia';
import prismTypeScript from 'react-syntax-highlighter/languages/prism/typescript'
import prismTsx from 'react-syntax-highlighter/languages/prism/tsx'


export default {
  ...theme,
  prism: {
    style: okaidia,
    languages: {
      typescript: prismTypeScript,
      tsx: prismTsx,
    }
  },
  css: {
    ...theme.css,

    // Fix for https://github.com/jxnblk/mdx-deck/issues/198
    "li ul, li ol": {
      fontSize: "0.9em"
    },
    "li > p": {
      fontSize: "1em",
      margin: 0
    },

    // Custom classes
    ".muted": {
      color: "#808080"
    },

    ".smaller": {
      fontSize: "0.8em"
    }
  }
};
