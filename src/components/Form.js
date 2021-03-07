//import './form.css'
import React from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { AppContext } from '../context/context'
import { onSubmit } from '../util/onSubmit'
import { schema } from '../schema/yupSchema'
import { useTranslation } from 'react-i18next'
import '../translations/i18n'
const Form = ({ list }) => {
    const { dispatch } = React.useContext(AppContext)
    const { t } = useTranslation()
    const { register, handleSubmit, errors } = useForm({
        resolver: yupResolver(schema)
    })

    return (
        <section id="form">
            <form onSubmit={handleSubmit(data => onSubmit(data, dispatch))}>
                <article>
                    <label htmlFor="firstNameInput" name="firstName">
                        {t('name')}:{' '}
                    </label>
                    <input
                        id="firstNameInput"
                        name="firstName"
                        placeholder={t('name')}
                        aria-required="true"
                        ref={register}
                    />
                    {errors.firstName?.message}
                </article>{' '}
                <article>
                    <label htmlFor="surnameInput" name="surname">
                        {t('surname')}:{' '}
                    </label>
                    <input
                        id="surnameInput"
                        name="surname"
                        placeholder={t('surname')}
                        aria-required="true"
                        ref={register}
                    />
                    {errors.surname?.message}
                </article>
                <article>
                    <label htmlFor="countriesInput" name="country">
                        {t('countries')}:
                    </label>
                    <select
                        id="countriesInput"
                        name="country"
                        aria-required="true"
                        ref={register}
                    >
                        <option>{t('countries')}</option>
                        {list.map(({ country, id }) => (
                            <option value={country} key={id}>
                                {country}
                            </option>
                        ))}
                    </select>
                    {errors.country?.message}
                </article>
                <article>
                    <label htmlFor="birthdayInput" name="birthday">
                        {t('birthday')}:{' '}
                    </label>
                    <input
                        id="birthdayInput"
                        name="birthday"
                        placeholder="mm/dd/yyyy"
                        aria-required="true"
                        ref={register}
                    />
                    {errors.birthday?.message}
                </article>
                <input type="submit" value={t('save')} />
            </form>
        </section>
    )
}

export default Form
