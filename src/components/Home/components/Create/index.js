import React from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';

import { cssValidOrInvalid, requestTodo } from '../../../../utils';
import Top from '../Top';
import Body from '../Body';

function Create() {
  const { register, handleSubmit, errors } = useForm();
  const history = useHistory();
  const onSubmit = (data) => {
    const postData = { ...data, done: false };
    requestTodo.post(postData).then((response) => {
      if (response.status === 201) {
        handleCancel();
      }
    });
  };
  const handleCancel = () => history.push('/todo');
  return (
    <>
      <Top />
      <Body title="Cadastro">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group">
            <input
              name="description"
              type="text"
              className={
                'form-control' + cssValidOrInvalid(errors, 'description')
              }
              id="inputDescription"
              aria-describedby="descriptionHelp"
              placeholder="description"
              autoFocus={true}
              ref={register({
                required: true,
                maxLength: 100,
              })}
            />
          </div>
          <button type="submit" className="btn btn-primary mr-1">
            Salvar
          </button>
          <button
            type="button"
            className="btn btn-danger"
            onClick={handleCancel}
          >
            Cancelar
          </button>
        </form>
      </Body>
    </>
  );
}

export default Create;
