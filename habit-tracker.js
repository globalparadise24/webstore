document.addEventListener("DOMContentLoaded", function() {
    const habitInput = document.getElementById("new-habit");
    const addHabitButton = document.getElementById("add-habit");
    const habitList = document.getElementById("habit-list");

    let habits = JSON.parse(localStorage.getItem("habits")) || [];

    function renderHabits() {
        habitList.innerHTML = "";
        habits.forEach((habit, index) => {
            const li = document.createElement("li");
            li.textContent = habit.text;
            li.className = "flex justify-between items-center mb-2";

            const deleteButton = document.createElement("button");
            deleteButton.textContent = "Delete";
            deleteButton.className = "bg-red-600 text-white p-2 rounded";
            deleteButton.addEventListener("click", () => {
                deleteHabit(index);
            });

            li.appendChild(deleteButton);
            habitList.appendChild(li);
        });
    }

    function addHabit() {
        const text = habitInput.value.trim();
        if (text !== "") {
            habits.push({ text });
            habitInput.value = "";
            saveHabits();
            renderHabits();
        }
    }

    function deleteHabit(index) {
        habits.splice(index, 1);
        saveHabits();
        renderHabits();
    }

    function saveHabits() {
        localStorage.setItem("habits", JSON.stringify(habits));
    }

    addHabitButton.addEventListener("click", addHabit);
    renderHabits();
});
