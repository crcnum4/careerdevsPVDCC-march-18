<h2>Career Devs PVDCodeCamp March 18th</h2>

<h3>recursion and merge sort</h3>
<p>This weekend we covered the computer science concept of Recursion. To understand this we used the algorithm for Factorials and implemented Merge Sort.
The concept of recursion is an advanced looping structure. A good rule of thumb to use recursion is if you need one of the following: a tree structure
or a looping structure where each iteration of the loop copies of variables are required.</p>
<h3>Recursion</h3>
<p>How does recursion work? Recusion can occur in multiple ways. The most basic is a linear self calling function (or method) if a function calls itself
only once. The Factorial function is an example of this. The more common is a mutiple recursive function. The merge sort is this. This function may call itself multiple times within itself. The recursive function creates a whole nother instance of the function whithout destroying the original. A main piece of the Recursive function is the Base Case. A base case is a conditional that causes the recursive function to start returning back up the recursive calls. Below are some useful resources.</p>

<p>https://study.cs50.net/recursion</p>
<p>https://en.wikipedia.org/wiki/Recursion_(computer_science)</p>

<h4>Factorial</h4>
<p>Factorial is a good example of single recursive function. Factorial is a math concept to short hand the concept of multiplying all numbers from 1 up to the number you are factoring by. Factorial 5 (5!) for example is 5 * 4 * 3 *2 * 1. another way to look at this is to consider that 4! is 4 * 3 * 2 * 1 so you could very easily say that 5! is simply 5 * 4! due to this pattern you can create the recursive function. Note that in most cases a single recusive function can usually be done in a standard loop.</p>

<h4>Challenge 1</h4>
<p>The first challenge was to recreate the function Factorial in the factorial.js file as a standard loop.</p>

<h4>Merge Sort</h4>
<p>Last meeting we covered three sorting algorithms. These algorithms utilize standard looping structures in order to sort a list. Merge Sort however takes advantage of the looping structure called multiple recursion. This allows the program to split up the list of items into seperate lists while eventually merging the lists back into a sorted list. Use the Merge sort.js file to see this.</p>

<h4>Challenge 2</h4>
<p>The second challege can be found on https://study.cs50.net/recursion at the bottom. The challenge is to create a binary search algorithm. The binary search function searches an ORDERED list (it must be ordered) by going to the middle of the list to check if the item is there. If not it will search either to the left or the right of the item it is on depending on what it's looking for. The binary search utilizes recursion and also implements multiple base cases. To facilitate this function you will require 2 base cases that will end th recursive calls.</p>

