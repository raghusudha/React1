import React from 'react';
import ReactDOM from 'react-dom';

export default class TodoApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: [], id:'', name: '',email:'',phone:'' };
    //Another approach to handle this 
    // this.handleChange = this.handleChange.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }
  deleteRecord(id){
var items   =this.state.items;
for (var i=0;i<items.length;i++){
    if (id==items[i].id){
        items.splice(i,1);
        break;
    }
}
this.setState({items:items});
}
editRecord(id){
    var items = this.state.items;
    for (var i = 0; i < items.length; i++) {
      if(id == items[i].id){
        let state = this.state;
        state.id = items[i].id;
        state.name = items[i].name;
        state.email = items[i].email;
        state.phone = items[i].phone;
        this.setState(state);
        //items.splice(i,1);
        break;

}
}
}
doUpdate(user){
    var items=this.state.items;
    for (var i=0;i<items.length;i++){
        if(user.id==items[i].id){
            items[i]=user;
            this.setState({ items: items, id:'', name: '',email:'',phone:'' })
            break;
        }

}
}

  render() {
      return (
      <div>
        <h3>TODO</h3>
        
        <form onSubmit={(e)=>this.handleSubmit(e)}>
          <input type="text" placeholder="name"
            onChange={(e)=>this.handleNameChange(e)}
            value={this.state.name}/><br></br>
            <input type="text" placeholder="email"
            onChange={(e)=>this.handleEmailChange(e)}
            value={this.state.email}/><br></br>
            <input type="text" placeholder="phone"
            onChange={(e)=>this.handlePhoneChange(e)}
            value={this.state.phone}/><br></br>
          <button className="button1">
              
            Add/Update{this.state.items.length + 1}
          </button>
        </form><br></br>
        <hr></hr>
        <TodoList items={this.state.items} deletUser={(id)=>this.deleteRecord(id)}  editUser={(id)=>this.editRecord(id)} />
      </div>
    );
  }

  handleNameChange(e) {
    this.setState({ name: e.target.value });
  }
  handleEmailChange(e) {
    this.setState({ email: e.target.value });
  }
  handlePhoneChange(e) {
    this.setState({ phone: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (!this.state.name.length) {
      return;
    }
    if(this.state.id =='' ){
        var newItem = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        id: Date.now()
      };
      this.setState(prevState => ({
        items: prevState.items.concat(newItem),
        name: '',
        email: '',
        phone: '',
      }));
      }else{
        var user = {
        name: this.state.name,
        email: this.state.email,
        phone: this.state.phone,
        id: this.state.id
      };
      this.doUpdate(user);
      }
    }
  }

class TodoList extends React.Component {
    doDelete(id){
        console.log('deleted is:'+id);
        this.props.deletUser(id);

    }
    doEdit(id){
    console.log('updated is'+id);
    this.props.editUser(id);
    }
  render() {
    return (
      <table>
          <thead>
              <tr><th>Name</th><th>Email</th><th>Phone</th><th>Edit</th><th>Delete</th></tr>
        {this.props.items.map(item => (
          <tr key={item.id}><td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.phone}</td>
          <td><button className="button1" onClick={(id)=>this.doEdit(item.id)}>Edit</button></td>
          <td><button className="button1" onClick={(id)=>this.doDelete(item.id)}>Delete</button></td>
          </tr>
        ))}
        </thead>
      </table>
    );
  }
}

ReactDOM.render(<TodoApp />, document.getElementById('root'));