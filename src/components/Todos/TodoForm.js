import { useState } from 'react';
import styles from './TodoForm.module.css';
import Button from '../UI/Button';

function TodoForm({ addTodo }) {
  const [text, setText] = useState('');

  const onSumbitHandler = (event) => {
    event.preventDefault();
    addTodo(text);
    setText('');
  };

  return (
    <div className={styles.todoFormContainer}>
      <form onSubmit={onSumbitHandler}>
        <input
          placeholder="Enter new todo"
          value={text}
          onChange={(event) => setText(event.target.value)}
        />
        <Button type="submit" title="Sumbit">
          Submit
        </Button>
      </form>
    </div>
  );
}

export default TodoForm;
