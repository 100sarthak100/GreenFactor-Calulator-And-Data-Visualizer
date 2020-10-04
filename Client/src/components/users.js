import React, {Component} from 'react'
import axios from '../axios'
import {Line} from 'react-chartjs-2'
import moment from 'moment'

class users extends Component {
    constructor(props) {
        super(props);
        this.state = {
            GreenFactor: 0,
            data: {
                labels: ["1", "2", "3", "4", "5"],
                datasets: [
                    {
                        label: "Green Factor Graph",
                        backgroundColor: "rgba(255, 0, 255, 0.75)",
                        data: [1,2,3,4,5],
                    },
                ]
            }
        };
    }
    getUsersData = () => {
        axios
            .get(`/data`, {})
            .then(res => {
                const data = res.data
                console.log(data)
                var payload = [];
                var dateLabel = [];
                var GF = 0;
                for(var i=0; i<data.length; i++){
                    payload.push(data[i][1]);
                    // moment(data[i][0],"YYYY-MM-DDTHH:mm:ss.SSSSZ").format("YYYY-MM-DD");
                    console.log(moment(new Date(data[i][0])).format("YYYY-MM-DD"));
                    dateLabel.push(moment(new Date(data[i][0])).format("YYYY-MM-DD"));
                    // console.log(dateLabel[i]);
                    GF += data[i][1]*0.1;
                }
                console.log(payload);
                this.setState({
                    GreenFactor: GF,
                    data: {
                        labels: dateLabel,
                        datasets: [
                            {
                                label: "Cloth Material Factor Graph",
                                backgroundColor: "rgba(209, 240, 55, 1)",
                                data: payload,
                            },
                        ]
                    }
                })
            })
            .catch((error) => {
                console.log(error)
            })

    }
    componentDidMount(){
        this.getUsersData()
    }

    setGradientColor = (canvas, color) => {
        const ctx = canvas.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 1000, 300);
        gradient.addColorStop(0, color);
        gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)");
        return gradient;
    }

    getChartData = (canvas) => {
        const data = this.state.data;
        if(data.datasets) {
            let colors = ["rgba(255, 0, 255, 0.75)",];
            data.datasets.forEach((set, i) => {
                // set.backgroundColor = this.setGradientColor(canvas, colors[i]);
                set.borderColor = "Grey";
                set.borderWidth = 5;
            });
        }
        return data;
    }

    render() {

        return (
            <div>
                <br />
            <div style={{ maxWidth:1000}}>
            <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '4vh'}}>
                <h2> GreenFactor : {this.state.GreenFactor} </h2>
            </div>
                <br />
                <div><h2>Data Analysis</h2></div>
                <br />
                <Line 
                    options={{
                        responsive: true,
                        scales: {
                            xAxes: [{
                                type: 'time',
                                distribution: 'linear',
                                gridLines: {display:false}
                            }],
                            yAxes: [{
                                gridLines: {display:false}   
                            }]
                        }
                    }}
                    data={this.getChartData()}
                />
            </div>
            </div>
        )
    }
}

export default users