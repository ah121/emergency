1. What is the difference between **getElementById, getElementsByClassName, and querySelector / querySelectorAll**?
 Ans:
	getElementById: getElementById method is used to select HTML element with its unique Id attribute from the document object model. There will be only one Id with one name, multiple Id with same name does not work.

	getElementsByClassName: getElementsByClassName method is used to select HTML element with various class attributes from the document object model. There are many class can assign with same name and this method can select all the class with same name.
	
	querySelector: querySelector method is used to select the very first HTML element within a document or elements. Its takes a strings as an arguments. If there is no element match in the document it returns null.
		
	querySelectorAll: querySelectorAll method is a method which is used to select all required HTML element from HTML document object model. It gives all the list of insert arguments. It returns result as an object.

2. How do you **create and insert a new element into the DOM**?
 Ans:
	Create and insert a new element into the DOM:
		Creating the Element: createElement() method is used to create a new HTML element. It takes a string which representing the tag name of the element you want to create.
		Inserting the Element: appendChild() is used to add elements as a last child of a specified parent node. insertBefore() is used to add elements before a specified parent node.

3. What is **Event Bubbling** and how does it work?
 Ans:
	Event Bubbling: Event bubbling will active when a event call on a specific HTML element. After calling an event  it goes upwards to its parents and cover whole documents as like a tree.

4. What is **Event Delegation** in JavaScript? Why is it useful?
 Ans:
	Event Delegation: Event delegation is a method where a single event listener is  added to the parent element to handle events which act on its child element. It is useful for performance, simple code, dynamic content handling and use less memory.

5. What is the difference between **preventDefault() and stopPropagation()** methods?
 Ans:
	preventDefault(): preventDefault() method  is the method of event interface that tells that the event is handled and its default action like scrolling, link navigation pasting text should not be taken. This method continues until one of its event listeners stop the event.
	 stopPropagation():  stopPropagation() method is called within an event handler it stop the event continuing its journey upwards or downwards in the DOM tree. so to stop a event stop propagation event need to call.

