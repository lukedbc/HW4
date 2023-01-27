function Exercise(_id, _name, _length, _caloriesPerMinute) {
    this.m_id = _id;
    this.m_name = _name;
    this.m_length = _length;
    this.m_caloriesPerMinute = _caloriesPerMinute;
}

function getCaloriesPerMinuteByName(name) {
    if (name === null || name === undefined) {
        return 0;
    }
    switch (name.toLowerCase()) {
        case "sit ups":
            return 10;
        case "push ups":
            return 15;
        case "jump rope":
            return 18;
        default:
            return 0;
    }
}

function Exercise({
    _name,
    _length,
    _caloriesPerMinute = getCaloriesPerMinuteByName(_name) // set default value for caloriesPerMInute
}) {
    this.m_id = generateId();
    this.m_name = _name;
    this.m_length = _length;
    this.m_caloriesPerMinute = _caloriesPerMinute;
}

Exercise.prototype.getCaloriesPerMinute = function() {
    if (this.m_caloriesPerMinute === null || this.m_caloriesPerMinute === undefined) {
        return 0;
    }

    if (this.m_caloriesPerMinute > 0) {
        return this.m_caloriesPerMinute;
    }

    return getCaloriesPerMinuteByName(this.m_name);
}

Exercise.prototype.calculateCaloriesBurned = function() {
    return this.m_length * this.getCaloriesPerMinute();
}

Exercise.prototype.toBeautyString = function() {
    return `Exercise ${this.m_name} in ${this.m_length} minutes burned ${this.calculateCaloriesBurned()} calories`;
}

Exercise.prototype.toShortString = function() {
    return `${this.m_name} in ${this.m_length} minutes - ${this.calculateCaloriesBurned()} calories`;
}
