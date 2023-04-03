import React, {FC, useEffect, useState} from 'react';
import {IUser} from "../types/types";
import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";


type UserPageItemProps = {
    id: string;
}

const UserItemPage: FC = () => {

    const [user, setUser] = useState<IUser | null>(null)
    const params = useParams<UserPageItemProps>()
    const navigate = useNavigate()

    useEffect(() => {
        fetchUser()

    }, [])

    function onNavigate() {
        navigate('/users')
    }

    async function fetchUser() {
        try {
            const response = await axios.get<IUser>("https://jsonplaceholder.typicode.com/users/" + params.id)
            setUser(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (

        <div>
            <div>
                {/*<div>Страница главного {user?.name}, {user?.address}</div>*/}
                <button onClick={onNavigate}>
                    Страница пользователя
                </button>
                <button>
                    Домой
                </button>
                <div>{user?.email}</div>
            </div>
        </div>

);
};

export default UserItemPage;