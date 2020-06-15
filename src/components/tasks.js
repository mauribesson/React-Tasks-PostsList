import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Task from './task'

class Tasks extends Component {

    render(){
        return <div>
            {this.props.tasks.map((task)=>
             <Task 
                key={task.id} 
                task={task} 
                deleteTask={this.props.deleteTask} 
                checkDone={this.props.checkDone}
            />)}
        </div>
    }
} 

Tasks.propTypes = {
    tasks : PropTypes.array.isRequired
}

export default Tasks;