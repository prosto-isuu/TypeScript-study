import React, {FC, PropsWithChildren, useState} from 'react';

export enum CardVariant {
    outlined = 'outlined',
    primary = 'primary'
}

interface CardProps {
    height?: string
    width?: string
    variant?: CardVariant
    onClick: (num: number) => void // У функции которая что то принимает в параметрах мы должны указать тип параметра
    // в данном случае это num:number

}

const Card:FC<PropsWithChildren<CardProps>> = (
    {
        height,
        width,
        children,
        onClick,
        variant,
    }) => {

    const [state, setState] = useState(0)

    return (
        <div
            onClick={e => onClick(state)}
            style={{
            height,
            width,
            border: variant === CardVariant.outlined? '1px solid lightGray' : 'none',
            background: variant === CardVariant.primary? 'none' : 'none'
        }}>
            {children}
        </div>
    );
};

export default Card;