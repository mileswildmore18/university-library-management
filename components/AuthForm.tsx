import React from 'react'

// Add the auth form generic type
// interface Props<T extends FieldValues>

const AuthForm = ({ type, schema, defaultValues, onSubmit}: Props) => {
    return (
        <div>AuthForm -- {type}</div>
    )
}
export default AuthForm
