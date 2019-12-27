import React, { useCallback, useEffect } from 'react';
import axios from "axios";
import axiosInstance from "../config/axiosInstance"
import useAsync from '../modules/useAsync';
import { useSelector, useDispatch } from 'react-redux';
import Todos from '../components/Todos';
import { addTodo, deleteTodo, toggleTodo, resetTodo } from '../modules/todos';

const fetchDatas = async () => {
  const response = await axios.get(
    'http://localhost:3001/api/getData'
  );
  return response.data.data;
}

const addDatas = async (message, tobeId) => {
    const response = await axios.post(
      'http://localhost:3001/api/putData',
      {
        message: message,
        id: tobeId
      }
    );
    return response
}

const deleteDatas = async id => {
  let objIdToDelete = id;

  const response = await axios.delete(
    'http://localhost:3001/api/deleteData',
    {data: {
        id: objIdToDelete,
      },}
  )
  return response
}

const TodosContainer = () => {
  const todos = useSelector(state => state.todos);
  const dispatch = useDispatch();
  const onToggleRoot = useCallback(id => dispatch(toggleTodo(id)), [dispatch]); // 최적화를 위해 useCallback 사용
  const onUpdate = id => console.log('update', id)

  //async function onLoad() {
  const loadData = useCallback(async () => { 
    await dispatch(resetTodo())
    const myData = await fetchDatas()
    await myData.forEach(function(todos, i) {
        dispatch(addTodo(i, todos.message, todos._id))
    })
  }, [dispatch])
  const onCreate = async message => {
    const tobeId = todos.length
    const myData = await addDatas(message, tobeId)
    const newDataId = myData.data._id
    
    await dispatch(addTodo(tobeId, message, newDataId));  
  }
  const onDelete = async id => {
    let toDel = undefined
    todos.forEach((el, i) => {
      if (id === el.id) toDel = el._id
    })
    const myData = await deleteDatas(toDel)
    await dispatch(deleteTodo(id))
  }
  
  useEffect(() => {
    loadData()  
  }, [loadData])

  return <Todos todos={todos} onCreate={onCreate} onToggles={onToggleRoot} onUpdate={onUpdate} onDelete={onDelete} />;
}

export default TodosContainer;