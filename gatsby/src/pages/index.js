import React, { useEffect } from "react";
import { graphql } from "gatsby";

function transformData(htmlString) {
  const separator = `<hr class="wp-block-separator"/>`;
  const sections = htmlString.split(separator);

  return `
    <div class="reveal">
      <div class="slides">
        ${sections.map(section => `<section>${section}</section>`).join("\n\n")}
      </div>
    </div>
  `;
}

export default ({ data }) => {
  const transformedData = transformData(data.wordpressPost.content);

  useEffect(() => {
    window.Reveal.initialize();
  });

  return (
    <>
      <div id="intro">
        <button onClick={run}>Spustit prezentaci</button>
        <hr />
        <footer>{data.site.siteMetadata.footerContent}</footer>
      </div>
      <div
        id="presentationHolder"
        dangerouslySetInnerHTML={{ __html: transformedData }}
      />
    </>
  );

  function run() {
    const presentationDiv = document.querySelector(".reveal");
    document.getElementsByTagName("body")[0].appendChild(presentationDiv);
    document.getElementById("intro").style.display = "none";
  }
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        footerContent
      }
    }
    wordpressPost(slug: { eq: "presentation" }) {
      title
      content
    }
  }
`;
