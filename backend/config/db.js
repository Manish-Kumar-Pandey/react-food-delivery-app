import mongoose from "mongoose";

export const connectDB = async() => {
    await mongoose.connect('mongodb+srv://manish:kbcwjibojjs6238@cluster0.l9xp2ew.mongodb.net/food-del').then(()=>console.log("DB Connected"))
}