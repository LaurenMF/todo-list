import React from 'react';
import { Header, Button, Segment, Form, Select, Input } from 'semantic-ui-react';

const NewTaskForm = ({closeNewTask, newTask, setNewTask, addNewTask}) => {
    function changeNewTask(e, {value, name}) {
        const newTaskClone = { ...newTask };
        newTaskClone[name] = value;
        setNewTask(newTaskClone);
    }

    return (
        <React.Fragment>
          <Segment>
          <Header as='h2'>New Task</Header>
          <Form>
            <Form.Field
              control={Input}
              label='Task Name'
              placeholder='Enter task name...'
              value={newTask.name}
              onChange={changeNewTask}
              name='name'
            />
            <Form.Field
              control={Select}
              label='Task Color'
              placeholder='Choose task color...'
              options={[
                {text: 'Red', value: 'red'},
                {text: 'Yellow', value: 'yellow'},
                {text: 'Green', value: 'green'},
              ]}
              value={newTask.color}
              name='color'
            />
            <Button.Group fluid>
              <Button color='red' onClick={closeNewTask}>Cancel</Button>
              <Button.Or></Button.Or>
              <Button onClick={addNewTask} color='green'>Add Task</Button>
            </Button.Group>
          </Form>
        </Segment>
          </React.Fragment>
    )
}

export default NewTaskForm;