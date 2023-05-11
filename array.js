//Print "apple" from each of the arrays below to the console

const fruits1 = ["apple", "pear", "strawberry", "grape"];
// console.log(fruits1[0])

const fruits2 = [
    ["strawberry", "grape"],
    ["rambutan", "durian"],
    ["orange", "apple"]
];
// console.log(fruits2[2][1])

const fruits3 = [
    ["strawberry",
        ["pineapple"]
    ],
    ["grape",
        ["pear", 
        ["apple"], "kiwi"]
    ]
];

// console.log(fruits3[1][1][1][0])

const found = fruits1.find(function(item){
    return item === 'apple';
})
console.log(found);