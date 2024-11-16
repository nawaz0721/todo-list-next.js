
const todos = []

export async function GET(request) {
    return new Response(
        JSON.stringify({
            data: todos,
            msg: "Todos fetched Successfully"
        })
    );
}

export async function POST(request) {
    try {
        const data = await request.json(); // Ensure valid JSON
        if (!data || Object.keys(data).length === 0) {
            return new Response(
                JSON.stringify({
                    msg: "No data provided"
                }),
                { status: 400 }
            );
        }
        
        const obj = {
            ...data,
            isCompleted: false,
            id: todos.length + 1,
        }
        todos.push(obj);
        console.log("data from backend=>", data);

        return new Response(
            JSON.stringify({
                data: todos,
                msg: "Todo Added Successfully"
            })
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                msg: "Invalid JSON input",
                error: error.message
            }),
            { status: 400 }
        );
    }
}

export async function PUT(request) {
    try {
        const data = await request.json();
        if (!data || !data.id) {
            return new Response(
                JSON.stringify({
                    msg: "Invalid data"
                }),
                { status: 400 }
            );
        }

        const todoInd = todos.findIndex((todo) => todo.id === data.id);
        if (todoInd === -1) {
            return new Response(
                JSON.stringify({
                    msg: "Todo not found"
                }),
                { status: 404 }
            );
        }

        todos[todoInd] = data;
        return new Response(
            JSON.stringify({
                data: todos,
                msg: "Todo Updated Successfully"
            })
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                msg: "Invalid JSON input",
                error: error.message
            }),
            { status: 400 }
        );
    }
}

export async function DELETE(request) {
    try {
        const data = await request.json();
        if (!data || !data.id) {
            return new Response(
                JSON.stringify({
                    msg: "Invalid data"
                }),
                { status: 400 }
            );
        }

        const todoInd = todos.findIndex((todo) => todo.id === data.id);
        if (todoInd === -1) {
            return new Response(
                JSON.stringify({
                    msg: "Todo not found"
                }),
                { status: 404 }
            );
        }

        todos.splice(todoInd, 1);
        return new Response(
            JSON.stringify({
                data: todos,
                msg: "Todo Deleted Successfully"
            })
        );
    } catch (error) {
        return new Response(
            JSON.stringify({
                msg: "Invalid JSON input",
                error: error.message
            }),
            { status: 400 }
        );
    }
}
