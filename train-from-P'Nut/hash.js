class HashTable {
    constructor(size) {
      this.bucket = new Array(size);
      this.length = this.bucket.length;
    }
    
    hash(key) {
      let hash = 0;
      for (let i = 0; i < key.length; i++) {
        hash += key.charCodeAt(i) * i;
      }
      return hash % this.length;
    }
      
    set(key, value) {
      const indexes = this.hash(key);
      if (this.bucket[indexes] === undefined) {
        this.bucket[indexes] = [
          [key, value]
        ];
      } else {
         let inserted = false;
         for (let i = 0; i < this.bucket[indexes].length; i++) {
            if (this.bucket[indexes][i][0] === key) {
              this.bucket[indexes][i][1] = value;
              inserted = true;
              break;
            }
         }
         if (!inserted) {
           this.bucket[indexes].push([key, value])
         }
      }
    }
    
    lookup(key) {
      const indexes = this.hash(key);
      for (let i = 0; i < this.bucket[indexes].length; i++) {
        if (this.bucket[indexes][i][0] === key) {
          return this.bucket[indexes][i][1];
        }
      }
      return null;
    }
    deleteOne(key) {
      const indexes = this.hash(key);
      if (this.bucket[indexes].length > 1) {
        this.bucket[indexes].splice(1,1);
      }
      return "This index has only one key";
    }

    deleteMoreThanOne(key) {
      const indexes = this.hash(key);
      if (this.bucket[indexes].length > 1) {
        for (let i = this.bucket[indexes].length; i > 1; i--) {
          this.bucket[indexes].splice(i-1,1);
        }
      }
      return "This index has only one key";
    }

  
  }
    
  
  
  const hs = new HashTable(5);
  hs.set('nuttipong', true);
  hs.set('neeya', true);
  hs.set('near', true);
  hs.set('nuttipong', false);
  hs.set('neeya', false);
  hs.delete('near');
  console.log(hs);
  //console.log(hs);
  
  /*HashTable
  
  [indexs, object]
  
  
  key --> hash function(key) ---> buckets [ 1 , true ]
  
  nutt -> abc -> [ abc , true ]
  neeya -> def -> [ def , true ]
  near -> ght -> [ ght , true ]
  
  keys
  nutt true
  neeya true
  near false
  */