import { addUserAction } from '../context/actions'
import moment from 'moment'
import { v4 as uuidv4 } from 'uuid'

export const onSubmit = (dataFromForm, dispatch, setLoading) => {
    setLoading(true)
    let { date: inputDay, months: inputMonth, years: inputYear } = moment(
        dataFromForm?.birthday
    ).toObject()

    let a = moment([inputYear, inputMonth, inputDay])
    let b = moment()
    let currentAge = b.diff(a, 'years') //checking for date past current date

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

    let diffDays = b.diff(a, 'days') //checking for date past current date

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

    /*  let currentAge = parseInt(
        moment().from(dataFromForm?.birthday, true).split(' ')[0]
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

    console.log('dataToValidate', dataToValidate)
    validateData(dataToValidate, dispatch, setLoading)
}

async function validateData(dataToValidate, dispatch, setLoading) {
    const config = {
        method: 'POST',
        body: JSON.stringify(dataToValidate),
        headers: { 'Content-Type': 'application/json' }
    }
    try {
        await fetch(
            `https://still-meadow-87389.herokuapp.com/validateUserData`,
            config
        )
            .then(res => res.json())
            .then(data => {
                addUserAction(dispatch, data)
                setLoading(false)
            })
        return
    } catch (error) {
        return alert(
            `Error trying to validate user data, please try again, error: ${error}`
        )
    }
}
