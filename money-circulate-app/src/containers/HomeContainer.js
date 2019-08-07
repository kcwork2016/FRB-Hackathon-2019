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
        getBackendData();
    }

    render() {
        let mockDataArray = createData();
        console.log(mockDataArray);

       // map<U>(callbackfn: (value: T, index: number, array: T[]) => U, thisArg?: any): U[];
        return (
            <div className="div-home-container">

                <Header/>
                {/*<StoryCard*/}
                    {/*cardId = { this.state.cardId}*/}
                    {/*cardImage = { this.state.cardImage }*/}
                    {/*cardText = { this.state.cardText }*/}
                    {/*cardType = { this.state.cardTitle }*/}
                {/*/>*/}

                <div>
                    {mockDataArray.map(function() {
                        return <StoryCard
                            key = { mockDataArray.toString() }
                            // cardId = { this.state.cardId}
                            // cardImage = { this.state.cardImage }
                            // cardText = { this.state.cardText }
                            // cardType = { this.state.cardTitle }

                            // cardId = { mockDataArray[mockDataArray.key].cardId }
                            // cardImage = { mockDataArray[1].cardImage }
                            // cardText = { mockDataArray[1].cardText }
                            // cardType = { mockDataArray[1].cardTitle }
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


function createData() {
    class CardObj {
        constructor(cardId, cardImage, cardText, cardTitle) {
            this.cardId = cardId;
            this.cardImage = cardImage;
            this.cardText = cardText;
            this.cardTitle = cardTitle;
        }
    }
    let mockDataArray = [];
    mockDataArray.push(
        new CardObj (0, "https://media.istockphoto.com/photos/bank-picture-id626702872", "0The Federal Reserve System is the central banking", "0title"),
        new CardObj (1, "https://media.istockphoto.com/photos/bank-counter-picture-id636202058", "1The Federal Reserve System is the central banking", "1title"),
        new CardObj (2, "https://media.istockphoto.com/photos/couple-talking-to-loan-officer-and-shaking-hands-picture-id674650850", "2The Federal Reserve System is the central banking", "2title"),
        new CardObj (3, "https://media.istockphoto.comhttps://media.istockphoto.com/photos/business-office-building-in-london-picture-id911607890", "3The Federal Reserve System is the central banking", "3title"),
        new CardObj (4, "https://media.istockphoto.com/photos/discussing-the-new-marketing-strategy-picture-id638953230", "4The Federal Reserve System is the central banking", "4title"),
        new CardObj (5, "https://media.istockphoto.com/photos/technical-financial-graph-on-technology-abstract-background-picture-id639666654", "5The Federal Reserve System is the central banking", "5title"),
        new CardObj (6, "https://media.istockphoto.com/photos/stack-of-multicolored-credit-cards-closeup-picture-id903663312", "6The Federal Reserve System is the central banking", "6title"),
    );

    return mockDataArray;
}
