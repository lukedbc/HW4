function ExerciseStorage() {
    this.m_data = [];
}

ExerciseStorage.prototype.add = function(exercise) {
    this.m_data.push(exercise);
    console.log(`${exercise.m_name} in ${exercise.m_length} minutes is added`);
}

ExerciseStorage.prototype.removeAll = function() {
    this.m_data = [];
}

// Basic problem: Find the biggest number in array and return this number
ExerciseStorage.prototype.findMostBurned = function() {
    let mostCaloriesBurned = -1;
    let mostEffectiveExerciseIndex = -1;

    this.m_data.forEach(function(exercise, index) {

        let caloriesBurned = exercise.calculateCaloriesBurned();
        if (mostCaloriesBurned < caloriesBurned) {
            mostCaloriesBurned = caloriesBurned;
            mostEffectiveExerciseIndex = index;
        }
    });

    return this.m_data[mostEffectiveExerciseIndex];
}

ExerciseStorage.prototype.getAll = function() {
    let result = [];

    this.m_data.forEach(function(exercise) {
        result.push(exercise.toBeautyString());
    });

    return result;
}
