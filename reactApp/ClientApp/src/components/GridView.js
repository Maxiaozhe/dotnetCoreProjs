import React, { Component } from 'react';
import {Table} from 'reactstrap';

export class GridView extends Component{
    static displayName= GridView.name;
    
    constructor(props){
        let apiBase="api/DataContent/Datatable";  
        super(props);
        this.state = {
            dataTable:{
                head:[],
                rows:[],
            },
            loading:true,
        };
        fetch(apiBase)
        .then(res=>res.json())
        .then(data=>this.setState({
            dataTable:data,
            loading:false,
        }));
    }

    static renderTable(dtt){
         return(
            <Table hover striped bordered size="">
                <thead>
                    <tr>
                    {dtt.head.map(th => 
                        <th style={{width:th.width}}>{th.name}</th>
                    )}
                    </tr>
                </thead>
                <tbody>
                    {dtt.rows.map(row =>
                        <tr>
                            {row.map(field =>
                                <td>{field}</td>
                            )}
                        </tr>
                    )}
                </tbody>
            </Table>
            );
    }

    render(){
        let contents = this.state.loading
        ? <p><em>Loading...</em></p>
        : GridView.renderTable(this.state.dataTable);
        
      return (
        <div>
          <h1>Grid View</h1>
          <p>This component demonstrates fetching data from the server.</p>
          {contents}
        </div>
      );
    }
}