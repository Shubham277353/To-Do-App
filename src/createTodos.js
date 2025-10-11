export default class CreateTodo{
    constructor(title, description, dueDate,priority ){
        this.title = title ;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    printInfo(){
        console.log(`${this.title} - ${this.dueDate}`);
    }
}
