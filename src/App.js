import './App.css'
import React from 'react'
import Form from './components/Form'
import List from './components/List'
import { AppContext } from './context/context'
import { useTranslation } from 'react-i18next'
import './translations/i18n'
import i18n from 'i18next'

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
            fetch('https://still-meadow-87389.herokuapp.com/getCountriesList')
                .then(res => res.json())
                .then(data => setList(data))
        } catch (error) {
            alert(
                'Failed on getting list of countries, please refresh the page to try again.'
            )
        }
    }, [])

    //if (loading) return <Loading setLoading={setLoading} />

    const handleOnclick = e => {
        e.preventDefault()
        i18n.changeLanguage(e.target.value)
    }

    return (
        <main>
            <section>
                <button value="pt" onClick={handleOnclick}>
                    Português
                </button>
                <button value="en" onClick={handleOnclick}>
                    English
                </button>
            </section>
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
