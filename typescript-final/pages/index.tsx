import * as React from "react";
import Layout from '../components/layout'
import CheckBox from '../components/Checkbox'
import RadioGroup from '../components/RadioGroup'
import ToDoList from '../components/ToDoList'
import { Icon, InlineIcon } from '@iconify/react';
import close from '@iconify/icons-zmdi/close';
import _ from "lodash";

interface SingleItem {
  id: string
  title: string
  checked: boolean
  priority: null | undefined | number
}

export default function Home() {
  const [todoList, changeTodoList] = React.useState<SingleItem[]>(
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

  const addNewListItem = React.useCallback((item: SingleItem) => {
    let list = [...todoList];
    list.push(item);
    changeTodoList(list);
  }, [todoList]);

  const removeNewListItem = React.useCallback((item: SingleItem) => {
    let index = _.indexOf(todoList, item);
    if (index === -1) return;
    let list = [...todoList];
    list.splice(index, 1);
    changeTodoList(list);
  }, [todoList]);

  const checkListItem = React.useCallback((state: boolean, item: SingleItem) => {
    let index = _.indexOf(todoList, item);
    if (index === -1) return;
    let list = [...todoList];
    list[index].checked = state;
    changeTodoList(list);
  }, [todoList]);

  const setPriority = React.useCallback((priority: React.ChangeEvent<HTMLInputElement>, item: SingleItem) => {
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

  return (
      <Layout home title='Home page'>
        <section>
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
                    <span onClick={ () => { removeNewListItem(el) } }>
                      <Icon className="text-danger" icon={close} />
                    </span>
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
        </section>
      </Layout>
  )
}
