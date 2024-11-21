
const notebook = {
  blocks: {
    code_block:`
    <div class="relative mx-auto px-4 mt-6 w-full mb-6">
      <div class="bg-zinc-800 text-white p-4 rounded-md w-full">
        <div class="flex justify-between items-center mb-2">
          <span class="text-gray-400">Code:</span>
            <button class="code code-btn bg-zinc-900 hover:bg-gray-700 text-gray-300 px-3 py-1 rounded-md" data-clipboard-target="#{{CODE_ID}}">
          Copy
        </button>
        </div>
        <div class="overflow-x-auto">
          <pre id="{{CODE_ID}}" class="text-gray-300 text-[11px] -mt-6">
            <code>
            {{CODE_TEXT}}
            </code>  
          </pre>
        </div>
      </div>
    </div>
    `,
    card: `
    <div class="dark:bg-zinc-950 flex">
      <div class="mx-auto my-24 flex w-[780px] flex-col rounded-lg bg-white dark:bg-zinc-900 text-white shadow-xl">
        <div class="mt-4 px-4">
          <h1 class="mx-auto my-1 font-bold text-[20px] text-gray-400">{{CARD_HEADER}} </h1>
        </div>
        <div id="{{CARD_ID}}">
          {{CARD_BODY}}
        </div>
      </div>
    </div>
    `,
    parragraph:  `
    <div class="mt-2 mx-auto px-4 w-full">
      <p id="arrays_text" class="mx-auto text-[14px] my-1 w-full text-gray-400"> {{PARRAGRAPH_TEXT}} </p>
    </div>`
  },

  arrays: {
    text_1: `
    1. Crear una clase <b>EArray::class</b>  el cual debe simular a un array nativo en JS:
    `,
    code_1:  `
    // EArray.js
    class EArray{
      constructor() {
      this.lenght = 0,
      this.data = {}
      }
    }
    export default EArray;

    // main.js

    import EArray from './lib/EArray';

    const array = new EArray();
    console.log(array)
    `,
    text_2: `
    2. Crear el metodo <b> Array.push() </b> y añadir los siguientes elementos : </p> <br>
    <div class="text-[14px] text-gray-400">
      <span> 
        Antes:  
        <pre class="text-yellow-600 text-[12px]">
          array = []
        </pre>
      </span>
      
      <span>
        Despues:   
        <pre class="text-lime-500 text-[12px]"> 
          array = ['Alejandro','Pedro','Julian','Federica'] 
        </pre> 
      </span>
    </div>
    `,
    code_2: `
    //js
    /*  EArray.js */
    class EArray{
      // ... constructor
      push($_item){
        this.data[this.lenght] = $_item;
        this.lenght++;
        return this.data;
      }
    }
    // export ...

    /*  main.js */
    // ... EArray instantiation

    array.push("Alejandro");
    array.push("Pedro");
    array.push("Julian");
    array.push("Federica");
    //
    console.log(array.data) 
    //!js
    `,
    text_3: `
    <!--html-->
    3. Crear el metodo <b> Array.pop() </b> este debe tener el siguiente comportamiento : </p> </br>
    <div class="text-[14px] text-gray-400">
      <span> 
        Antes:  
        <pre class="text-yellow-600 text-[12px]"> 
          array = ['Alejandro','Pedro','Julian','Federica']
        </pre>
      </span>
      
      <span>
        Despues:   
        <pre class="text-lime-500 text-[12px]">
          extracted = 'Federica' 
          array = ['Alejandro','Pedro','Julian'] 
        </pre> 
      </span>
    </div>
    <!--!html-->
    `,
    code_3:  `
    /*  EArray.js */
    class EArray{
      // ... constructor
      // ... push()
      
      pop(){
        const ele = this.data[--this.lenght]
        delete this.data[this.lenght]; 
        return ele;
      }
    }
    // export ...

    /*  main.js */
    // ... EArray instantiation
    // ... Pushing Items
    const federica = array.pop();

    console.log('item: ',federica);
    console.log(array)

    `,

    text_4: `
    4. Crear el metodo <b> Array.remove($index) </b> el cual permita eliminar un elemento en base a un índice determinado: <br> <br> </p>
    <div class="text-[14px] text-gray-400">
      <span> 
        Antes:  
        <pre class="text-yellow-600 text-[12px]"> 
          array = ['Alejandro','Pedro','Julian']
        </pre>
      </span>
      
      <span>
        Despues:   
        <pre class="text-lime-500 text-[12px]"> 
          array = ['Alejandro','Julian'] </pre> 
      </span>
    </div>
   
    `,
    code_4:  `
    /*  EArray.js */
    class EArray{
      // ... constructor
      // ... push()
      // ... pop()
      displaceLeft($_n){
        // Displace the array 1 position on the left
        for (let i = $_n; i < this.length - 1; i++) { 
          this.data[i] = this.data[i+1];
        }
      }
      remove($_index) {
        // Save the element to be removed
        const ele = this.get($_index);
        
        if(ele === undefined)
          return -1 
        // Displace the array 1 position on the left
        this.displaceLeft($_index)
        // flush space the last one (Duplicate)
        delete this.data[--this.length];
        // return the removed item
        return ele;
      }
    }
    // export...

    /*  main.js */

    // ... EArray instantiation
    // ... Pushing Items
    // ... Extract 'Federica'

    array.remove(1); // Pedro 

    console.log(array)
    `,
    text_5: `
    5. Modificar el metodo <b> Array.pop() </b> para que este utilice el metodo <b> Array.remove() </b>:
    `,
    code_5:  `
    /*  EArray.js */
    class EArray{
      // ... constructor
      // ... push()
      // ... remove()

      pop(){
        return this.remove(this.lenght-1);
      }
    }
    `,
    text_6: `
    
    6. Añadir dos elementos mas : ['Jeronimo','Cerafina'], e implementar el metodo <b> Array.shift() </b>. Este debe extraer el primer elemento del Array: </p> </br>
    <div class="text-[14px] text-gray-400">
      <span> 
        Antes:  
        <pre class="text-yellow-600 text-[12px]"> 
          array = ['Alejandro','Julian','Jeronimo','Cerafina']
        </pre>
      </span>
      
      <span>
        Despues:   
        <pre class="text-lime-500 text-[12px]">
          extracted = 'Alejandro' 
          array = ['Julian','Jeronimo','Cerafina'] 
        </pre> 
      </span>
    </div>
    `,
    code_6:  `
    /*  EArray.js */
    class EArray{
      // ... constructor
      // ... push()
      // ... remove()

      shift(){
        // Remove and return the first element 
        return this.remove(0);
      }
    }
    `,
    text_7: `
    
    7. Implementar el método <b> Array.unshift($item) </b> el cual añade un elemento en la primera posición del array </p> </br>
    <div class="text-[14px] text-gray-400">
      <span> 
        Antes:  
        <pre class="text-yellow-600 text-[12px]"> 
          new = 'Jack Sparrow'
          array = ['Julian','Jeronimo','Cerafina']
        </pre>
      </span>
      
      <span>
        Después:   
        <pre class="text-lime-500 text-[12px]">
          array = ['Jack Sparrow','Julian','Jeronimo','Cerafina'] 
        </pre> 
      </span>
    </div>
    `,
    code_7:  `
    /*  EArray.js */
    class EArray{
      // ... constructor
      // ... push()
      // ... remove()

      shiftIndexRight($_n){
        // Displace the array 1 position on the right
        for (let i = this.length-1; i > $_n ; i--) { 
          this.data[i] = this.data[i-1];
        }
      }

      unshift($_item){
        this.push('empty')
        this.displaceRight(0)
        this.data[0]= $_item;
      }
    }
    `
  },

  hash_tables:{
    text_1: `
    1. Implementar la Clase <b>EHashTable::class</b>  el cual debe representar una estructura de datos Clave:Valor
    `,
    code_1:  `
    class EHashTable{
      constructor($_size) {
        this.length = 0,
        this.data = Array($_size)
      }      
    }
    `,
    text_2: `
    2. Implementar en método <b>EHashTable::hashMethod($key)</b> el cual permite obtener un hash en base al key que enviemos </p>
    `,
    code_2:  `
    class EHashTable{
      // constructor

      hashMethod(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
          hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
      }
    }
    `,
    text_3: `
    2. Implementar en método <b>EHashTable::set($_key,$_value)</b> el cula permite ingresar un nuevo elemento a una Hash Table </p>
    `,
    code_3:  `
    class EHashTable{
      // constructor
      // hashMethod 

      set($_key,$_value){
        // Hashing key
        const address = this.hashMethod($_key)
        // Handle collisions
        if(!this.data[address]){
          this.data[address] = []
        }
        // push new item 
        this.data[address].push([$_key,$_value]);
        // increment length
        this.length++;
        return this.data;
      }
    }
    `,
    text_4: `
    4. Implementar en método <b>EHashTable::get($_key)</b> el cual permite acceder a un elemento registrado en una Hash Table </p>
    <div class="text-[14px] text-gray-400">
      <span> 
        Antes:  
        <pre class="text-yellow-600 text-[12px]">
          hashTable = {
            'Alejandro': ('Alejandro',1990),
            'Pedro': ('Pedro',1990),
          }
        </pre>
      </span>
      
      <span>
        Despues:   
        <pre class="text-lime-500 text-[12px]"> 
           alejandro = hashTable.get('Alejandro')
           daniel = hashTable.get('Daniel)  -> null
        </pre> 
      </span>
    </div>
    `,
    code_4:  `
    class EHashTable{
      // constructor
      // hashMethod 

      get($_key) {
        // Hashing key
        const address = this.hashMethod($_key);
        // Get the bucket
        const bucket = this.data[address];
        // Check if key exists in bucket
        if (!bucket) return undefined;
        // find entry with matching key -> bueket[0]
        const entry = bucket.find(entry => entry[0] === $_key)
        // Returns the value if the key is found
        return entry ? entry[1] : undefined; 
      }
    }
    `,
    text_5: `
    5. Implementar en método <b>EHashTable::remove($_key)</b> el cual permite eliminar a un elemento registrado en una Hash Table </p>
    <div class="text-[14px] text-gray-400">
      <span> 
        Antes:  
        <pre class="text-yellow-600 text-[12px]">
          hashTable = {
            'Alejandro': ('Alejandro',1990),
            'Pedro': ('Pedro',1990),
          }
        </pre>
      </span>
      
      <span>
        Despues:   
        <pre class="text-lime-500 text-[12px]"> 
           alejandro = hashTable.remove('Alejandro')
           
           hashTable = {
            'Pedro': ('Pedro',1990),
          }
        </pre> 
      </span>
    </div>
    `,
    code_5:  `
    class EHashTable{
      // constructor
      // hashMethod 

      // Refactor helper methods 
      findBucket($_key){
        const address = this.hashMethod($_key);
        return this.data[address];
      }
    
      findEntry($_key){
        const bucket = this.findBucket($_key);
        if(!bucket) return undefined;
        // Find entry with matching key
        return bucket.find(entry => entry[0] === $_key)
      }
    
      remove($_key){
        const entry = this.findEntry($_key)
        const value = entry ? entry[1] : undefined;
    
        if(entry){
          // Locate bucket
          const bucket = this.findBucket($_key);
          // Remove entry from bucket
          bucket.splice(bucket.indexOf(entry), 1);
          // Removes the bucket if it's empty 
          if(bucket.length === 0){
            delete this.data[this.data.indexOf(bucket)];
          }
          // Decrement data length
          this.length--;
        }
        return value;
      }
    }
    `,
    text_6: `
    6. Implementar en método <b>EHashTable::getAllKeys()</b> el cual listar las claves (Keys) de una Hash Table </p>
    <div class="text-[14px] text-gray-400">
      <span> 
        Antes:  
        <pre class="text-yellow-600 text-[12px]">
          hashTable = {
            'Alejandro': ('Alejandro',1990),
            'Pedro': ('Pedro',1990),
            'Juan': ('Juan', 1991),
          }
        </pre>
      </span>
      
      <span>
        Despues:   
        <pre class="text-lime-500 text-[12px]"> 
           keys = hashTable.getAllKeys()
           keys = ['Alejandro', 'Pedro', 'Juan'];
            
        </pre> 
      </span>
    </div>
    `,
    code_6:  `
    class EHashTable{
      // constructor
      // hashMethod 

      getAllKeys(){
        let keys = []
        Object.values(this.data).forEach(bucket => {
          keys = keys.concat( bucket.map(entry => entry[0]));
        })
        return keys;
    
      }
    }
    `,
  },

  linked_list:{
    text_1: `
    1. Implementar la Clase <b>ELinkedList::class</b>  el cual debe representar una estructura de lista por nodos independientes
    `,
    code_1:  `
    class ENode {
      constructor(value) {
        this.value = value;
        this.next = undefined;
      }
      isEmpty() {
        return this.value === undefined;
      }
    }

    class ELinkedList {
  
      constructor($_item = undefined) {
        this.length = 0,
          this.head = this.tail = new ENode($_item);
        $_item && this.length++
      }
    }
    `,
    text_2:  `
    2. Implementar en método <b>ELinkedList::addFirst($item)</b> el cual permite añadir un elemento al inicio de la lista </p>
    `,
    code_2:  `
    class ELinkedList{
      // constructor

      addFirst($_item) {
        // Create a new node
        const node = new ENode($_item);
    
        if (this.length === 0) {
          this.head = this.tail = node;
        }
        else {
          // Set the new element to the head
          node.next = this.head;
          this.head = node;
        }
        this.length++
      }
    }
    `,
    text_3:  `
    2. Implementar en método <b>ELinkedList::addLast($item)</b> el cula permite añadir un elemento al final de la lista </p>
    `,
    code_3:  `
    class EHashTable{
      // constructor

      addLast($_item) {
        const node = new ENode($_item);
    
        if (this.length === 0) {
          this.head = this.tail = node;
        }
        else {
          // Set the new element to the tail
          this.tail.next = node;
          this.tail = node;
        }
        this.length++
      }
    }
    `,
    text_4:  `
    4. Implementar en método <b>ELinkedList::insert($item,$pos)</b> el cual permite añadir un elemento en una posición de la lista </p>
    <div class="text-[14px] text-gray-400">
      <span> 
        Antes:  
        <pre class="text-yellow-600 text-[12px]">
          LinkedList = [0,1,2,4,5]
        </pre>
      </span>
      
      <span>
        Despues:   
        <pre class="text-lime-500 text-[12px]"> 
        LinkedList.insert(3,2) 
        LinkedList = [0,1,2,3,4,5]
        </pre> 
      </span>
    </div>
    `,
    code_4:  `
    class ELinkedList{
      // constructor

      insert($_item, $_position) {
        const node = new ENode($_item);
        let pointer = this.head;
    
        if($_position > this.length){
          throw new Error("List index out of bounds")
        }
    
        if($_position == 0){
          this.addFirst($_item); // prepend
          return;
        }
        
        while ($_position > 1) {
          pointer = pointer.next;
          $_position--;
        }
    
        node.next = pointer.next
        pointer.next = node;
        this.length++
      }
    }
    `,
    text_5:  `
    5. Implementar en método <b>ELinkedList::remove($pos)</b> el cual permite eliminar a un elemento en una Linked List </p>
    <div class="text-[14px] text-gray-400">
      <span> 
        Antes:  
        <pre class="text-yellow-600 text-[12px]">
          LinkedList = [0,1,2,3,4,5]
        </pre>
      </span>
      
      <span>
        Despues:   
        <pre class="text-lime-500 text-[12px]"> 
          LinkedList.remove(4)
           
          LinkedList = [0,1,2,3,5]
        </pre> 
      </span>
    </div>
    `,
    code_5:  `
    class ELinkedList{
      // constructor
      remove($_position){
        let pointer = this.head;
    
        if($_position >= this.length){
          throw new Error("List index out of bounds")
        }
    
        if($_position == 0){
          this.head = this.head.next;
        }else{
          while ($_position > 1) {
            pointer = pointer.next;
            $_position--;
          }
      
          pointer.next = pointer.next.next
        }
        this.length --;
    
      }
    }
    `
  },

  double_linked_list:{
    text_1: `
    1. Implementar la Clase <b>EDoubleLinkedList::class</b>  el cual debe representar una estructura de lista por nodos independientes de doble relacion
    `,
    code_1:  `
    class ENode {
      constructor(value) {
        this.value = value;
        this.next = undefined;
        this.prev = undefined;
      }
    }

    class EDoubleLinkedList {
  
      constructor($_item = undefined) {
        this.length = 0;
        this.head = this.tail = new ENode($_item);
        $_item && this.length++;
      }
    }
    `,
    text_2: `
    2. Implementar en método <b>EDoubleLinkedList::addFirst($item)</b> el cual permite añadir un elemento al inicio de la lista </p>
    `,
    code_2:  `
    class EDoubleLinkedList{
      // constructor

      addFirst($_item) {
        // Create a new node
        const node = new ENode($_item);
    
        if (this.length === 0) 
          this.head = this.tail = node;
        else {
          // Set the new element to the head
          this.head.prev = node;
          node.next = this.head;
          this.head = node;
        }
        this.length++
      }
    }
    `,
    text_3: `
    2. Implementar en método <b>EDoubleLinkedList::addLast($item)</b> el cula permite añadir un elemento al final de la lista </p>
    `,
    code_3:  `
    class EDoubleLinkedList{
      // constructor

      addLast($_item) { // append
        const node = new ENode($_item);
    
        if (this.length === 0) 
          this.head = this.tail = node;
    
        else {
          // Set the new element to the tail
          node.prev = this.tail;
          this.tail.next = node;
          this.tail = node;
        }
        this.length++
      }
    }
    `,
    text_4: `
    4. Implementar en método <b>EDoubleLinkedList::insert($item,$pos)</b> el cual permite añadir un elemento en una posición de la lista </p>
    <div class="text-[14px] text-gray-400">
      <span> 
        Antes:  
        <pre class="text-yellow-600 text-[12px]">
        EDoubleLinkedList = [0,1,2,4,5]
        </pre>
      </span>
      
      <span>
        Despues:   
        <pre class="text-lime-500 text-[12px]">
        node3 = EDoubleLinkedList.getByIndex(3) 

        EDoubleLinkedList.insert(3,2) 
        EDoubleLinkedList = [0,1,2,3,4,5]
        </pre> 
      </span>
    </div>
    `,
    code_4:  `
    class EDoubleLinkedList{
      // constructor

      getByIndex($_position) {

        if ($_position > this.length - 1 || $_position < 0) {
          throw new Error("List index out of bounds")
        }
        // true ->head // false-> tail
        const direction = this.length / 2 > $_position;
        let pointer = this.head;
    
        if (!direction) {
          pointer = this.tail;
          $_position = this.length - $_position - 1
        }
    
        while ($_position > 0) {
          pointer = direction ? pointer.next : pointer.prev;
          $_position--;
        }
    
        return pointer;
      }
    
      insert($_item, $_position) {
        if ($_position === 0) 
          return this.addFirst($_item)
    
        if ($_position === this.length) 
          return this.addLast($_item)
    
        const node = new ENode($_item);
        let pointer = this.getByIndex($_position);
    
        node.prev = pointer.prev;
        pointer.prev.next = node;
        pointer.prev = node;
        node.next = pointer;
    
        this.length++;
      }
    }
    `,
    text_5: `
    5. Implementar en método <b>EDoubleLinkedList::remove($pos)</b> el cual permite eliminar a un elemento en una Linked List </p>
    <div class="text-[14px] text-gray-400">
      <span> 
        Antes:  
        <pre class="text-yellow-600 text-[12px]">
          EDoubleLinkedList = [0,1,2,3,4,5]
        </pre>
      </span>
      
      <span>
        Despues:   
        <pre class="text-lime-500 text-[12px]"> 
          EDoubleLinkedList.remove(4) 
          EDoubleLinkedList = [0,1,2,3,5]
        </pre> 
      </span>
    </div>
    `,
    code_5:   `
    class EDoubleLinkedList{
      // constructor
      remove($_position) {
        let pointer = this.getByIndex($_position);
    
        if (pointer.next) 
          pointer.next.prev = pointer.prev;
        else 
          this.tail = pointer.prev;
    
        if (pointer.prev) 
          pointer.prev.next = pointer.next;
        else 
          this.head = pointer.next;
    
        this.length--;
      }
    }
    `
  }
}

export default notebook;