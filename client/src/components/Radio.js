import React, { Component } from 'react';
class UncontrolledComponentDemo extends React.Component {
    render() {
      return(
        <form>
         
          
         <label> <input name="gender" component='input' type="radio" value={0} />Male</label>
         <label>   <input name="gender" component='input' type="radio" value={1} />Female</label>
         <label> <input name="gender" component='input' type="radio" value={2} /> Prefer not to say or Other</label>
        </form>
      );
    }
  }
  

  export default UncontrolledComponentDemo