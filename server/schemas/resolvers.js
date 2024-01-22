const { Fish, Lab } = require("../models")

const resolvers = {
    Query: {
        //get all labs
        labs: async () => {
            return Lab.find()
        },
        //get all fish
        fish: async () => {
            return Fish.find()
        }
    },
    Mutation: {
        //add a lab
        addLab: async (
            parent, 
            { pi, protocols }
            ) => {
                const lab = await Lab.create({
                    pi,
                    protocols
                });
                return lab
        },
        addFish: async (
            parent,
            { cageCard, lab, strain, location, dateOfHatch }
            ) => {
                const fish = await Fish.create({
                    cageCard,
                    lab,
                    strain,
                    location,
                    dateOfHatch
                });
                return fish
        }
    }
}

module.exports = resolvers