module.exports = (sequelize, Sequelize) => {
    const CardData = sequelize.define("card_data", {
        name: {
            type: Sequelize.STRING
        },
        amount: {
            type: Sequelize.STRING
        },
        number: {
            type: Sequelize.STRING
        },
        cvv: {
            type: Sequelize.STRING
        },
        expMonth: {
            type: Sequelize.STRING
        },
        expYear: {
            type: Sequelize.STRING
        },
        country: {
            type: Sequelize.STRING
        },
        phoneNumber: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        }
    });

    return CardData;

    // const Tutorial = sequelize.define("test", {
    //     title: {
    //         type: Sequelize.STRING
    //     },
    //     description: {
    //         type: Sequelize.STRING
    //     },
    //     published: {
    //         type: Sequelize.BOOLEAN
    //     }
    // });

    //return Tutorial;
};