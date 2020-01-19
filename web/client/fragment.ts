import gql from "graphql-tag";

export const fragment = gql`
  fragment me on Me {
    me
  }
`;