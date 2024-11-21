
import notebook from '../docs/texts';
import EArray from '../lib/EArray';
import DWriter from '../lib/DWriter';


function execLessonArrays() {

  // Render Writer
  const writer = new DWriter('app',true);

  // Render Html Texts [ Array Class Implemention ] 

  const array = new EArray();

  // Render Html Texts [ Array Class Implemention ] 
  writer.append(writer.addCard('Arrays',
    writer.addParragraph(notebook.arrays.text_1) +
    writer.addCodeBlock(notebook.arrays.code_1)
  ))

  // Array Push() Method Implemention

  array.push("Alejandro");
  array.push("Pedro");
  array.push("Julian");
  array.push("Federica");

  console.log(array.data)

  // Render Html Texts [ Array Push Method Implementions ] 

  writer.point('card-arrays');

  writer.append(
    writer.addParragraph(notebook.arrays.text_2) +
    writer.addCodeBlock(notebook.arrays.code_2)
  )

  // Array Pop() Method Implemention

  const federica = array.pop();

  console.log('item', federica);
  console.log(array.data)

  writer.append(
    writer.addParragraph(notebook.arrays.text_3) +
    writer.addCodeBlock(notebook.arrays.code_3)
  )

  array.remove(1); // Pedro 

  console.log(array.data)

  writer.append(
    writer.addParragraph(notebook.arrays.text_4) +
    writer.addCodeBlock(notebook.arrays.code_4)
  );

  // Refactoring Array.Pop()

  writer.append(
    writer.addParragraph(notebook.arrays.text_5) +
    writer.addCodeBlock(notebook.arrays.code_5)
  );

  array.push('Jeronimo');
  array.push('Cerafina');
  console.log(array.data);


  const alejandro = array.shift();

  console.log('Extracted:', alejandro)
  console.log(array.data);


  writer.append(
    writer.addParragraph(notebook.arrays.text_6) +
    writer.addCodeBlock(notebook.arrays.code_6)
  );

  array.unshift('Jack Sparrow');
  console.log(array.data);

  writer.append(
    writer.addParragraph(notebook.arrays.text_7) +
    writer.addCodeBlock(notebook.arrays.code_7)
  );

}

export default execLessonArrays;