
import { ConnectDB } from "@/lib/config/db";
import { NextResponse } from "next/server";
import TodoModel from "@/lib/models/TodoModel";

const LoadDB = async () => {
    try {
        await ConnectDB();
    } catch (error) {
        console.error("Database connection failed:", error);
    }
};

LoadDB();

export async function GET(request) {

    // try {
    //     const todos = await TodoModel.find({});
    //     return NextResponse.json({ msg: "GET method hit", data: todos });

    // } catch (error) {
    //     console.error("GET request failed:", error);
    //     return NextResponse.json({ msg: "GET request failed", error: error.message }, { status: 500 });
    // }

        const todos = await TodoModel.find({});
        return NextResponse.json({todos:todos})

}

export async function POST(request) {

    try {

        const { title, description } = await request.json();

        const newTodo = await TodoModel.create({
            title,
            description
        });

        return NextResponse.json({ msg: "Todo Created", data: newTodo });
        
    } catch (error) {
        console.error("POST request failed:", error);
        return NextResponse.json({ msg: "POST request failed", error: error.message }, { status: 500 });
        
    }

}

export async function PUT(request) {

    const mongoId = await request.nextUrl.searchParams.get('mongoId');

    await TodoModel.findByIdAndUpdate(mongoId, {
        $set:{
            isCompleted:true
        }
    });
    return NextResponse.json({ msg: "Todo Completed"});

}


// export async function DELETE(request) {
//     console.log('delete');
// }


export async function DELETE(request) {
    try {
        const mongoId = request.nextUrl.searchParams.get('mongoId');
        await TodoModel.findByIdAndDelete(mongoId);
        return NextResponse.json({ msg: "Todo Deleted" });
    } catch (error) {
        console.error("DELETE request failed:", error);
        return NextResponse.json({ msg: "DELETE request failed", error: error.message }, { status: 500 });
    }
}