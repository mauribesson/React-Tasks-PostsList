import React, {Component} from 'react';
import PropTypes from 'prop-types';

//import './task.css';  //--> lo eliminaron en el turorial al archivo, 
//los usdo directamente en el codigo para poder manupularlos  

class Task extends Component {
   
    StyleComplited(){
        return {
            fontSize: '20px',
            color: this.props.task.done ? 'gray' : 'black',
            textDecoration: this.props.task.done ? 'line-through' : 'none'
        }
    }

/*     deleteTask = () =>{
        const {task} = this.props;
        this.props.deleteTask(task.id);// usa el el metodo desdde app pasando an travez del componente  de Tasks
    }
 */
    render(){
    
        const {task} = this.props; //decontruccion de objeto js Es6;

        return <p style={this.StyleComplited()}>
            {task.title} - &#x1F600; {task.description} - {task.id} - {task.done.toString()}
                <input type="checkbox" onChange={this.props.checkDone.bind(this, task.id)}/>
                <button 
                    style={btnDelete} onClick={this.props.deleteTask.bind(this, task.id)}>
                    x
                </button>
        </p>
    }        
}

//Espesificacion de de los datos de las proiedades 
Task.propTypes = {
    task: PropTypes.object.isRequired
}

//estilos en linea 
const btnDelete = {
    fontSize: '18px',
    background: '#ea2027',
    color: '#fff',
    border: 'none',
    padding: '10px 15px',
    borderRadius: '50%',
    coursor: 'pointer',
    //float: 'right'
}

export default Task;