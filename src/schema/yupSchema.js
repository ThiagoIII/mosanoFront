import * as yup from 'yup'

const msg = 'This field is required'
export const schema = yup.object().shape({
    firstName: yup.string().required(msg),
    surname: yup.string().required(msg),
    country: yup.string().required(msg),
    birthday: yup
        .string()
        .length(
            10,
            `The date needs to be 10 caracters including the bars, example: 12/25/1990`
        )
        .matches(
            /(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.]((?:19|20)\d\d)/,
            'The date needs to be formatted like this MM/DD/YYYY, exemplo: 12/25/1990'
        )
        .required(msg)
})
