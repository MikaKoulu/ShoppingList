import { gql } from "@apollo/client";


export default graphql(
    gql`
      mutation SignUp($name: String!, $pass: String!) {
        signup(name: $name, pass: $name) {
          _id
            name
        
        }
      }
    `,
    {
      props: ({ mutate }) => ({
        signup: (name, pass) => mutate({ variables: { name, pass } }),
      }),
    },
  )(Login);