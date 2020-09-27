# Todo App
Simple todo progressive web app using React.
### Live Demo: [https://agusmafud.github.io/todoapp/](https://agusmafud.github.io/todoapp/)

## Development stack
- React for component-based and declarative architecture.
- Reacts Hooks for building functional stateless components.
- [create-react-app](https://github.com/facebook/create-react-app) as frontend build pipeline.
- [Material-UI](https://material-ui.com): React UI framework.
- SASS + BEM as css styling solution.
- [React transition group](https://reactcommunity.org/react-transition-group) for visual animations.
- PropTypes for typechecking.

## Architecture
```
todoapp
└── src
    ├── TodoApp.js
    ├── containers\TodosContainer
    ├── components 
    │   ├── views\Todos
    │   ├── layouts\FullHeightCardLayout
    │   └── elements
    │       ├── Todo
    │       ├── NewTodoInput
    │       └── CompletedTodos
    └── utils
    │       ├── messages
    │       └── propTypesConstants
    └── docs

```
### TodoApp.js
App entrypoint. Implements Material-UI theme and calls the main and only app container.

### containers
Containers hold app logic. In this todo app, TodosContainers: 
* creates the state that will hold todo notes using useState hook,
* defines the logic for altering todos,
* verifies with a custom hook the viewports size,
* bubbles this data and functions via properties to the corresponding Todos view component.

### components\views
This app has only one view, which has the following responsabilities:
* Implementing a layout component and all the element components involving the view.
* Applying the visual transitions and animations.

### components\layouts\FullHeightCardLayout
Simple layout component with desktop and mobile styles that renders an optional title and a card holding the main content.

### components\elements
Elements are simple components which only responsability is to render content based on their properties. They also hold the css styles and are the blocks in the BEM styles structure.

### utils
* **message:** Main file for texts and aria labels.
* **propTypesConstants:** Main file for propTypes shapes.

### docs
Folder with build compilation running under github pages on [https://agusmafud.github.io/todoapp/](https://agusmafud.github.io/todoapp/).
