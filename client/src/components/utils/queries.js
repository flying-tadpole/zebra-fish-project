import { gql } from "@apollo/client";

export const QUERY_LABS = gql`
    query allLabs {
        labs {
            _id
            pi
            protocols
        }
    }
`