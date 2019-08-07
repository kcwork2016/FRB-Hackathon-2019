import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoryCard from '../components/StoryCard';
import '../services/mockData';
import {createData} from "../services/mockData";
import arrayMove from 'array-move';

export default class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results:"",
            cardId:"0",
            cardImage: "https://media.istockphoto.com/photos/bank-picture-id626702872",
            cardText:" The Federal Reserve System is the central banking system of the United States of America.\n" +
            "It was created on December 23, 1913, with the enactment of the Federal Reserve Act,\n" +
            "after a series of financial panics led to the desire for central control of the monetary system",
            cardTitle: "FED",
            serialNum:"A1223198"
        };
    };



    componentDidMount() {
        this.setState({});
        this.state.serialNum = randumNum(90000, 10000);
        let mockDatas = createData(); //mock data
        // arrayMove(mockDatas, 1, 5);
    }

    render() {
        let mockDatas1 = createData(); //mock data
        // let mockDatas = getBackendData(); //service data

        let strI = randumNum(7, null);
        let endI = randumNum(7, null);
        let mockDatas = arrayMove(mockDatas1, strI, endI);
        console.log("mock data check: "+ mockDatas);

        return (
            <div className="div-home-container">

                <Header
                    serialNum = {this.state.serialNum }
                />

                <div>
                    {   mockDatas.map((mockData) => {
                        return <StoryCard
                            key={ mockData.id }
                            cardId = { mockData.cardId }
                            cardImage = { mockData.cardImage }
                            cardText = { mockData.cardText }
                            cardType = { mockData.cardTitle }
                        />
                    })}
                </div>

                <Footer/>
            </div>
        );
    }


};

function getBackendData() {
    const API = 'https://96befd27-4ecd-40b4-97a7-401231e82ba5.mock.pstmn.io/getStory'
    let backendData;
    // fetch(API)
    //     .then(response => {
    //          backendData = response.json()
    //     .then(data=> backendData);
    //         return backendData;
    //     });


    fetch(API)
        .then(function(response) {
            backendData = response.json();
            return backendData;
        })
        .then(function(myJson) {
            console.log(JSON.stringify(myJson));
      return myJson;
        });

}

function randumNum(max, min) {
    return Math.floor(Math.random() * max) + min;
}



