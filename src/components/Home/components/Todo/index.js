import React, { useState, useEffect } from 'react';
import { requestTodo } from '../../../../utils';
import Top from '../Top';
import Item from '../Item';
import Body from '../Body';

function Todo() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    function getTodos() {
      requestTodo.getAll().then((response) => {
        if (response.status === 200) {
          setTodos(response.data);
        }
      });
    }
    getTodos();
  }, []);
  return (
    <>
      <Top />
      <Body title="Lista de Todos">
        {todos.length === 0 && <div>Carregando ...</div>}
        {todos.length > 0 &&
          todos.map((todo, key) => <Item {...todo} key={key} />)}
      </Body>
    </>
  );
}

export default Todo;
