import React from "react";
import { graphql } from "gatsby";

export default ({ data }) => (
  <>
    <div dangerouslySetInnerHTML={{ __html: data.wordpressPost.content }} />
    <footer>{data.site.siteMetadata.footerContent}</footer>
  </>
);

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
