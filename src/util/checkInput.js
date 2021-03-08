const checkInput = (inputYear, inputMonth, inputDay, diffDays) => {
    if (
        //checking for numbers not allowed for day, month and year
        inputDay < 1 ||
        inputDay > 31 ||
        inputMonth < 0 ||
        inputMonth > 11 ||
        inputYear > new Date().getFullYear() ||
        diffDays < 0
    )
        return alert(
            'Invalid birthday values, day values allowed are from 1 to 31 and month values allowed are from 1 to 12 and year value maximum is the current year and you cannot exceed the current date.'
        )
}

export default checkInput
