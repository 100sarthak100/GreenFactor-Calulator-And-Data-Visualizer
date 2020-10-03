import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';

const AppData = props => (
    <tr>
      <td>{props.appData[0]}</td>
      <td>{props.appData[1]}</td>
    </tr>
  )

class data extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            AppDatas: [],
            GreenFactor: 0,
        }
    }
    
    componentDidMount() {
        axios.get('http://127.0.0.1:5000/data/')
          .then(response => {
            console.log(response.data[0][1])
            var GF = 0;
            for(var i=0; i<response.data.length; i++){
              GF += response.data[i][1]
            }
            console.log(GF);
            this.setState({
               AppDatas: response.data,
               GreenFactor: GF
              })
          })
          .catch((error) => {
            console.log(error);
          })
      }

      AppDataList() {
        return this.state.AppDatas.map(currentAppData => {
          return <AppData appData={currentAppData}  key={currentAppData._id}/>;
        })
      }

    render() {
        return (
            <div>
              <div >
                <h2>GreenFactor : {this.state.GreenFactor}</h2>
              </div>
                <table className="table">
                    <thead className="thead-light">
                    <tr>
                    <th>productName</th>
                    <th>Value</th>
                    {/* <th>price</th>
                    <th>purchaseDate</th> */}
                    </tr>
                </thead>
                <tbody>
                    { this.AppDataList() }
                </tbody>
                </table>
            </div>
        )
    }
}

export default data
