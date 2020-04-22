import React, { Component } from 'react';
// import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import TextField from '@material-ui/core/TextField';
import "../SignUp.css";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import FirebaseApp from '../../libraries/firebase'
import * as firebase from 'firebase'; // import only storage instead of everythig
import Header from '../../components/Header/Header'
import Item from '../../components/Item/Item'
import ItemForm from '../../components/ItemForm/ItemForm'
import "./Dashboard.css"
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';

class Dashboard extends Component{
  constructor(props) {
    super(props);
    this.state ={
      items:[],
      count:0,
    };
  }

  remove = (id) => {
    console.log(id)
    console.log(this.state)
    const remainder = this.state.items.filter((item) => {

      if(item.itemId !== id) return item;
    });
    // Update state with filter
    this.setState({items: remainder});
  }

  addItem = (itemState) => {
    this.setState({
      count:this.state.count+1
    })
    let items = this.state.items
    this.setState({
      items:[...items,itemState]
    })
    console.log([...items,itemState])
  }



  submitController = () => {

  }


  submitController = () => {
    let db = firebase.firestore(FirebaseApp)
    let currentUser = FirebaseApp.auth().currentUser
    var docData = {
      items: this.state.items,
    }
    console.log(currentUser)
    db.collection(currentUser.email).doc("items").set(docData).then(function() {
        console.log("Document successfully written!");
    });
  }

  render() {

    const ItemList = ({remove}) => {
      const items = this.state.items.map(function(item){
        return (
          <Item
            key={item['itemId']}
            itemId={item['itemId']}
            label="Read Only"
            type="Clear"
            remove={remove}
            itemValue={item['item']}
            expiresValue={item['expires']}
            className="listItem"
            />
          );
      });
      return (<ul>{items}</ul>)
    }

    return (
      <div>
        <Header/>
        <div className="margins">
          <ItemForm itemId={this.state.count} func={(state) => this.addItem(state)}/>
          <Divider className="dividerClass"/>
          <ItemList remove={this.remove}/>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className="submitButton submit"
            onClick={this.submitController}
          >
            Submit
          </Button>
        </div>
      </div>
    )
  }
}
export default Dashboard;
