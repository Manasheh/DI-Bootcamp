const form = document.getElementById('form')
const ul = document.getElementById('list-tasks')

form.addEventListener('submit', handleSubmit)
const tasks = []
let id = 0
function handleSubmit(e) {
    e.preventDefault()
    const formData = new FormData(form)
    const taskText = formData.get('task')
    if (taskText === '') return
    const task = generateTask(taskText) // make the user input an object
    tasks.push(task)
    renderTask(tasks)
    form.reset()
    // console.log(tasks);
}

function renderTask(tasks) {
    ul.innerHTML = ''
    for (const task of tasks) {
        const li = generateLi(task.text)
        ul.append(li)
    }
}

function generateLi(task) {
    const li = document.createElement('li')
    li.dataset.id = task.id
    const xMark = document.createElement('i')
    const span = document.createElement('span')
    span.innerText = task
    xMark.classList.add('fa-solid', 'fa-xmark')
    const checkBox = document.createElement('input')
    checkBox.addEventListener('click',function() {markTaskDone(task.id);})
    checkBox.setAttribute('type', 'checkbox')
    li.append(xMark, checkBox, span)
    return li
}

function markTaskDone(id) {
    console.log('Mark this task done');
    let li = document.querySelector(`[data-id = '${id}']`)
    // li?.classList.add('is-done')
    console.log(li);

}

function generateTask(text) {
    const task = {
        text: text,
        id: id,
        done: false
    }
    id++;
    return task
}