
import notebook from '../docs/texts';
import DWriter from '../lib/DWriter';
import EHashTable from '../lib/EHashTable';


function execLessonArrays() {


  const writer = new DWriter('app',true);

  // HashTables

  const hashTable = new EHashTable(50);

  console.log(hashTable)


  hashTable.set('Mariana', 1996);
  hashTable.set('Diego', 1994);
  hashTable.set('6buzg', 2000);
  hashTable.set('zvu24', 2001);
  hashTable.set('Roberta', 2014);
  hashTable.set('Federica', 2023);

  console.log(hashTable)

  // Render Html Texts [ Array Class Implemention ] 
  writer.append(writer.addCard('Hash Tables',
    writer.addParragraph(notebook.hash_tables.text_1) +
    writer.addCodeBlock(notebook.hash_tables.code_1)
  ))

  writer.point('card-hash-tables');

  writer.append(
    writer.addParragraph(notebook.hash_tables.text_2) +
    writer.addCodeBlock(notebook.hash_tables.code_2)
  )


  writer.append(
    writer.addParragraph(notebook.hash_tables.text_3) +
    writer.addCodeBlock(notebook.hash_tables.code_3)
  )
  console.log('Get value of "Mariana":', hashTable.get('Mariana'));
  console.log('Get value of "Juliana":', hashTable.get('Juliana'));

  writer.append(
    writer.addParragraph(notebook.hash_tables.text_4) +
    writer.addCodeBlock(notebook.hash_tables.code_4)
  )

  const mariana = hashTable.remove('6buzg');

  console.log('Value removed:', mariana);
  console.log(hashTable);



  writer.append(
    writer.addParragraph(notebook.hash_tables.text_5) +
    writer.addCodeBlock(notebook.hash_tables.code_5)
  )

  console.log(hashTable.getAllKeys())


  writer.append(
    writer.addParragraph(notebook.hash_tables.text_6) +
    writer.addCodeBlock(notebook.hash_tables.code_6)
  )
}
export default execLessonArrays;