import React, { Component } from 'react';

class TaskForm extends Component {
    
    state = {
        title:'',
        description :''
    }

    onSubmit = (e) => {
        this.props.addTask(this.state.title, this.state.description);
        e.preventDefault();
        
    }

    onChange = (e) =>{
        //console.log( e.target.name, e.target.value)
        //El setState simpre espera un obejto como parametro 
        this.setState({ 
            [e.target.name] : e.target.value
        });  
    }

    render(){
        return(
            <form onSubmit={this.onSubmit}>
                <input 
                    type="text" 
                    name="title"
                    placeholder="Write a Task" 
                    onChange={this.onChange} 
                    value={this.state.title} />
                <br/>
                <br/>
                <textarea 
                    name="description"
                    placeholder="Write a description!" 
                    onChange={this.onChange} 
                    value={this.state.description}
                ></textarea>
                <br/>
                <input type="submit"/>
            </form>
            )
    }
}

export default TaskForm;