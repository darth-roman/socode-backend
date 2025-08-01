import {connect} from "mongoose";

const DBConnection = async (database) => {
    try {
        await connect(`mongodb://localhost:27017/${database}`)
        console.log(`Connected to ${database}`);
    } catch (error) {
        console.log(error);
    }
}

export default DBConnection