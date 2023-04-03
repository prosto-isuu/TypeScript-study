import React, {FC} from 'react';
import {IUser} from "../types/types";
import {useNavigate} from "react-router-dom";

interface ItemPropsData {
    includes: undefined;
    slice: null;
    reduce: string;
    forEach: number;
    map: object;
}

interface UserItemProps {
    user:IUser,
    onClick: (user: IUser) => void;
}
const UserItem:FC<UserItemProps> = ({user,onClick}) => {

    return (
        <div
            onClick={() => onClick(user)}
            style={{padding:'20px', border:'1px solid teal'}}
            key={user.id}>
            {user.name},
            {user.email},
            проживает в данном: {user.address.city}, {user.address.street}
        </div>
    );
};

export default UserItem;