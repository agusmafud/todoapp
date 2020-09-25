# todolist
Simple todo list using React Hooks

## Development stack
- [create-react-app](https://github.com/facebook/create-react-app) as frontend build pipeline.
- [Material-UI](https://material-ui.com/): React UI framework.
- SASS + BEM as css styling solution.
- [React transition group](https://reactcommunity.org/react-transition-group/) for visual animations.
- PropTypes for typechecking.

## Architecture
```
**todoapp**
└── **src**
    ├── TodoApp.js
    ├── **containers**\TodosContainer
    ├── **components** 
    │   ├── **views**\Todos
    │   ├── **layouts**\FullHeightCardLayout
    │   └── **elements**
    │       ├── Todo
    │       ├── NewTodoInput
    │       └── CompletedTodos
    └── **utils**
            ├── messages
            └── propTypesConstants    
```
