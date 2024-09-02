class Todo {
    id: string;
    text: string;

    constructor(todoText: string) {
        this.id = new Date().toISOString() //giusto per avere un id dinamico
        this.text = todoText
    }
}

export default Todo