import moment from 'moment'

const checkDiff = (inputYear, inputMonth, inputDay) => {
    let a = moment([inputYear, inputMonth, inputDay])
    let b = moment()
    let diffDays = b.diff(a, 'days') //checking for date past current date
    let currentAge = b.diff(a, 'years')
    return { diffDays, currentAge }
}

export default checkDiff
