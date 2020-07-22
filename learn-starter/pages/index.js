import Head from 'next/head'
import "../assets/main.scss"
import CheckBox from '../components/Checkbox';
import RadioGroup from '../components/RadioGroup';
import ToDoList from '../components/ToDoList';
import _ from 'lodash';

export default function Home() {
    const [todoList, changeTodoList] = React.useState(
        [
            {
                id: _.uniqueId(),
                title: 'Learn react',
                checked: false,
                priority: null,
            },
            {
                id: _.uniqueId(),
                title: 'Learn vue',
                checked: false,
                priority: null,
            },
            {
                id: _.uniqueId(),
                title: 'Learn angular',
                checked: false,
                priority: null,
            },
        ]
    );


    const addNewListItem = React.useCallback((item) => {
        let list = [...todoList];
        list.push(item);
        changeTodoList(list);
    }, [todoList]);

    const removeNewListItem = React.useCallback((item) => {
        let index = _.indexOf(todoList, item);
        if (index === -1) return;
        let list = [...todoList];
        list.splice(index, 1);
        changeTodoList(list);
    }, [todoList]);

    const checkListItem = React.useCallback((state, item) => {
        let index = _.indexOf(todoList, item);
        if (index === -1) return;
        let list = [...todoList];
        list[index].checked = !!state;
        changeTodoList(list);
    }, [todoList]);

    const setPriority = React.useCallback((priority, item) => {
        let index = _.indexOf(todoList, item);
        if (index === -1) return;
        let list = [...todoList];
        list[index].priority = parseInt(priority.target.value);
        changeTodoList(list);
    }, [todoList]);

    const priorities = [
        {
            id: 1,
            title: 'Low',
        },
        {
            id: 2,
            title: 'Medium',
        },
        {
            id: 3,
            title: 'High',
        },
    ];
    console.log('page-render')
  return (
    <div className='container'>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
          <ToDoList
              todoList={todoList}
              title="todo-list"
              onAddNewItem={addNewListItem}
            >
              {
                  el => (
                      <>
                          <CheckBox
                              value={el.id}
                              checked={el.checked}
                              title={el.title}
                              onCheck={ (e) => { checkListItem(e, el) } }
                          />
                          <i
                              className="zmdi zmdi-close text-danger"
                              onClick={ () => { removeNewListItem(el) } }
                          />
                          <RadioGroup
                              options={priorities}
                              title="Выберите приоритет"
                              selected={el.priority}
                              onChange={(e) => { setPriority(e, el) }}
                          />
                      </>
                  )
              }
          </ToDoList>
      </main>

      <footer>

      </footer>
    </div>
  )
}
