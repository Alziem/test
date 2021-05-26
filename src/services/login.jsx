import connect from './connect'

const http = new connect();

export const LoginForm = async (props) => {

    return http.postData(props, `${http.BASE_URL_ADMIN}/login`)

        .then(res => {

            return res.data

        }).catch(error => {
            return error
        })
}

export const logoutForm = async (props) => {

    return http.postData(props, `${http.BASE_URL_ADMIN}/logout`, false)
    .then(res => {
        return res.data
    }).catch(err => {
        return err
    })
}