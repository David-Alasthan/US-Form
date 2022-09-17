import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import classes from './AddUser.module.css';



const AddUser = (props) => {
    const [userName, setUserName] = useState("");
    const [userAge, setUserAge] = useState("");
    const userNameChangehandler = (event) => {
      setUserName(event.target.value);
    }

    const userAgeChangehandler = (event) => {
      setUserAge(event.target.value);
    }

    const addUserHandler = (event) => {
        event.preventDefault();
        if(userName.trim().length === 0 || userAge.trim().length === 0) {
          return;
        }
        if(+userAge < 0){
          return;
        }
        console.log(userName, userAge)
        setUserName("");
        setUserAge("");
    }
  return (
    <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username" >User Name</label>
            <input type="text" id="username" onChange={userNameChangehandler} value={userName} />
            <label htmlFor="userage" >Age</label>
            <input type="number" id="userage" onChange={userAgeChangehandler} value={userAge}/>
            <Button type="submit" > Add User </Button>
        </form>
    </Card>
  )
}

export default AddUser;