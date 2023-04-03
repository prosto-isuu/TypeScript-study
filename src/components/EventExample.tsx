import React, {useRef, useState} from 'react';

const EventExample = () => {
    const [value, setValue] = useState<string>('');
    const [drag, setDrag] = useState<boolean>(false);
    const inputRef = useRef<HTMLInputElement>(null);
    const onHandleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value)
    }

    const onButtonCLick = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log('Управлемый элемент', value,)
    }

    const onLogHandler = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log('Неуправлемый элемент', inputRef.current?.value )
    }

    const onDragHandler = (event:React.MouseEvent<HTMLDivElement>) => {
        setDrag(true)
        // - здесь мы реализовали перетаскиваемый элемент и типизировали его
    }

    const onStartHandler = () => {

    }
    const onEndHandler = () => {
        setDrag(false)
    }

    return (
        <div>
            <input
                onChange={onHandleChange}
                value={value}
                type="text"
                placeholder='Управляемый элемент'
            />
            <input
                type="text"
                ref={inputRef}
                placeholder='Неуправляемый элемент'
            />
            <button
                onClick={onButtonCLick}>
                Вызвать в логи управляемые данные 😝
            </button>
            <button
                onClick={onLogHandler}>
                Вызвать в логи неуправляемые данные 😝
            </button>
            <div
                onDragStart={onStartHandler}
                onDrag={onDragHandler}
                onDragEnd={onEndHandler}
                draggable
                style={{background:'lightgray', padding:'40px', margin:'20px'}}>
                red
            </div>
            <div
                draggable
                style={{background: drag? 'gray' : 'lightgray',padding:'40px', margin:'20px'}}
            >
                blue
            </div>
        </div>
    );
};

export default EventExample;