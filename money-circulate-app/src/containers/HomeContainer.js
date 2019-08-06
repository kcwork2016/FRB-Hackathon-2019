import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoryCard from '../components/StoryCard';

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
        let bData = getAddress();
    }

    render() {
        const storyCount = [1,1];
        return (
            <div className="div-home-container">

                <Header/>
                <StoryCard
                    cardId = { this.state.cardId}
                    cardImage = { this.state.cardImage }
                    cardText = { this.state.cardText }
                    cardType = { this.state.cardTitle }
                />

                <div>
                    {storyCount.map(i => {
                        return <StoryCard
                            cardId = { this.state.cardId}
                            cardImage = { this.state.cardImage }
                            cardText = { this.state.cardText }
                            cardType = { this.state.cardTitle }
                        />
                    })}
                </div>

                <Footer/>
            </div>
        );
    }


};




function getAddress() {
    let backendData;
    fetch('https://3417b6be-deac-4c00-974d-4bdf71f4dda4.mock.pstmn.io/demoapp/qa/v1/api/address')
        .then(results => {
            return backendData = results.json();
        })
}



