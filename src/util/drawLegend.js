import { showUserLegend } from '../context/actions'
import checkDiff from './checkDiff'
import getTextFromSpans from './getTextFromSpans'

import moment from 'moment'

const drawLegend = (e, dispatch) => {
    /* let spans = e.currentTarget.children

	let texts = []
	for (let span of spans) {
		texts.push(span.innerText)
	}
	let dataForLegend = texts.splice(0, 1)[0].split(' ')
	let texts2 = [...dataForLegend, ...texts]
	let country = texts2[2]
	let birth = texts2[3]
	let objForLegend = {
		firstName: dataForLegend[0],
		surname: dataForLegend[1],
		country: country,
		birthday: birth
	} */
    let objForLegend = getTextFromSpans(e)

    let { date: inputDay, months: inputMonth, years: inputYear } = moment(
        objForLegend?.birthday
    ).toObject()

    const { currentAge } = checkDiff(inputYear, inputMonth, inputDay)

    let data = {
        data: { ...objForLegend },
        dayMonthAge: {
            day: inputDay,
            month: new Date(objForLegend?.birthday).toLocaleString('default', {
                month: 'long'
            }),
            age: currentAge
        }
    }

    showUserLegend(dispatch, data)
}

export default drawLegend
