import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

//Statics 
import './App.css';
import tasks from './samples/tasks.json' //DB

//Components
import Tasks from './components/tasks';
import TaskForm from './components/TaskForm';
import Posts from './components/Posts';


class App extends Component{

    state = {
        tasks:tasks
    }

    addTask = (title, description) => {
        console.log('adding new Trask', title, description)
        const newTask = {
            title : title,
            description: description,
            id : this.state.tasks.length,
            done: false
        }
        this.setState({
           // traks: tasks.push(newTask)
            tasks: [...this.state.tasks, newTask]
        });
    }

    deleteTask = (id) => {
        const newTasks = this.state.tasks.filter(task => task.id !== id);
        this.setState({
            tasks : newTasks
        })
    }

    checkDone = (id) => {
        const newTasks = this.state.tasks.map(task => {
            if(task.id === id){
                task.done = !task.done
            }
            return task;
        });

        this.setState({
            tasks : newTasks
        }); 
    }

    render(){
        return <div>
            <Router>
                <Link to="/">Home</Link>
                <br/>
                <Link to="/posts">Posts</Link>
                <Route exact path='/' render={()=>{
                    return <div>
                        <TaskForm addTask={this.addTask}/>
                        <Tasks 
                            tasks={this.state.tasks} 
                            deleteTask={this.deleteTask} 
                            checkDone={this.checkDone} 
                        />
                    </div>
                }}>
                </Route>
                <Route path="/posts" component={Posts} />                         
            </Router>

        </div>
    }
}

export default App;

//----------------------------codigo con pops y estados debajos----------------------


//props: en reactjs porpiedades de componesntes en un obojeto {}
/*
function Helloword(props) {
    console.log(props);
    return ( 
        <div id="hello"> 
        <h3>{props.subtitle}</h3>
        {props.mytext} 
        </div> 
    );
}
*/
/*
class Helloword extends React.Component {

    state = {
        show: true
    }

    toogleShow = () => {
        this.setState({show: !this.state.show});
    }

    render(){
        if (this.state.show){
            return ( 
                <div id="hello"> 
                <h3>{this.props.subtitle}</h3>
                {this.props.mytext} 
                <button onClick={this.toogleShow}>Toggle Show!</button>
                </div> 
            )
        } else {
            return ( 
                <h1>
                    There are a not element!
                    <button onClick={this.toogleShow}>Toggle Show!</button>
                </h1>
                
            )
        }

    }
}
*/
// Foerma en una linea
//const App = () => ( <div> This is my componet: <Helloword/> <Helloword/> <Helloword/>  </div> );

// forma de clase 
/*
class App extends React.Component{
    render(){
        return (<div> This is my componet: <Helloword/> <Helloword/> <Helloword/>  </div>);
    }
}
*/

// forma clasica 
/*
function App() {
    return ( <div> 
        This is my componet: 
        <Helloword mytext="Hello Mauri" subtitle="lorel ipsum"/>
         <Helloword mytext="tu vieja" subtitle="Me seba mate"/>
        <Helloword mytext="tu abuela" subtitle="me cocina"/>
    </div> );
}
*/
/*
class App extends Component {
    render(){
        return ( <div> 
            This is my componet: 
            <Helloword mytext="Hello Mauri" subtitle="lorel ipsum"/>
             <Helloword mytext="tu vieja" subtitle="Me seba mate"/>
            <Helloword mytext="tu abuela" subtitle="me cocina"/>
        </div> );
    }      
}
*/
//export default App;