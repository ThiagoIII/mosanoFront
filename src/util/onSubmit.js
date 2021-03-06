import { v4 as uuidv4 } from 'uuid'
import leapYear from './leapYear'
import checkInput from './checkInput'
import { validateData } from './validateData'
import checkDiff from './checkDiff'
import moment from 'moment'

export const onSubmit = (dataFromForm, dispatch, setLoading) => {
    setLoading(true)
    let { date: inputDay, months: inputMonth, years: inputYear } = moment(
        dataFromForm?.birthday
    ).toObject()

    /*    let a = moment([inputYear, inputMonth, inputDay])
    let b = moment()
    let diffDays = b.diff(a, 'days') //checking for date past current date
    let currentAge = b.diff(a, 'years') //checking for date past current date */
    const { diffDays, currentAge } = checkDiff(inputYear, inputMonth, inputDay)
    leapYear(dataFromForm, inputYear)
    checkInput(inputYear, inputMonth, inputDay, diffDays)
    /*  let month = dataFromForm?.birthday.split('/')[0]
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
    } */

    /*   if (
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
        ) */

    let dataToValidate = {
        data: { ...dataFromForm, id: uuidv4() },
        dayMonthAge: {
            day: inputDay,
            month: new Date(dataFromForm?.birthday).toLocaleString('default', {
                month: 'long'
            }),
            inputMonth,
            age: currentAge
        }
    }

    validateData(dataToValidate, dispatch, setLoading)
}
