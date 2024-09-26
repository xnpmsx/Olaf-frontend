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

        await logout()
        navigate('/')
    }

    async function updateUser() {
        setLoading(true)
        const { data } = await axiosPrivateInstance.get('auth/user')
        setUser(data)
        setLoading(false)
    }

    useEffect(() => {
        updateUser()
    }, [])

    useEffect(() => {
        const interval = setInterval(() => {
            if (!loading) {
                updateUser()
            }
        }, 10000);

        return () => clearInterval(interval);
    }, [loading]);

    return (
        <div>
            <h3>{loading ? 'Loading...' : user?.username}</h3>
            <h4>{loading ? 'Loading...' : user?.email}</h4>
            <button disabled={loading} type='button' onClick={onLogout}>Logout</button>
        </div>
    )
}
