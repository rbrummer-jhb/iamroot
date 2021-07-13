# Big O Notation

> It is a way of generalizing code and comparing code and its performance to other code.

There are many solutions that could work. This is about the fastest and most efficient solution.

```js
/*
Write a function that calculates the sum of all
numbers from 1 up to (and including) some number n.
*/

function addUpTo(n) {
    let total = 0;
    for (let i = 0; i <= n; i++) {
        total += i;
    }
    return total;
}

function addUpTo(n) {
    return n * (n + 1) / 2;
}
```

Which one is better, what does better mean?
* Faster?
* Less memory-intensive?
* More readable?

Big O Notation:
* Analyzes the performance of an algorithm.
* Gives high level understanding of the time or space complexity of an algorithm.
* Doesn't care about precision, only about trends (linear, quadratic, constant).
* The time and space complexity depends only on the algorithm, not on the hardware.

## Logarithms
---
**Logs** are paired with **exponents** in the same way **multiplication** and **division** are paired.

A 'log' is the inverse of exponentiation.

2 to what power equals 8?
```
log2^(8)=3 => 2^3=8
log2(value)=exponent => 2^exponent=value
```

Certain searching algorithms have logarithmic time complexity.  
Efficient sorting algorithms involve logarithms.  
Recursion sometimes involves logarithmic space complexity.

# Recursion

Recursion is a process that calls itself.  
Recursive functions keep pushing new functions onto the Call Stack.  
> A **Stack** is actually also a data structure.  
> (Things are added to the top, and things are removed first from the top.)

Common Recursion Pitfalls:
* Stack overflow!
    * No base case.
    * Forgetting to return or returning the wrong thing.
    * Not manipulating the input.

# Bubble Sort

Sorting is the process of rearranging the items in a collection so that the items are in some kind of order.

Bubble Sort is not very efficient or commonly used, but there is one use where it does excel.

Many sorting algorithms involve some type of swapping functionality.
```js
// ES5
function swap(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
}

// ES6
const swap = (arr, idx1, idx2) => {
    [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
}
```

Bubble Sorting:
```js
// Optimized with no swaps
function bubbleSort(arr) {
    const swap = (arr, idx1, idx2) => {
        [ arr[idx1], arr[idx2] ] = [ arr[idx2], arr[idx1] ];
    };

    let noSwaps;
    for (let i = 0; i < arr.length; i++) {
        noSwaps = true;
        for (let j = 0; j < arr.length; j++) {
            console.log(arr, arr[j], arr[j+1]);
            if (arr[j] > arr[j+1]) {
                swap(arr, j, j+1);
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return arr;
}

bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]);
```

# Selection Sort

Selection sorting is similar to bubble sorting, but instead of first placing large values into sorted position, it places small values into sorted position.

# Data Structures

Data structures are collections of values, the relationships among them, and the functions of operations that can be applied to the data.

Different data structures excel in different situations.

For map and location data a **graph** might be a good data structure.  
For a huge data set involving many insertions and removals a **linked list** might be useful.  
For web scraping a **tree** might be a good data structure option.  
For a scheduler containing priority tasks a **binary heap** would be a well suited data structure.

A **class** is a blueprint for creating objects with pre-defined properties and methods.

# Singly Linked Lists

A **singly linked list** is a data structure that contains a **head, tail** and **length** property.  
Linked lists consist of **nodes**, and each node has a value and a pointer to another node or null.  
Linked lists are not indexed. There is just a **head** (the beginning) and a **tail** (the end).  
**Singly** means the nodes are only pointing to the next node.

> A Linked List is just a collection of nodes.

# Stacks & Queues

**Stack and Queues** are abstract data structures.

A Stack is a collection of data that abides by a **LIFO** (Last In First Out) principle.  
* `push()` and `pop()` are applied to the **beginning** of the list (stack).
* The Big O of stacks are constant time, because we jump right to the beginning of the list.
* Stacks are useful for function invocations, operations like **undo/redo**, site routing, etc.
* Stacks are not always a builtin data structure.

## Stack Pushing Pseudo-Code
### Array Implementation
* The function should accept a value.
* Create a new node with that value.
* If there are no nodes in the stack, set the first and last property to be the newly created node.
* If there is at least one node, create a variable that stores the current first property on the stack.
* Reset the first property to be the newly created node.
* Set the next property on the node to be the previously created variable.
* Increment the size of the stack by 1.
## Stack Popping Pseudo-Code
### Array Implementation
* If there are no nodes in the stack, return null.
* Create a temporary variable to store the first property on the stack.
* If there is only 1 node, set the first and last property to be null.
* If there is more than one node, set the first property to be the next property on the current first.
* Decrement the size by 1.
* Return the value of the node removed.
```js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // PUSHING
    push(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size;
    }
    // POPPING
    pop() {
        let temp = this.first;
        if (!this.first) return null;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
```

A Queue is a collection of data that abides by a **FIFO** (First In First Out) principle.
* `enqueue()` and `dequeue()` can be defined to **add to the beginning** and **remove from the end** of the list (queue).
* The Big O of queues are constant time; there's 2 operations.
* Queues are useful for printing, background system tasks, waiting for an online game, etc.
* Queues are not a builtin data structure.
## Queue Enqueue Pseudo-Code
### Array Implementation
* This function accepts some value.
* Create a new node using that value passed to the function.
* If there are no nodes in the queue, set this node to be the first and last property of the queue.
* Otherwise, set the next property on the current last to be that node, and then set the last property of the queue to be that node.
* Increment the size of the queue by 1.
## Queue Dequeue Pseudo-Code
### Array Implementation
* If there is no first property, just return null.
* Store the first property in a variable.
* See if the first is the same as the last (check if there is only 1 node). If so, set the first and last to be null.
* If there is more than 1 node, set the first property to be the next property of first.
* Decrement the size by 1.
* Return the value of the node dequeued.
```js
class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }
    // ENQUEUEING
    enqueue(val) {
        let newNode = new Node(val);
        if (!this.first) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }
    // DEQUEUEING
    dequeue() {
        if (!this.first) return null;
        let temp = this.first;
        if (this.first === this.last) {
            this.last = null;
        }
        this.first = this.first.next;
        this.size--;
        return temp.value;
    }
}
```

# Binary Search Trees

**'Trees'** are very commonly used in the world.

There's a difference between:
* **Trees**
* **Binary Trees**
* **Binary Search Trees**

Trees are data structures that consist of nodes in a **parent/child** relationship.  
Like actual trees, this parent/child relationship appears to form branches; they are non-linear unlike a list.

There are some rules for trees:
* The **Root** is the top node of the tree.
* Every node is moving away from the root node.
* A **Child** node is a node connected to another node when moving away from the root node.
* A child node cannot point to a parent node.
* **Siblings** are nodes of the same parent.
* A child node cannot point to a sibling (another child node).
* A **Leaf** node is a node with no children.
* An **Edge** is the connection between one node and another.

If some of these rules are not abided by then the structure moves towards being a **Graph**.

Real World examples of Trees:
* HTML DOM
    * Nested HTML elements
* Network Routing
* Abstract Syntax Tree
* Artificial Intelligence (Tic Tac Toe)
* Folders in Operating Systems
* JSON

There are some rules for binary trees:
* Each node can have at most 2 children (binary).
* 0, 1, or 2 children; no more.

There are some rules for binary search trees:
* The rules are the same as binary trees, however, they are also sorted in a particular way; they are kept in an order.
* Every item/node that is less than the root node is located to the left of the root node.
* Every item/node that is more than the root node is located to the right of the root node.
    * These rules are repeated on every child node.
    * This makes it easier to search through a tree.
    * If the value you're looking for is greater than or less than the root node, you can ignore half of the tree.
* On average, the Big O of BSTs (Binary Search Trees) when **searching or inserting** is O(log n).
    * 2x number of nodes: 1 extra step
    * 4x number of nodes: 2 extra steps
    * 8x number of nodes: 3 extra steps

# Tree Traversal

Here's a binary tree:

            10
        6        15
     3     8         20

There are 2 main ways of traversing trees:
* Breadth-first search (BFS)
    * Working across the steps; visiting a sibling node before another child node.
* Depth-first search (DFS)
    * Working down the nodes before visiting sibling nodes, however, there are 3 orders to this:
        * InOrder [3,6,8,10,15,20]
        * PreOrder [10,6,3,8,15,20]
        * PostOrder [3,8,6,20,15,10]

```js
// starter code
class Node {
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor(){
        this.root = null;
    }
    ...
}
```

## Breadth-First Search Pseudo-Code:
### Steps - Iteratively
* Create a queue (this can be an array) and a variable to store the values of nodes visited.
* Place the root node in the queue.
* Loop as long as there is anything in the queue.
    * Dequeue a node from the queue and push the value of the node into the variable that stores the nodes.
    * If there is a left property on the node dequeued - add it to the queue.
    * If there is a right property on the node dequeued - add it to the queue.
Return the variable that stores the values.
```js
...
    // Breadth-First Search
    BFS() {
        let data = [];
        let queue = [];
        let node = this.root;
        queue.push(node);
        while (queue.length) {
            node = queue.shift();
            data.push(node.value);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        return data;
    }
...
```

## Depth-First Search PreOrder Pseudo-Code:
### Steps - Recursively
* Create a variable to store the values of nodes visited.
* Store the root of the BST in a variable called current.
* Write a helper function which accepts a node.
    * Push the value of the node to the variable that stores the values
    * If the node has a left property, call the helper function with the left property on the node.
    * If the node has a right property, call the helper function with the right property on the node.
* Invoke the helper function with the current variable.
* Return the array of values.
```js
...
    // Depth-First Search PreOrder
    DFSPreOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            data.push(node.value);
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
...
```

## Depth-First Search PostOrder Pseudo-Code:
### Steps - Recursively
* Create a variable to store the values of the nodes visited.
* Store the root of the BST in a variable called current.
* Write a helper function which accepts a node.
    * If the node has a left property, call the helper function.
    * If the node has a right property, call the helper function with the right property on the node.
    * Push the value of the node to the variable that store the values.
    * Invoke the helper function with the current variable.
* Return the array of values.
```js
...
    // Depth-First Search PostOrder
    DFSPostOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            if (node.right) traverse(node.right);
            data.push(node.value);
        }
        traverse(current);
        return data;
    }
...
```

## Depth-First Search InOrder Pseudo-Code:
### Steps - Recursively
* Create a variable to store the values of nodes visited.
* Store the root of the BST in a variable called current.
* Write a helper function which accepts a node.
    * If the node has a left property, call the helper function with the left property on the node.
    * Push the value of the node to the variable that stores the values.
    * If the node has a right property, call the helper function with the right property on the node.
* Invoke the helper function with the current variable.
```js
...
    // Depth-First Search InOrder
    DFSInOrder() {
        let data = [];
        let current = this.root;
        function traverse(node) {
            if (node.left) traverse(node.left);
            data.push(node.value);
            if (node.right) traverse(node.right);
        }
        traverse(current);
        return data;
    }
...
```

**When to use BFS and DFS:**
* Time complexity is the same.
* With a **wide** tree, BFS could take up a lot more space for that queue.
* With a **deep** tree, DFS could take up more space.
    * With a **BST** _(where all the left nodes are smaller; all the right nodes are larger)_, **DFS InOrder** gives you the nodes in their underlying order.
    * With **DFS PreOrder**, you will immediately know what the root node is, because it will be given first.

# Binary Heaps
**Heaps** are another category of trees.  
They are very similar to a BST, but with some different rules:
* In a **MaxBinaryHeap**, parent nodes are always larger than child nodes.  
    * The **root node** is always the **largest**, but there are no guarantees between siblings.
* In a **MinBinaryHeap**, parent nodes are always smaller than child nodes.
    * The **root node** is always the **smallest**, but there are no guarantees between siblings.
* **Left** children are always filled out first.
* Max 2 children allowed.

Binary Heaps are used to implement **Priority Queues**, which are very commonly used data structures.  
They are also used quite a bit with **graph traversal algorithms**.

For any index of an array n, the **left child** is stored at **2n+1**; the **right child** is stored at **2n+2**.
For any child node at index n, its parent is at index (n-1)/2 **floored** _(rounded down)_.

## Binary Heap Insert Pseudo-Code:
* Push the value into the values property of the heap.
* Bubble up:
    * Create a variable called `index` which is the length of the values property - 1.
    * Create a variable called `parentIndex` which is the floor of (index-1)/2.
    * Keep looping as long as the values element at the parentIndex is less than the values element at the child index.
        * Swap the value of the values element at the parentIndex with the value of the element property at the child index.
        * Set the index to be the parentIndex, and start over.
## Binary Heap ExtractMax/Remove Pseudo-Code:
In a MaxBinaryHeap, the root node (max) is extracted first, and it is replaced by the last element.  
The new root node is then swapped with child nodes that are larger.
In a MinBinaryHeap, the smallest child node (min) is extracted first.  
* Swap the first value in the values property with the last one.
* Pop from the values property, so you can return the value at the end.
* Have the new root "sink down" to the correct spot.
    * Your parent index starts at 0 (the root).
    * Find the index of the **left** child: 2 * index + 1 (make sure its not out of bounds).
    * Find the index of the **right** child: 2 * index + 2 (make sure its not out of bounds).
    * If the left or right child is greater than the element, swap. If both left and right children are larger, swap with the largest child.
    * The child index you swapped to now becomes the new parent index.
    * Keep looping and swapping until neither child is larger than the element.
    * Return the old root.

```js
class MaxBinaryHeap {
    constructor() {
        this.values = [41, 39, 33, 18, 27, 12];
    }
    insert(value) {
        this.values.push(value);
        this.bubbleUp();
    }
    bubbleUp() {
        let index = this.values.length - 1;
        const element = this.values[index];
        while (index > 0) {
            let parentIndex = Math.floor((index - 1) / 2);
            let parent = this.values[parentIndex];
            if (element <= parent) break;
            this.values[parentIndex] = element;
            this.values[index] = parent;
            index = parentIndex;
        }
    }
}
```

# Priority Queues

A **Priority Queue** is a data structure where each element has a priority.  
Elements with higher priorities are served before elements with lower priorities.  
Priority Queues are separate from heaps, but you can create a heap to implement a priority queue.

## Priority Queue Pseudo-Code:
* Write a MinBinaryHeap - lower number means higher priority.
* Each Node has a `val` and a `priority`. Use the priority to build the heap.
* **Enqueue** method accepts a value and priority, makes a new node, and puts it in the right spot based off of its priority.
* **Dequeue** method removes root element, returns it, and rearranges heap using priority.

# Graphs

This is **not** referring to a chart. A graph is another type of data structure.  
A **graph data structure** consists of a finite (and possibly mutable) set of vertices or nodes or points, together with a set of unordered pairs of these vertices for an **undirected graph** or a set of ordered pairs for a **directed graph**.

> A bunch of nodes with connections between them.

To name a few, **Graphs** are used in:
* Social Networks
* Location / Mapping
* Routing Algorithms
* Visual Hierarchy
* File System Optimizations
* "People also watched"
* "You might also like"
* "People you might know"
* "Frequently bought with"

**Graph Terms**
* Vertex - node
* Edge - connection between nodes
* Weighted/unweighted - values assigned to distances between vertices.

**Graph Types**
* Directed Graph - the node edges have a direction to them e.g., if you follow someone on social media and they don't follow back, that's a one way edge. If they do follow you back, that's a two way edge.
* Undirected Graph - the node edges have no direction associated with them.
* Weighted Graph - the edges are assigned a value. There is information about the connections e.g., if you want to track someone's interactions on specific content on social media.
* Unweighted Graph - Has no value associated with an edge.

To represent a graph, you can use:
* **Adjacency Matrix**
* **Adjacency List**
    * **Hash Tables**

## Graph Adding a Vertex Pseudo-Code:
* Write a method called `addVertex()`, which accepts a name of a vertex.
* It should add a key to the adjacency list with the name of the vertex and set its value to be an empty array.
```js
class Graph {
    constructor() {
        this.adjacencyList = [];
    }
    addVertex(vertex) {
        if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
}
```

## Graph Adding an Edge Pseudo-Code:
* This function should accept 2 vertices, we can call them vertex1 and vertex2.
* The function should find in the adjacency list the key of vertex1 and push vertex2 to the array.
* The function should find in the adjacency list the key of vertex2 and push vertex1 to the array.
* Don't worry about handling errors/invalid vertices.
```js
...
    addEdge(v1, v2) {
        this.adjacencyList[v1].push(v2);
        this.adjacencyList[v2].push(v1);
    }
...
```

## Graph Removing an Edge Pseudo-Code:
* This function should accept 2 vertices, we'll call them vertex1 and vertex2.
* The function should reassign the key of vertex1 to be an array that does not contain vertex2.
* The function should reassign the key of vertex2 to be an array that does not contain vertex1.
* Don't worry about handling errors/invalid vertices.
```js
...
    removeEdge(v1, v2) {
        // MY SOLUTION
        // this.adjacencyList[v1].splice(v2, v1.length-1);
        // this.adjacencyList[v2].splice(v1, v2.length-1);

        // LECTURE SOLUTION
        this.adjacencyList[v1] = this.adjacencyList[v1].filter(v => v !== v2);
        this.adjacencyList[v2] = this.adjacencyList[v2].filter(v => v !== v1);
    }
...
```

## Graph Removing a Vertex Pseudo-Code:
* The function should accept a vertex to remove.
* The function should loop as long as there are any other vertices in the adjacency list of that vertex.
* Inside of the loop, call our `removeEdge()` function with the vertex we are removing and any values in the adjacency list for that vertex.
* Delete the key in the adjacency list for that vertex.
```js
...
    removeVertex(vertex) {
        while (this.adjacencyList[vertex].length) {
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex, adjacentVertex);
        }
        delete this.adjacencyList[vertex];
    }
...
```

## Graph Traversal
Graph traversal uses:
* Peer to peer networking
* Web crawlers
* Finding 'closest' matches/recommendations
* Shortest path problems
    * GPS Navigation
    * Solving mazes
    * AI (shortest path to win the game)

## Graph Depth-First Traversal Pseudo-Code:
### Steps - Recursively
* The function should accept a starting node.
* Create a list to store the end result, to be returned at the very end.
* Create an object to store visited vertices.
* Create a helper function which accepts a vertex.
    * The helper function should return early if the vertex is empty.
    * The helper function should place the vertex it accepts into the visited object and push that vertex into the result array.
    * Loop over all of the values in the adjacencyList for that vertex.
    * If any of those values have not been visited, recursively invoke the helper function with that vertex.
* Invoke the helper function with the starting vertex.
* Return the result array.

### Steps - Iteratively
* The function should accept a starting node.
* Create a stack to help keep track of vertices (use a list/array).
* Create a list to store the end result, to be returned at the very end.
* Create an object to store visited vertices.
* Add the starting vertex to the stack, and mark it visited.
* While the stack has something in it:
    * Pop the next vertex from the stack.
    * If that vertex hasn't been visited yet:
        * Mark it as visited.
        * Add it to the result list.
        * Push all of its neighbours into the stack.
* Return the result array.
```js
...
    depthFirstRecursive(start) {
        const result = [];
        const visited = {};
        const adjacencyList = this.adjacencyList;

        (function DFS(vertex) {
            if (!vertex) return null;
            visited[vertex] = true;
            result.push(vertex);
            adjacencyList[vertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    return DFS(neighbour);
                }
            })
        })(start);
        return result;
    }
    depthFirstIterative(start) {
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while (stack.length) {
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
                if (!visited[neighbour]) {
                    visited[neighbour] = true;
                    stack.push(neighbour);
                }
            });
        }
        return result;
    }
...
```

## Graph Breadth-First Traversal Pseudo-Code:
* This function should accept a starting vertex.
* Create a queue (you can use an array) and place the starting vertex in it.
* Create an array to store the nodes visited.
* Create an object to store nodes visited.
* Mark the starting vertex as visited.
* Loop as long as there is anything in the queue.
* Remove the first vertex from the queue and push it into the array that stores the nodes visited.
* Loop over each vertex in the adjacency list for the vertex you are visiting.
* It it is not inside the object that stores nodes visited, mark it as visited and enqueue that vertex.
* Once you have finished looping, return the array of visited nodes.
```js
...
    breadthFirst(start) {
        const queue = [start];
        const result = [];
        const visited = {};
        let currentVertex;
        visited[start] = true;

        while (queue.length) {
            currentVertex = queue.shift();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbour => {
               if (!visited[neighbour]) {
                   visited[neighbour] = true;
                   queue.push(neighbour);
               }
            });
        }
        return result;
    }
...
```

# Dijkstra's Algorithm

**Dijkstra's algorithm** acts upon a **Weighted Graph**, and it uses a **Priority Queue** with a **Binary Heap**.

Dijkstra's Algorithm is one of the most famous and widely used algorithms around.  
It finds the shortest path between 2 vertices on a graph. _(What is the fastest way?)_

Why is is useful?
* GPS - finding the fastest route.
* Network Routing - finds open shortest path for data.
* Biology - used to model the spread of viruses among humans.
* Airline Tickets - finding the cheapest route to your destination, etc.

The approach:
1. Every time we look to visit a new node, we pick the node with the smallest known distance to visit first.
2. Once we've moved to the node we're going to visit, we look at each of its neighbours.
3. For each neighbouring node, we calculate the distance by summing the total edges that lead to the node we're checking _from the starting node_.
4. If the new total distance to a node is less than the previous total, we store the new shorter distance for that node.

## Dijkstra's Pseudo-Code:
* This function should accept a starting and ending vertex.
* Create an object (we'll call it `distances`) and set each key to be every vertex in the adjacency list with a value of infinity, except for the starting vertex which should have a value of 0.
* After setting a value in the `distances` object, add each vertex with a priority of 0 because that's where we begin.
* Create another object called `previous` and set each key to be every vertex in the adjacency list with a value of null.
* Start looping as long as there is anything in the priority list.
    * Dequeue a vertex from the priority queue.
    * If that vertex is the same as the ending vertex - we are done.
    * Otherwise loop through each value in the adjacency list at that vertex.
        * Calculate the distance to that vertex from the starting vertex.
        * If the distance is less than what is currently stored in our distances object.
            * Update the distances object with new lower distance.
            * Update the previous object to contain that vertex.
            * Enqueue the vertex with the total distance from the start node.