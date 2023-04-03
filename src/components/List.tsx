import React, {FC, PropsWithChildren} from 'react';

interface ListProps<T> {
    items: T[];
    renderItem: (item:T) => React.ReactNode
}

export default function List<T>(props:ListProps<T>) {
    return (
        <div>
            {props.items.map( item => props.renderItem(item))}
        </div>
    )
}
