import { gql } from "@apollo/client";

export const ADD_LAB = gql`
    mutation addLab(
        $pi: String
        $protocols: [String]
    )
`