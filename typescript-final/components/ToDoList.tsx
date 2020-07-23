import * as React from "react";
import _ from "lodash";
import {ExtendedButton, ButtonTypes} from "./Button";

interface ListItem {
    id: string
    title: string
    checked: boolean
    priority: null | undefined | number
}

interface ToDoListProps {
    title: string
    onAddNewItem(item: ListItem): void
    todoList: ListItem[]
    children: (item: ListItem) => React.ReactNode;
}

const ToDoList: React.FC<ToDoListProps> = ({ title, onAddNewItem, todoList, children}) => {
    const [newListItem, setNewListItem] = React.useState<string>('');
    const [searchStr, setSearchStr] = React.useState<string>('');

    const filteredToDoList = React.useMemo(() => {
        if (!searchStr) return todoList;
        return _.filter(todoList, el => el.title.includes(searchStr));
    }, [searchStr, todoList]);

    const handleKeyDown = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            addItemClick();
        }
    };

    const addItemClick = ():void => {
        onAddNewItem({
            id: _.uniqueId(),
            title: newListItem,
            checked: false,
            priority: null,
        });
        setNewListItem('');
    };

    return (
        <div className="container">

            <h3 className="text-center">
                { title || 'не указано' }
            </h3>
            <input
                type="text"
                className="form-control mb-3"
                placeholder="Введите для поиска..."
                value={searchStr}
                onChange={e => setSearchStr(e.target.value)}
            />

            <ul className="list-group mb-3">
                {
                    filteredToDoList.map((el:ListItem, index) => (
                        <li
                            className="list-group-item d-flex justify-content-between"
                            key={el.id}
                        >
                            {children(el)}
                        </li>
                    ))
                }
            </ul>
            <div className="d-flex">
                <input
                    className="form-control"
                    placeholder="Введите название дела"
                    value={newListItem}
                    onChange={e => setNewListItem(e.target.value)}
                    onKeyDown={handleKeyDown}
                    />
                    <ExtendedButton
                        text="Добавить"
                        className="ml-3"
                        view={ButtonTypes.Primary}
                        action={addItemClick}
                        />
            </div>

        </div>
    )
};

export default ToDoList;