---
layout: post
title: The Learning Wall
date: 2019-05-15
---

<p>Well, I have officially started my first CS class and am excited to finally be beginning my journey into the computer science field. My first class is Programming Concepts and is completely in Java, which is a language I have not used before. So far from what I've seen though it looks pretty similar to C# which has been my main language for the last couple of months. The only major differences I've noticed thus far is that Java seems to be a little more strict when it comes to data types and class naming.</p><!--more-->

<p>The first assignment for this class was interesting. This class is the very first programming class in the Computer Science curriculum and therefore a lot of the students introduction to coding. As many of the students I've met in the class have not done any programming up until this point, or just a little bit in high school. The assignment was two parts, first was to display some information about yourself in a console window and the second, and most interesting part, was the create a factorial calculator by basically editing the code of a somewhat similar pre-built application written to determine future value of a monthly payment when given an amount, a length of time, and an interest rate. </p>

<p>This application was to determine the factorial of a number 0-20 and must include error handling for non-integer numbers and numbers outside of the scope and allow the user to continue the process without restarting the application. Since I have experience with C#, and most everything is very similar outside of the syntax to Java, this assignment was not too challenging. One of the first things I learned while making this application was that Java can be coded in a text editor such as Notepad++. This was something I knew you could do with other languages such as Python or Mathlab, but didn't know you could do with a compiled language. With this I learned that you could compile your .Java file using the command line and the <b>```javac```</b> and <b>```java```</b> commands as long as you have JDK installed. </p>

<p>The next hurdle I encountered was just how restrictive Java can be, especially when in regards to the class names, as the class name inside the file and the name of the .Java file must be identical. Something else that I noticed was how you take user input, with C# I've become very used to just using <b>``` Console.ReadLine()```</b> to receive user input. But interestingly, with Java, you have to import the Scanner class and then instantiate it to be able to use it in your code. </p>

![alt text](ScannerClassInstantiation.PNG "Scanner Class Instantiation")

<p>The error handling ending up being another challenge as it was not something that was contained in the sample code we were given. From what I found it seems that determining if a users input is an integer rather than a double or a string is a bit convoluted in Java. This may just be due to so much information being available for Java as it's been out for over 20 years now, that most of the information I was able to locate is probably outdated. Most likely I could find a more eloquent way of determining the class of the input, but in the end I just used a try/catch block to pull the information in from the user.<p/>

![alt text](TryCatchBlock.PNG "Error Handling Solution")

<p>Overall, I found this to be a very interesting first assignment. However, I have to wonder if this was too hard of an initial assignment, as this is a class for people just starting out in their Computer Science curriculum and quite possibly with no experience coding whatsoever. This really makes me understand how some people can get very discouraged when trying to go into the field and take classes at an actual college, rather than a coding bootcamp, and it seems less like a learning curve and more like a learning wall.</p>