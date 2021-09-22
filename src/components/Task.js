import React from 'react';
import { Button, Grid, List, Label } from 'semantic-ui-react';


const Task = ({name, color, editTask, index}) => {
    function editCurrentTask() {
      editTask(index);
    }

    return (
        <React.Fragment>
            <List.Item>
            <Grid columns='2'>
              <Grid.Column>
                <Label color={color} size='big'>{name}</Label>
              </Grid.Column>
              <Grid.Column textAlign='right'>
                <Button onClick={editCurrentTask} icon='trash' color='red'></Button>
                <Button onClick={editTask} icon='pencil' color='orange'></Button>
              </Grid.Column>
            </Grid>
          </List.Item>
        </React.Fragment>
    );
};

export default Task;