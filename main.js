const storage = new ExerciseStorage();

function handleAddButton(_) {
    const radioButtonSelected = getRadioButtonChecked("exercise");

    const exerciseNameSelected = getLabelValueFromInput(radioButtonSelected);
    const minuteValue = getValueFromInputElement("minutes");

    const exercise = new Exercise({
        _name: exerciseNameSelected,
        _length: parseStringToFloat(minuteValue)
    });

    storage.add(exercise);
}

function handleMostBurnedButton() {
    const mostBurnedExercise = storage.findMostBurned();
    getElement("burned-result").value = mostBurnedExercise.toShortString();
}

function handleShowAllButton() {
    let ulElement = getElement("results");
    // remove all childs 
    ulElement.innerHTML = "";

    const allDataFromStorage = storage.getAll().map(function(exercise) {
        return exercise.toBeautyString();
    })
    allDataFromStorage.forEach(function(exerciseAsString, index) {
        let liElement = document.createElement("li");
        liElement.setAttribute("id", "exercise-" + index);
        liElement.innerText = exerciseAsString;

        ulElement.appendChild(liElement);
    });
}

document.addEventListener("DOMContentLoaded", function(_) {
    getElement("add").addEventListener("click", handleAddButton);
    getElement("most-burned").addEventListener("click", handleMostBurnedButton);
    getElement("show-all").addEventListener("click", handleShowAllButton);
});
