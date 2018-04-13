// class HashMap {
//     constructor(initialCapacity=8) {
//         this.length = 0;
//         this._slots = [];
//         this._capacity = initialCapacity;
//         this._deleted = 0;
//     }

//     get(key) {
//         const index = this._findSlot(key);
//         if (this._slots[index] === undefined) {
//             throw new Error('Key error');
//         }
//         return this._slots[index].value;
//     }

//     set(key, value) {
//         const loadRatio = (this.length + this._deleted + 1) / this._capacity;
//         if (loadRatio > HashMap.MAX_LOAD_RATIO) {
//             this._resize(this._capacity * HashMap.SIZE_RATIO);
//         }

//         const index = this._findSlot(key);
//         this._slots[index] = {
//             key,
//             value,
//             deleted: false
//         };
//         this.length++;
//     }

//     remove(key) {
//         const index = this._findSlot(key);
//         const slot = this._slots[index];
//         if (slot === undefined) {
//             throw new Error('Key error');
//         }
//         slot.deleted = true;
//         this.length--;
//         this._deleted++;
//     }

//     _findSlot(key) {
//         const hash = HashMap._hashString(key);
//         const start = hash % this._capacity;

//         for (let i=start; i<start + this._capacity; i++) {
//             const index = i % this._capacity;
//             const slot = this._slots[index];
//             if (slot === undefined || (slot.key == key && !slot.deleted)) {
//                 return index;
//             }
//         }
//     }

//     _resize(size) {
//         const oldSlots = this._slots;
//         this._capacity = size;
//         // Reset the length - it will get rebuilt as you add the items back
//         this.length = 0;
//         this._deleted = 0;
//         this._slots = [];

//         for (const slot of oldSlots) {
//             if (slot !== undefined && !slot.deleted) {
//                 this.insert(slot.key, slot.value);
//             }
//         }
//     }

//     static _hashString(string) {
//         let hash = 5381;
//         for (let i=0; i<string.length; i++) {
//             hash = (hash << 5) + hash + string.charCodeAt(i);
//             hash = hash & hash;
//         }
//         return hash >>> 0;
//     }
// }

// HashMap.MAX_LOAD_RATIO = 0.9;
// HashMap.SIZE_RATIO = 3;

class HashMap {
    constructor(initialCapacity=8) {
        this.length = 0;
        this.hashTable = [];
        this._capacity = initialCapacity;
        this._deleted = 0;
    }
    _findSlot(key) {
        const hash = HashMap._hashString(key);
        const index = hash % this._capacity;
        let slot = this.hashTable[index];
        if (!slot) {
            return this.hashTable[index] = {key};
        }
        if (slot.key == key) 
            return slot;
        while (slot.next) {
            slot = slot.next;
            if (slot.key == key) 
                return slot;
        }
        return slot.next = {key};
    }

    static _hashString(string) {
        let hash = 5381;
        for (let i=0; i<string.length; i++) {
        //Bitwise left shift with 5 0s - this would be similar to
        //hash*31, 31 being the decent prime number
        //but bit shifting is a faster way to do this
        //tradeoff is understandability
            hash = (hash << 5) + hash + string.charCodeAt(i);
            //converting hash to a 32 bit integer
            hash = hash & hash;
        }
        //making sure has is unsigned - meaning non-negtive number
        return hash >>> 0;
    }
     _resize(size) {
        const oldSlots = this.hashTable;
        this._capacity = size;
        // Reset the length - it will get rebuilt as you add the items back
        this.length = 0;
        this._deleted = 0;
        this.hashTable = [];

        for (let i=0; i<oldSlots.length; i++)
            for (let slot = oldSlots[i]; slot; slot = slot.next) {
                if (!slot.deleted)
                    //copy to a new array
                    this.insert(slot.key, slot.value);
            }
                
    }

    insert(key, value){
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }
        const index = this._findSlot(key);
        if (index.deleted !== false) 
            this.length++;
        index.value = value;
        index.deleted = false;
    }

    remove(key){
        const loadRatio = (this.length + this._deleted + 1) / this._capacity;
        if (loadRatio > HashMap.MAX_LOAD_RATIO) {
            this._resize(this._capacity * HashMap.SIZE_RATIO);
        }
        const slot = this._findSlot(key);
        if (slot.deleted) 
            throw new Error('Key error');
        slot.deleted = true;
        this.length--;
        this._deleted++;
    }
  
    get(key) {
        const slot = this._findSlot(key);
        if (slot.deleted) 
            throw new Error('Key error');
        return slot.value;
    }
    //Enumerate all valid keys in the map and save them to an array
    //this way you don't have to access the HashMap members
    keys() {
        const ret = [];
        for (let i = 0; i < this.hashTable.length; ++i)
            for (let slot = this.hashTable[i]; slot; slot = slot.next)
                if (!slot.deleted)
                    ret.push(slot.key);
        return ret;
    }
}

function displayHashMapKeys (hTable){
    const arr = hTable.keys();
    for (let i = 0; i < arr.length; i++){  
        console.log(`Bucket ${i} : ${arr[i]}`);            
    }
}

function main(){
    let hTable = new HashMap();
    let names = [{Hobbit:"Bilbo"}, {Hobbit2:"Frodo"}, {Wizard:"Gandolf"}, {Human:"Aragon"},
    {Elf: "Legolas"}, {Maiar:"The Necromancer"}, {Maiar2: "Sauron"}, {RingBearer: "Gollum"},
    {LadyOfLight: "Galadriel"}, {HalfElven: "Arwen"}, {ShepherdOfTheTrees: "Treebeard"}];
    
    for (var i = 0; i < names.length; ++i) {
      for (let keys in names[i]){
        hTable.insert(keys,names[i][keys]);
      }
    }
      hTable.insert("Instructor", "Tauhida");
      hTable.remove('Instructor')
      hTable.insert("Instructor2", "Chris");
      hTable.insert("TA", "Joshua");
      //console.log(hTable);
      displayHashMapKeys(hTable);
  
  }
  main();

  function _sortword(word) {
	return word.split('').sort().join('')
}
function group_into_anagrams(words) {
    let anagrams = new HashMap(), ret = [];
    for (let word of words) {
        let key = _sortword(word); //east 
        if (anagrams.get(key)){
            anagrams.get(key).push(word);
        } 
        else {
          ret.push(anagrams.insert(key, [word]));
        }
    }
    return ret;
}

console.log(group_into_anagrams("hello", "it", "is", "me"));