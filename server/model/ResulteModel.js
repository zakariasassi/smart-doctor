const mongoose = require('mongoose');
const Resulte = require('../schema/Resulte');


const resulte = mongoose.model("Resulte" , Resulte );


// async function addAdviceField() {
//     try {
//         console.log("Starting migration...");
//         // Add default advice for all existing documents
//         await resulte.updateMany({}, { $set: { advice: "" } });
    
//         console.log('Migration complete');
//         mongoose.disconnect();
//     } catch (error) {
//         console.error('Error during migration', error);
//         mongoose.disconnect();
//     }
// }

// addAdviceField();

module.exports = resulte;