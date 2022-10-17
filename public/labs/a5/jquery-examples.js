function clickMe() {
    alert('thanks for clicking me!')
}

function clickMeToo() {
    alert('thanks for clicking me too!')
}

const todoItems = [
    'Make breakfast',
    'Walk dogs',
    'Make dinner',
    'Take shower',
    'Watch a movie',
    'Go to bed'
]

function init() {

    const renderTodos = (todos) => {
        const todoList = $('#todo')
        todoList.empty()
        todos.forEach((item, index) => {
            const newTodoItem = $(`
                <li>
                    <button id="${index}" class="delete">X</button>
                    ${item}
                </li>
            `)
            todoList.append(newTodoItem)
        })
    }
    renderTodos(todoItems)

    const addTodo = () => {
        const todoText = $('#new-todo').val()
        todoItems.push(todoText)
        renderTodos(todoItems)
    }

    $('#add-todo').click(addTodo)

    $('#todo').on('click', '.delete', (event) => {
        const target = $(event.target)
        const index = target.attr('id')
        console.log(target)
        todoItems.splice(index, 1)
        renderTodos(todoItems)
    })

    const hello = document.getElementById("hello")
    hello.style.color='red'
    hello.innerHTML = 'Hello There How are you?'


/*
    const walkDogs = $('<li>Walk dogs</li>')
    todoList.append(walkDogs)
    const makeDinner = $('<li>Make dinner</li>')
    todoList.append(makeDinner)
    const makeBreakfast = $('<li>Make breakfast</li>')
    todoList.prepend(makeBreakfast)
*/

    $('#click-me-too').click(clickMeToo);

    $('#clickToToggle').click(() => {
        $('#hideMe').toggle()
    })

    $('#clickToHide').click(() => {
        $('#hideMe').hide()
    })

    $('#clickToShow').click(() => {
        $('#hideMe').show()
    })
    /*
    const hello2 = $("#hello") /!* $ is an alias to the jQuery function*!/
    hello2.css({
        'color': 'blue',
        'background-color': 'yellow'
    })
    */

    const hello2 = $("#hello")
        .css({
            'color': 'blue',
            'background-color': 'yellow'
        })
        .html('Hey, how are you doing?')
}
jQuery(init)