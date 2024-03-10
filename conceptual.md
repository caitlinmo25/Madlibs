What is the purpose of the React Router?
The purpose of React Router is to enable navigation among views of various components in a React Application, without refreshing the page. It manages the synchronization between the UI and the URL. It allows developers to implement dynamic routing in a web app, making it behave more like a multi-page application while being a single-page application under the hood.


What is a single page application (SPA)?
A single page application (SPA) is a web application or website that interacts with the user by dynamically rewriting the current page rather than loading entire new pages from the server. This approach results in a more fluid user experience, as it minimizes reloading of the page. SPAs use AJAX and HTML5 to create responsive applications.


What are some differences between client-side and server-side routing?
Client-side routing: In client-side routing, navigation between pages is handled internally by the JavaScript that runs on the page. When a user clicks a link, the URL changes but the request to the server is prevented; instead, JavaScript changes the state of the application and updates the URL, often without fetching new HTML from the server.
Server-side routing: In server-side routing, each time a user requests a new page, the request is processed by the server, and a new page is loaded in the browser. This can result in a full page refresh, which might be slower and less seamless than client-side routing.


What are two ways of handling redirects with React Router? When would you use each?
<Redirect> component: This component is used within the rendering method of another component to redirect to a different route. It's useful when the decision to redirect is made within a component's render method or within a switch statement.
useHistory hook: This hook provides access to the history instance that you may use to navigate programmatically. You would use useHistory when you need to redirect after an action, such as submitting a form or clicking a button.


What are two different ways to handle page-not-found user experiences using React Router?
Using a wildcard <Route>: You can create a <Route> with a path of * or something similar that matches any path not matched by earlier routes. This route can render a custom "Not Found" component.
Using the Switch component without a path: Placing a <Route> without a path prop as the last child of a Switch will act as a catch-all route that renders when no other route matches, which can be used to display a "Not Found" page.


How do you grab URL parameters from within a component using React Router?
You can use the useParams hook from React Router to access the URL parameters. useParams returns an object of key/value pairs of the URL parameters. Use it within your component to access the desired parameter by its name.


What is context in React? When would you use it?
Context provides a way to pass data through the component tree without having to pass props down manually at every level. It's used to share values like themes, user information, etc., across many components without prop drilling. You would use context when you have global data that many components need access to, such as authenticated user information, theme settings, or language preferences.


Describe some differences between class-based components and function components in React.
Class-based components: These components are more verbose and involve defining a class extending React.Component. They include lifecycle methods (like componentDidMount) and require the use of this to access props and state.
Function components: These components are simpler and defined by a function that returns JSX. With the introduction of hooks, function components can now use state and other React features without writing a class.


What are some of the problems that hooks were designed to solve?
Hooks were introduced to solve several issues in React, including:
Reusing stateful logic between components: Before hooks, patterns like render props and higher-order components were used, which could lead to wrapper hell.
Complex components become hard to understand: Hooks allow you to split one component into smaller functions based on what pieces are related (such as setting up a subscription or fetching data), rather than forcing a split based on lifecycle methods.
Classes confuse both people and machines: Classes can be less intuitive to manage, especially with regards to how this works in JavaScript. Hooks embrace functions and leverage closures, making them simpler to understand and use.