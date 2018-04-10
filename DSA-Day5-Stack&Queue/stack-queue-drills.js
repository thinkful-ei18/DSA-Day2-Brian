class _Node {
    constructor(data, next) {
        this.data = data;
        this.next = next;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }
    push(data) {
        //if the top of the stack is empty, then the data will be the
        //top of the stack
        if (this.top === null) {
            this.top = new _Node(data, null);
            return this.top;
        }

        //if the top already has something then create a new node
        //add data to the new node
        // have the pointer point to the top 
        const node = new _Node(data, this.top);
        this.top = node;
    }
    pop() {
        //in order to remove the top of the stack, you have to point
        //the pointer to the next item and that next item becomes the
        //top of the stack
        const node = this.top;
        this.top = node.next;
        return node.data;
    }
}

function main() {
    let starTrek = new Stack()

    starTrek.push('Kirk');
    starTrek.push('Spock');
    starTrek.push('McCoy');
    starTrek.push('Scotty');
    
    // function display(starTrek) {
    //     console.log(JSON.stringify(starTrek));
    //   }
    //   display(starTrek);
     console.log(peek(starTrek)); 
     console.log(display(starTrek));
    }

    main()

    function peek(stack) {
        if (stack.top === null) {
        return "null";
    }
    return stack.top.data;
}

  function display(stack) {
        if (stack.top === null) {
            return "null"
        }
            let currentNode = stack.top;
            let data = '';
            while(currentNode) {
                data += `=> ${currentNode.data}`;
                currentNode = currentNode.next;
            }
           return data;
        }

        // function removeItem(stack, value) {
        //     if (stack.top === null)
        //     return 'null'
        // }
        // let 

        function is_palindrome(s) {
       let stack = new Stack()
       let chars = '';
       string = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, "");
    for (let i = 0; i > s; i++) {
        stack.push(string[i])
    }
    for (let i = 0; stack.top !== null; i++) {
        chars = stack.pop(string[i])
    }
    if(string === chars) {
        return true
    } else {
        return false;
    }
        }

console.log(is_palindrome('taco'));

function parenCheck(stack) {
    let paren = new Stack()
    let count = 0;
    let newStr = ''
    for (let i = 0; i < stack.length; i++) {
        paren.push(stack[i])
    }
    for (let i = 0; i < stack.length; i++) {
        newParen = paren.pop();
        if (newParen === ')') {
            count--;
        } else if (newParen === '(') {
            count++;
    }
}
if (count === 0) {
    console.log('Good');
} else {
    console.log('Bad - ')
}
}

parenCheck('())')
        
      
    