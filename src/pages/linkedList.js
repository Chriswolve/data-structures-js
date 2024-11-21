
import notebook from '../docs/texts';
import DWriter from '../lib/DWriter';
import ELinkedList from '../lib/ELinkedList';


function execLessonLinkedList() {


  const writer = new DWriter('app', true);

  // ELinkedList
  const linkedList = new ELinkedList();

  writer.append(writer.addCard('Linked List',
    writer.addParragraph(notebook.linked_list.text_1) +
    writer.addCodeBlock(notebook.linked_list.code_1)
  ))

  writer.point('card-linked-list');

  linkedList.addFirst(2);
  linkedList.addFirst(1);
  linkedList.addFirst(0);

  writer.append(
    writer.addParragraph(notebook.linked_list.text_2) +
    writer.addCodeBlock(notebook.linked_list.code_2)
  )

  linkedList.addLast(4);
  linkedList.addLast(5);
  linkedList.addLast(6);

  writer.append(
    writer.addParragraph(notebook.linked_list.text_3) +
    writer.addCodeBlock(notebook.linked_list.code_3)
  )


  linkedList.insert('?', 6);

  writer.append(
    writer.addParragraph(notebook.linked_list.text_4) +
    writer.addCodeBlock(notebook.linked_list.code_4)
  )


  linkedList.remove(4);

  
  writer.append(
    writer.addParragraph(notebook.linked_list.text_5) +
    writer.addCodeBlock(notebook.linked_list.code_5)
  )

  console.log(linkedList.toArray());
  console.log("Length: ", linkedList.length);

}
export default execLessonLinkedList;