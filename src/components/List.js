import React from 'react'
import { AppContext } from '../context/context'
import { v4 as uuidv4 } from 'uuid'
import { useTranslation } from 'react-i18next'
import '../translations/i18n'
import drawLegend from '../util/drawLegend'

const List = () => {
    const {
        state: { usersList },
        dispatch
    } = React.useContext(AppContext)

    const { t } = useTranslation()

    /* const drawLegend = e => {
         let spans = e.currentTarget.children

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
        } 
        let objForLegend = getTextFromSpans(e)

        let { date: inputDay, months: inputMonth, years: inputYear } = moment(
            objForLegend?.birthday
        ).toObject()

        const { currentAge } = checkDiff(inputYear, inputMonth, inputDay)

        let data = {
            data: { ...objForLegend },
            dayMonthAge: {
                day: inputDay,
                month: new Date(objForLegend?.birthday).toLocaleString(
                    'default',
                    {
                        month: 'long'
                    }
                ),
                age: currentAge
            }
        }

        showUserLegend(dispatch, data)
    } */

    return (
        <ul id="list">
            <li key={uuidv4()}>
                <span>{t('name')}</span>
                <span>{t('country')}</span>
                <span>{t('birthday')}</span>
            </li>
            {usersList.map(({ firstName, surname, country, birthday, id }) => {
                return (
                    <li key={id} onClick={e => drawLegend(e, dispatch)}>
                        <span>
                            {firstName} {surname}
                        </span>
                        <span>{country}</span>
                        <span>{birthday}</span>
                    </li>
                )
            })}
        </ul>
    )
}

export default List
