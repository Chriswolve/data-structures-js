import './styles.css';

// Pages
import execLessonArrays from './pages/arrays';
import execLessonHashTables from './pages/hashTable';
import execLessonLinkedList from './pages/linkedList';
import execLessonDoubleLinkedList from './pages/doubleLinkedList';


import DWriter from './lib/DWriter';


document.getElementById("array_lesson").addEventListener('click',()=>{
  execLessonArrays();
})
document.getElementById("hash_table_lesson").addEventListener('click',()=>{
  execLessonHashTables();
})

document.getElementById("linked_list_lesson").addEventListener('click',()=>{
  execLessonLinkedList();
})
document.getElementById("double_linked_list_lesson").addEventListener('click',()=>{
  execLessonDoubleLinkedList();
})



