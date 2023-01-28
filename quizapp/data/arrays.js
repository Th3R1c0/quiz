;
export const methods = [
    'Array.prototype.concat()',
    'Array.prototype.copyWithin()',
    'Array.prototype.entries()',
    'Array.prototype.every()',
    'Array.prototype.fill()',
    'Array.prototype.filter()',
    'Array.prototype.find()',
    'Array.prototype.findIndex()',
    'Array.prototype.findLast()',
    'Array.prototype.findLastIndex()',
    'Array.prototype.flat()',
    'Array.prototype.flatMap()',
    'Array.prototype.forEach()',
    'Array.from()',
    'Array.prototype[@@iterator]()',
]



export const arrays = [
     {
        name: 'sum', 
        desc: 'add the sum of the items of a array',
        answers: [['1','2','3'],'6'], //1+2+3 should be 6
        functionAnswer: (arr) => {return arr.reduce((head, tail) => head+tail)},
        starter: `function sum(arr) {
            //you should be able to sum the items of an array
            return 'hello world'
        }`
    },
    {
        name: 'Remove', 
        desc: 'you should be able to remove all instances of a value from an array',
        answers: [[[1,2,3], 3],[1,2]], //1+2+3 should be 6
        functionAnswer: (arr, item) => {return arr.reduce((head, tail) => head+tail)}
    }
]


export const arrayss= {
    sum: `function sum(arr) {
        //you should be able to sum the items of an array
        console.log('asdf')
    }`,
  
    remove: function(arr, item) {
        //you should be able to remove all instances of a value from an array
    },
  
    removeWithoutCopy: function(arr, item) {
        //you should be able to remove all instances of a value from an array, returning the original array
    },
  
    append: function(arr, item) {
  
    },
  
    truncate: function(arr) {
  
    },
  
    prepend: function(arr, item) {
  
    },
  
    curtail: function(arr) {
  
    },
  
    concat: function(arr1, arr2) {
  
    },
  
    insert: function(arr, item, index) {
  
    },
  
    count: function(arr, item) {
  
    },
  
    duplicates: function(arr) {
  
    },
  
    square: function(arr) {
  
    },
  
    findAllOccurrences: function(arr, target) {
  
    },
};
  