import React, {FC, useEffect, useState} from 'react';
import axios from "axios";
import {IUser} from "../types/types";
import UserItem from "./UserItem";
import List from "./List";
import {useNavigate} from "react-router-dom";



interface UserPageProps {

}

const UserPage: FC<UserPageProps> = () => {

    const [users, setUsers] = useState<IUser[]>([])
    const navigate = useNavigate()


    useEffect(() => {
        fetchUsers();
    }, [])

    async function fetchUsers() {
        try {
            const response = await axios.get<IUser[]>("https://jsonplaceholder.typicode.com/users?_limit=3")
            setUsers(response.data)
        } catch (e) {
            alert(e)
        }
    }

    return (
        <List
            items={users}
            renderItem={(user:IUser) => <UserItem
                onClick={() => navigate('/users:id')}
                user={user}
                key={user.id}/>}
        />
    );
};

export default UserPage;