import React, { Component } from 'react'
import {Line} from 'react-chartjs-2'
import axios from 'axios';


export class Charts extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
            AppDatas: [],
            GreenFactor: 0,
            data: {
                 labels: ["1", "2", "3", "4", "5"],
                 datasets: [
                     {
                         label: "Green Factor",
                         backgroundColor: "rgba(255, 0, 255, 0.75)",
                         data: this.state.AppDatas,
                     },
                 ]
             }
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

    //   AppDataList() {
    //     return this.state.AppDatas.map(currentAppData => {
    //       return <AppData appData={currentAppData}  key={currentAppData._id}/>;
    //     })
    //   }
            
    render() {
        return (
            <div>
                <h2>GreenFactor : {this.state.GreenFactor}</h2>
                <br />
                <h2>Data Graph</h2>
                <Line 
                    options={{
                        responsive: true,
                    }}
                    data={this.state.data}
                />
            </div>
        )
    }
}

export default Charts



