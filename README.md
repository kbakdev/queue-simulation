Task topic: Simulating a queue of customers in an office

Task Description:

As a solution, it is necessary to implement a simulation along with its configuration.
The configuration should allow changing basic information, i.e. the number of
available positions (and thus the number of queues on which all movements will be spread),
the minimum time a customer needs to handle their case at the office, and the maximum
time they need for this action. The time needed to handle a case is given
as an integer value greater than 0.

The second part of the application is responsible for the simulation itself. The user who uses
the application should have access to 2 buttons.

Button - adding a new person to the queue. After clicking, a new person is created.
The time required for a given person to handle their case is randomly generated. The minimum
and maximum values are read from the configuration screen.
For example, if the minimum value is 5 and the maximum is 8, the random time
can be from the range [5,8]. After properly generating the customer, they are sent to
the queue in which they will be admitted to the window at the office as quickly as possible.
Example:
Queue 1: 2, 4, 6
Queue 2: 10
Queue 3: 1, 3

A new person will be added to queue 3.

Button - parallel reduction of the time required to handle their case. After
pressing this button, all people who are currently at the window will have their required time
reduced by 1. If the value drops to 0, the customer is removed from the queue and the next person is served.
Example:
Queue 1: 2, 4, 6
Queue 2: 10
Queue 3: 1, 3

After pressing the button:
Queue 1: 1, 4, 6
Queue 2: 9
Queue 3: 3

All events (adding a new person to the queue, updating times) for the purpose of
simplifying the task should be handled by clicking the button. There is no need
to prepare event handling using setInterval or setTimeout.

Technological stack:

React
Testing Library
React Router DOM
Starting the preliminary application:

After copying and unpacking the starter files, you should install the
necessary dependencies with the command yarn install or npm install
Then, type the command yarn dev or npm run dev
The preliminary application will be available at http://localhost:5173/
Functional requirements:

Simulating the distribution of a queue across several positions
Calculation of the time required to handle the entire queue
Adding new people to the queue
Parallel reduction of the time required to handle the case by
all customers who are currently at the position
Preliminary simulation configuration
Displaying all queues
Sample application:
Simulation configuration screen

Simulation screen

Additional information:
In the /src/assets/images directory, there are graphics that can be used in the application.
Their use is obligatory, there is no imposed requirement on how the application should look.
The application should be as simple as possible, but it must meet all
functional requirements.

Tests:
The React Testing Library has been configured in the project. If you feel...
