{
    const tasks = [];

    const resetInput = () => {
        document.querySelector(".js-newTask").value = "";
    };

    const setFocusOnInput = () => {
        document.querySelector(".js-newTask").focus();
    };

    const addNewTask = (newTaskContent) => {
        tasks.push({
            content: newTaskContent,
        });

        render();
    };

    const removeTask = (taskIndex) => {
        tasks.splice(taskIndex, 1);
        render();
    };

    const toggleTaskDone = (taskIndex) => {
        tasks[taskIndex].done = !tasks[taskIndex].done;
        render();
    };

    const bindEvents = () => {
        const removeButtons = document.querySelectorAll(".js-remove");

        removeButtons.forEach((removeButton, index) => {
            removeButton.addEventListener("click", () => {
                removeTask(index);
            });
        });

        const toggleDoneButtons = document.querySelectorAll(".js-done");

        toggleDoneButtons.forEach((toggleDoneButton, index) => {
            toggleDoneButton.addEventListener("click", () => {
                toggleTaskDone(index);
            });
        });
    };

    const render = () => {
        let htmlString = "";

        for (const task of tasks) {
            htmlString += `
            <li${task.done ? " style=\"text-decoration: line-through\"" : ""}>
            <button class="js-done">zrobione?</button>
            <span>${task.content}</span>
            <button class="js-remove">usuń</button>
            </li>
            `
        };

        document.querySelector(".js-tasks").innerHTML = htmlString;

        bindEvents();
    };

    const onFormSubmit = (event) => {
        event.preventDefault();

        const newTaskContent = document.querySelector(".js-newTask").value.trim();
        const newTaskField = document.querySelector(".js-newTask")

        if (newTaskContent === "") {
            newTaskField.focus();
            return;
        };

        addNewTask(newTaskContent);
        resetInput();
        setFocusOnInput();
    };

    const init = () => {
        render();

        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);


    };

    init();
}