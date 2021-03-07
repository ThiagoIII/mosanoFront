import './App.css'
import React from 'react'
import Form from './components/Form'
import List from './components/List'
import { AppContext } from './context/context'
import { useTranslation } from 'react-i18next'
import './translations/i18n'

function App() {
    const {
        state: {
            userSubmitted: { firstName, surname, country },
            dayMonthAge: { day, month, age }
        }
    } = React.useContext(AppContext)
    const [list, setList] = React.useState([])
    const { t } = useTranslation()

    React.useEffect(() => {
        try {
            fetch('http://localhost:3333/getCountriesList')
                .then(res => res.json())
                .then(data => setList(data))
        } catch (error) {
            alert(
                'Failed on getting list of countries, please refresh the page to try again.'
            )
        }
    }, [])

    return (
        <main>
            <Form list={list} />
            <span id="legend">
                {console.log(firstName)}
                {firstName !== undefined
                    ? `Hello ${firstName} ${surname} from ${country}, on ${day} of ${month} you will have ${
                          age + 1
                      }`
                    : t('msg')}
            </span>
            <List />

            <footer>Thiago Terceiro</footer>
        </main>
    )
}

export default App
