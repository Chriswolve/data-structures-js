class EArray{
  constructor() {
    this.length = 0,
    this.data = {}
  }
  get($_index){
    return this.data[$_index];
  }
  push($_item){
     // Add an element to array
    this.data[this.length++] = $_item;
  }

  remove($_index) {
    // Save the element to be removed
    const ele = this.get($_index);
    
    if(ele === undefined)
      return undefined 
    // shiftIndex the array 1 position on the left
    this.shiftIndexLeft($_index)
    // flush space the last one (Duplicate)
    delete this.data[--this.length];
    // return the removed item
    return ele;
  }
  shiftIndexLeft($_n){
    // Displace the array 1 position on the left
    for (let i = $_n; i < this.length - 1; i++) { 
      this.data[i] = this.data[i+1];
    }
  }
  shiftIndexRight($_n){
    // Displace the array 1 position on the rigth
    for (let i = this.length-1; i > $_n ; i--) { 
      this.data[i] = this.data[i-1];
    }
  }
  pop(){
    // Remove and return the last element 
    return this.remove(this.length -1);
  }
  shift(){
    // Remove and return the first element 
    return this.remove(0);
  }
  delete($_index){
    // Remove an element by index
    this.remove($_index);
  }

  splice($_index,$_n,$_item = undefined){
    if($_item !== undefined){
      $_n--;
      this.data[$_index+ $_n] = $_item;
    }
      
    for (let i = 0; i < $_n; i++) {
      this.remove($_index)
    }
  }

  unshift($_item){
    if ($_item) {
      this.push('null')
      this.shiftIndexRight(0)
      this.data[0] = $_item;
    }
    return this.length;
  }
  
}

export default EArray;