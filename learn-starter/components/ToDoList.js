export default function ToDoList({
  title,
  onAddNewItem,
  ...props
  }) {
    const [newListItem, setNewListItem] = React.useState('');
    const [searchStr, setSearchStr] = React.useState('');

    const filteredToDoList = React.useMemo(() => {
        if (!searchStr) return props.todoList;
        return _.filter(props.todoList, el => el.title.includes(searchStr));
    }, [searchStr, props.todoList]);

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            onAddNewItem({
                id: _.uniqueId(),
                title: newListItem,
                checked: false,
                priority: null,
            });
            setNewListItem('');
        }
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
                    filteredToDoList.map((el, index) => (
                        <li
                            className="list-group-item d-flex justify-content-between"
                            key={el.id}
                        >
                            {props.children(el)}
                        </li>
                    ))
                }
            </ul>

            <input
                className="form-control"
                placeholder="Введите название дела"
                value={newListItem}
                onChange={e => setNewListItem(e.target.value)}
                onKeyDown={handleKeyDown}
            />
        </div>
    );
}
