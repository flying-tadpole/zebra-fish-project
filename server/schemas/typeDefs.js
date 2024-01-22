const typeDefs = `
    scalar Date

    type Lab {
        _id: ID
        pi: String
        protocols [String]
    }

    type Fish {
        _id: ID
        cageCard: String
        lab: ID
        strain: String
        location: {String}
        dateOfHatch: Date
    }

    type Query {
        labs: [Lab]
        fish: [Fish]
    }

    type Mutation {
        addLab(pi: String, protocols: [String]): Lab
        addFish(cageCard: String, lab: ID, strain: String, location: {String}, dateOfHatch: Date): Fish
    }
`;

module.exports = typeDefs