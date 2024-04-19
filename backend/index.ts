import express , {Request, Response} from "express";
import bodyParser from "body-parser";

type Todo = {
    id:number;
    title:string;
    checked:boolean
}

const port = 8888;
const app = express();

app.use(bodyParser.json());

const todos = [{id:1, title:"njnjn", checked:false},{id:2, title:"njnjn", checked:false},{id:3, title:"njnjn", checked:false}]

//get all
app.get("/", (req: Request, res:Response) =>{
    res.json(todos)
});

//create
app.post("/add", (req:Request, res:Response) =>{
    const {title} = req.body;
    const newTodo:Todo ={
        id: todos[todos.length - 1].id + 1,
        title,
        checked:false,
    };
    todos.push(newTodo)
    res.json(newTodo)
})

//get 1
app.get("/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const itemIndex = todos.findIndex((todo) => todo.id === Number(id));

    if (itemIndex === -1) {
        res.json("Item is not found");
    } else {
        const specificTodo = todos[itemIndex];
        res.json(specificTodo);
    }
});

//edit
app.put("/edit/:id", (req:Request, res:Response) =>{
    const {id} = req.params
    const {title, checked} = req.body
    const updateIndex = todos.findIndex((todo) =>todo.id === Number(id))
    if(updateIndex === -1){
        res.json("item not found")
    }else{
        const updateTodo = {...todos[updateIndex], title, checked}
        todos[updateIndex] = updateTodo
        res.json(updateTodo)
    }  
})

// Delete a todo by ID
app.delete("/delete/:id", (req: Request, res: Response) => {
    const { id } = req.params;
    const deleteIndex = todos.findIndex((todo) => todo.id === Number(id));

    if (deleteIndex === -1) {
        res.json("Item not found");
    } else {
        // Remove one element at the specified index
        const deletedTodo = todos.splice(deleteIndex, 1)[0];
        res.json(deletedTodo);
    }
});



app.listen(port, () =>{
    console.log(`Server running on port http://localhost:${port}`)
});