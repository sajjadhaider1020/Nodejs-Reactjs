
const Result = require('../models/result');

async function getUserResult(query) {
    
    try {
        
        let result = await Result.findOne( {
            RollNo: query.roll_no
        });
       
     
       return Promise.resolve(result)
    } catch (e) {
        console.log('Error', e)
       return Promise.reject('No Result Found')
    }
}

module.exports = { getUserResult }