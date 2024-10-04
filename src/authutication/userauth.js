import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom"
import useAuth from '../hook/useAuth'
import useAxiosPrivate from "../hook/useAxiosPrivate"
import useLogout from "../hook/useLogout"

export default function User() {

    const { user, setUser } = useAuth()
    const axiosPrivateInstance = useAxiosPrivate()
    const navigate = useNavigate()
    const logout = useLogout()
    const [loading, setLoading] = useState(false)

    async function onLogout(e) {
        e.preventDefault();
        setLoading(true)

        // localStorage.clear('us');
        await logout()
        navigate('/')
    }

    useEffect(() => {
        async function getUser() {
            const { data } = await axiosPrivateInstance.get('auth/user')
            setUser(data)
        }
        getUser()
    }, [])

    return (
        <div>
            <h3>{user?.id}</h3>
            <h3>{user?.username}</h3>
            <h4>{user?.email}</h4>
            <button disabled={loading} type='button' onClick={onLogout}>Logout</button>
        </div>
    )
}