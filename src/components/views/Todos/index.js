// @ packages
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

// @ components
import FullHeightCardLayout from 'components/layouts/FullHeightCardLayout';
import Todo from 'components/elements/Todo';
import NewTodoInput from 'components/elements/NewTodoInput';
import CompletedTodos from 'components/elements/CompletedTodos';

// @ utils
import {
  appTitleMessage,
  newTodoPlaceholderMessage,
  newTodoActionMessage,
  completedItemsMessage,
  expandCompletedItemsAriaLabel,
} from 'utils/messages';
import { TodoPropTypes } from 'utils/propTypesConstants';

// @ own
import './styles.scss';

const Todos = ({
  pendingTodos,
  completedTodos,
  addTodo,
  removeTodo,
  toggleTodo,
  updateTodo,
  compact,
}) => {
  const [completedTodosExpanded, setCompletedTodosExpanded] = useState(false);
  const toggleCompletedTodosExpanded = () => setCompletedTodosExpanded(!completedTodosExpanded);
  return (
    <FullHeightCardLayout
      title={appTitleMessage}
      compact={compact}
    >
      <TransitionGroup>
        {
          pendingTodos.map((todo) => (
            <CSSTransition
              key={todo.id}
              classNames="fade-transition"
              timeout={500}
              unmountOnExit
            >
              <Todo
                todo={todo}
                toggleTodo={toggleTodo}
                removeTodo={removeTodo}
                updateTodo={updateTodo}
              />
            </CSSTransition>
          ))
        }
      </TransitionGroup>
      <NewTodoInput
        addTodo={addTodo}
        newTodoPlaceholderMessage={newTodoPlaceholderMessage}
        newTodoActionMessage={newTodoActionMessage}
      />
      { completedTodos.length > 0 && (
        <CompletedTodos
          message={completedItemsMessage(completedTodos.length)}
          expandLabel={expandCompletedItemsAriaLabel(completedTodosExpanded)}
          expanded={completedTodosExpanded}
          toggleExpanded={toggleCompletedTodosExpanded}
        >
          <CSSTransition
            classNames="expandable-transition"
            in={completedTodosExpanded}
            timeout={500}
            unmountOnExit
          >
            <TransitionGroup>
              {
                completedTodos.map((todo) => (
                  <CSSTransition
                    key={todo.id}
                    classNames="fade-transition"
                    timeout={500}
                    unmountOnExit
                  >
                    <Todo
                      key={todo.id}
                      todo={todo}
                      toggleTodo={toggleTodo}
                      removeTodo={removeTodo}
                      updateTodo={updateTodo}
                    />
                  </CSSTransition>
                ))
              }
            </TransitionGroup>
          </CSSTransition>
        </CompletedTodos>
      )}
    </FullHeightCardLayout>
  );
};

Todos.propTypes = {
  pendingTodos: PropTypes.arrayOf(TodoPropTypes).isRequired,
  completedTodos: PropTypes.arrayOf(TodoPropTypes).isRequired,
  addTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleTodo: PropTypes.func.isRequired,
  updateTodo: PropTypes.func.isRequired,
  compact: PropTypes.bool,
};

Todos.defaultProps = {
  compact: false,
};

export default Todos;
