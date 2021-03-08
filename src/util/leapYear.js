const leapYear = (dataFromForm, inputYear) => {
    let month = dataFromForm?.birthday.split('/')[0]
    let day = dataFromForm?.birthday.split('/')[1]
    if (day === '29' && month === '02') {
        //checking for leap year
        if (inputYear % 4 !== 0) {
            return alert(
                '29 of February is not valid for this the year registered.'
            )
        } else if (inputYear % 100 === 0) {
            if (inputYear % 400 !== 0) {
                return alert(
                    '29 of February is not valid for this the year registered.'
                )
            }
        }
    }
}

export default leapYear
