
export class TodoList {
    constructor() {
        this.task = []
    }
    addTask(task) {
        this.task.push(task)
    }
    markTask(ind) {
        if(ind >= 0 && ind < this.task.length) {
            this.task[ind].completed = true
        }
    }
    allTask() {
        console.log(this.task)
    }
}

