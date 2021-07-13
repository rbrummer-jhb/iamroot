# The Patterns
## Creational
* Builder
* Factories
    * Abstract Factory
    * Factory Method
* Prototype
* Singleton
## Structural
* Adapter
* Bridge
* Composite
* Decorator
* Facade
* Flyweight
* Proxy
## Behavioural
* Chain of Responsibility
* Command
* Interpreter
* Iterator
* Mediator
* Memento
* Observer
* State
* Strategy
* Template Method
* Visitor

# S.O.L.I.D. Design Principles
## Single Responsibility Principle
A `class` or `function` should have a single responsibility.  
A class should only have one reason to change.  
It's better to group functionality by class.  
There is an `Ansi` pattern called a 'god object' which is one massive class which has a lot of responsibilities.  
The **Single Responsibility** is the opposite of that Ansi pattern.  
**Separation of concerns** is when you refactor.

## Open-Closed Principle (OCP)
This states that objects are **open for extension**, but **closed for modification**.  
Classes should only be **modified** if they contain a bug, otherwise, they should **not** be modified.

## Liskov Substitution Principle
If a method accepts a **base** type it should also be able to accept a **derive** type.

## Interface Segregation Principle
You have to segregate or split interfaces into different parts so that people don't implement more than what they need.  
_YAGNI - You Ain't Going to Need It._

### Principle of Least Surprise
When people use your API they should not be surprised; they should get predictable results.

## Dependency Inversion Principle
This principle doesn't have anything to do with _dependency injection_.  
Dependency injection is somewhat a consequence of the dependency inversion principle.  
This principle defines a relationship that you should have between low-level and high-level modules.  
A **high-level module** should not depend on a **low-level module**.

# The Singleton Design Pattern
A component which is instantiated only once.

For some components it only makes sense to have one in the system.
* Database repository
* Object factory

E.g., the constructor call is expensive.
* Initialization should only happen once.
* The same instance is provided everywhere.

This prevents additional copies from being made.

# The Observer Design Pattern
* We need to be informed when certain things happen.
    * Object's property changes.
    * Object does something.
    * Some external events occurs.
* We want to listen to events and be notified when they occur.
    * Notifications should include useful data.
* Want to unsubscribe from events if we're no longer interested.

> An **observer** object is an object that wishes to be informed about events happening in the system. The entity generating the events is an **observable**.