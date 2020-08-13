import React, { useState, useEffect } from 'react';
import { requestTodo } from '../../../../utils';
import Top from '../Top';
import Item from '../Item';
import Body from '../Body';
import Spinner from '../Spinner';
import { useHistory } from 'react-router-dom';

function Todo() {
  const [todos, setTodos] = useState([]);
  const history = useHistory();
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
  const handleCreate = () => history.push('/todo-cadastro');
  return (
    <>
      <Top />
      <div className="text-align-center">
        <button
          type="button"
          className="btn btn-primary"
          onClick={handleCreate}
        >
          Novo Todo
        </button>
      </div>
      <Body title="Lista de Todos">
        {todos.length === 0 && <Spinner />}
        {todos.length > 0 &&
          todos.map((todo, key) => <Item {...todo} key={key} />)}
      </Body>
    </>
  );
}

export default Todo;
