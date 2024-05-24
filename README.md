# SOLID - the five principles of object-oriented programming

- **S - Single Responsibility Principle** - A class should have only one reason to change, meaning that a class should have only one job (only one responsibility). 
- **O - Open/Closed Principle** - Objects or entities should be open for extension but closed for modification. The class should be easily extendable without modifying the class itself. Inheritance is one way to achieve it.
- **L - Liskov Substitution Principle** - Derived types must be completely substitutable for their base types. Each derived class must replace its parent without affecting the behavior of the parent class. A user of a base class should continue to function properly if a derivative class is used instead.
- **I - Interface Segregation Principle** - A client should never be forced to implement an interface that it doesn't use or clients shouldn't be forced to depend on methods they do not use. When a class implements an interface, it should not implement methods it does not need.
- **D - Dependency Inversion Principle** - Depend upon abstractions. Don't depend upon concretions. Is the strategy depending upon interfaces or abstract classes rather than concrete classes. Abstractions should not depend on details. Details should depend on abstractions.
