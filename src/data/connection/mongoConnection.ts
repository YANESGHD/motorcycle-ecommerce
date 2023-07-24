import { connect } from "mongoose";


(async () =>{
// @ts-ignore
const connection = await connect(process.env.MONGODB_URI)

console.log({ mongoURI: process.env.MONGODB_URI, connection})
})()