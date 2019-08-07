import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoryCard from '../components/StoryCard';
import '../services/mockData';
import {createData} from "../services/mockData";

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
            cardTitle: "FED"
        };
    };


    componentDidMount() {
        getBackendData();
    }

    render() {
        let mockDatas = createData();
        console.log(mockDatas);

        return (
            <div className="div-home-container">

                <Header/>
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
    let backendData;
    fetch(' https://638ed8c6-c636-44b4-be5b-e9bc525f5e9b.mock.pstmn.io/getStory')
        .then(results => {
            return backendData = results.json();
        })
}



