import { gql } from "@apollo/client";

export const ADD_LAB = gql`
    mutation addLab(
        $pi: String
        $protocols: [String]
    )
`

export const ADD_FISH = gql`
    mutation addFish(
        $cageCard: String
        $lab: ID
        $strain: String
        $location: String
        $dateOfHatch: Date
    )
`