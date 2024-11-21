class EHashTable{
  
  constructor($_size) {
    this.length = 0,
    this.data = Array($_size)
  }

  /**
   * @function hasMethod(key)
   * Calculates a hash value for the key to determine 
   * where to store it in the data array
   * 
   * @param {String} key
   * @return {Number} 
   */
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  /**
   * @function set(key,value)
   * Sets a key-value pair in the hash table. 
   * Hashes the key, handles collisions, throws error if key exists, 
   * increments length, and sets the bucket back in the data array.
   * 
   * @param {String} key 
   * @param {Any} value
   * @return {Array} The updated data array
  */
  set($_key,$_value){
    // Hashing key
    const address = this.hashMethod($_key)
    let bucket = this.data[address];
    // Handle collisions
    bucket = bucket ?? []
    // Check if key exists
    if(!bucket.find(ele => ele[0] === $_key)){
        // push new item 
        bucket.push([$_key,$_value]);
        // increment length
        this.length++;
    }else {
      throw new Error('Key already exists');
    }
    // Set bucket back
    this.data[address] = bucket;

    return this.data;
  }
  /**
   * @function get(key)
   * Returns the value if the key is found, otherwise returns undefined.
   * 
   * Uses findEntry() to locate the entry in the hash table.
   * 
   * @param {String} key
   * @return {Any} The value associated with the key or undefined
  */

  get($_key) {
    // Use find method to locate entry
    const entry = this.findEntry($_key)
    // Returns the value if the key is found
    return entry ? entry[1] : undefined; 
  }
  /**
   * @function findBucket(key)
   * Calculates the hash value for the key to determine 
   * where to locate the bucket in the data array.
   * 
   * @param {String} key 
   * @return {Array} The bucket array
  */

  findBucket($_key){
    const address = this.hashMethod($_key);
    return this.data[address];
  }
  /**
   * @function findEntry(key)  
   * Locates the bucket for the given key using findBucket(),
   * then searches the bucket array for the entry with matching key.
   * 
   * @param {String} key
   * @return {Array} The key-value pair array, or undefined if not found.
  */

  findEntry($_key){
    const bucket = this.findBucket($_key);
    if(!bucket) return undefined;
    // Find entry with matching key
    return bucket.find(entry => entry[0] === $_key)
  }


/**
 * @function remove(key)
 * Removes the entry associated with the given key from the hash table.
 * 
 * Finds the entry using findEntry(). Removes the entry from the bucket.
 * If the bucket is empty after removal, deletes the bucket.
 * Decrements the length property.
 * 
 * @param {String} key
 * @return {Array|undefined} The removed entry array or undefined if key not found. 
*/
remove($_key){
    const entry = this.findEntry($_key);

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
    return entry?? undefined ;
  }

/**
 * @function getAllKeys()
 * Returns an array containing all the keys stored in the hash table.
 * 
 * Loops through all buckets in the data array.
 * Concatenates the key from each entry into the keys array.
 * 
 * @return {Array} An array containing all keys
*/
getAllKeys(){
    let keys = []
    // Loop through data array
    Object.values(this.data).forEach(bucket => {
      // Loop through bucket array and extract keys
      keys = keys.concat( bucket.map(entry => entry[0]));
    })
    return keys;
  }
  
}

export default EHashTable;