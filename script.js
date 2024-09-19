// Adicionar tarefa
document.querySelector('#task-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const taskInput = document.querySelector('#task-input');
    if (taskInput.value !== '') {
        addTask(taskInput.value);
        taskInput.value = ''; // Limpar campo de input
    }
});

function addTask(task) {
    const li = document.createElement('li');
    li.textContent = task;
    
    // Botão de excluir tarefa
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'X';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', function() {
        this.parentElement.remove();
    });

    li.appendChild(deleteBtn);
    document.querySelector('#task-list').appendChild(li);
}
