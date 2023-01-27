function getElement(elementId) {
    return document.getElementById(elementId);
}

function getValueFromInputElement(elementId) {
    return getElement(elementId).value;
}

function parseStringToFloat(stringValue) {
    if (isNaN(stringValue)) {
        throw new Error(stringValue + " is not a number");
    }
    return parseFloat(stringValue);
}

function getRadioButtonChecked(groupName) {
    const radioButtonGroup = document.querySelectorAll("input[name='" + groupName + "']");

    for (const radioButton of radioButtonGroup) {
        if (radioButton.checked) {
            return radioButton;
        }
    }
    return null;
}

function getLabelValueFromInput(input) {
    return input.labels[0].innerText;
}

function generateId() {
    return "id_" + Math.random().toString(16).slice(2);
}

function getLabelValueFromInput(input) {
    return input.labels[0].innerText;
}
