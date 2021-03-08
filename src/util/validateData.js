import { addUserAction } from '../context/actions'

export async function validateData(dataToValidate, dispatch, setLoading) {
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
