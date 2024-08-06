import mongoose from "mongoose";

export const ConnectDB = async () => {    

    try {
        await mongoose.connect('mongodb+srv://kjananga1st:xyz0921ABC@cluster0.rx45v6z.mongodb.net/todo-app',{
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("DB Connected");
    } catch (error) {
        console.error("DB Connection Error:", error);
        process.exit(1);
    }
};