import React, { useState } from 'react';

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const TodoItem = React.memo(function TodoItem({ todo, onToggle, onUpdate, onDelete }) {
  return (
    <li>
      <p style={{ textDecoration: todo.done ? 'line-through' : 'none' }}
        onClick={() => onToggle(todo.id)}>{todo.id + ' ' + todo.text}</p>
      <button onClick={() => onUpdate(todo.id)}>수정</button>
      <button onClick={() => onDelete(todo.id)}>삭제</button>
    </li>
  );
});

// 컴포넌트 최적화를 위하여 React.memo를 사용합니다
const TodoList = React.memo(function TodoList({ todos, onToggle, onUpdate, onDelete }) {
  return (
    <ul>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} onToggle={onToggle} onUpdate={onUpdate} onDelete={onDelete} />
      ))}
    </ul>
  );
});

function Todos({ todos, onCreate, onToggles, onUpdate, onDelete }) {
  // 리덕스를 사용한다고 해서 모든 상태를 리덕스에서 관리해야하는 것은 아닙니다.
  const [text, setText] = useState('');
  const onChange = e => setText(e.target.value);
  const onSubmit = e => {
    e.preventDefault(); // Submit 이벤트 발생했을 때 새로고침 방지
    onCreate(text, 1);
    setText(''); // 인풋 초기화
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={text}
          placeholder="할 일을 입력하세요.."
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
      <TodoList todos={todos} onToggle={onToggles} onUpdate={onUpdate} onDelete={onDelete} />
    </div>
  );
}

export default Todos;
