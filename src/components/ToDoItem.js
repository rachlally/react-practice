



export default function ToDoItem({ todo }) {
    console.log(todo)

    return (
        <div className="m-3 p-3" >
            <ul className="list-group list-group-flush" >
                <h4 className="list-group-item bg-dark text-white">{todo}</h4>
            </ul>
        </div>
    )

}