import React, { Component } from "react";
import _ from "lodash";
//import Moment from "react-moment"
// import 'moment/locale/en-sg'
// import moment from "moment";

class TableBody extends Component {
  renderCell = (item, column) => {
    if (column.content){
      return column.content(item);      
    }
  //   else if(column.format)
  //   {
  //     return _.get(item, column.path);
  //     {moment.locale().utc(item).format('DD/MM/YYYY HH:mm')}
  //   }   
     return _.get(item, column.path);
   };

  createKey = (item, column) => {
     if(item) return item._id + (column.path || column.key);      
       return  (column.path || column.key);    
  };

  render() 
  {
    const { data, columns } = this.props;
    return (        
     data.length>0?   
     <tbody>
       {       
            data.map((item) => (
              <tr key={item._id}>
                {columns.map((column)=> (                
                  <td key={this.createKey(item, column)}>
                    {this.renderCell(item, column)}
                  </td>
                ))}
              </tr>
                  ))
        } 
      </tbody>
        :
      <tbody>
            <tr>
              {columns.map(column => (                
                <td key={this.createKey({},column)}>
                  {this.renderCell(data, column)}
                </td>
              ))} 
          </tr>
      </tbody>
    );
  }
}

export default TableBody;
