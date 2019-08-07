import React, {Component} from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StoryCard from '../components/StoryCard';
import '../services/mockData';
import {createData, mockEndDate7, mockStartDate0, mockPintIn1,
    mockSendTo2, mockBankName3, mockBankIn4, mockFirstUseAt5,
    mockFirstUseBy6} from "../services/mockData";
import {getAWSData, getBackendData} from '../services/backendServices'
import arrayMove from 'array-move';

export default class HomeContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            results:"",
            cardId:"0",
            cardImage: "https://cdn.coingape.com/wp-content/uploads/2018/08/29232851/bitcoin89-678x356.jpg",
            cardText:"Shred date: ",
            cardTitle: "Federal Reserve Bank of St Louis",
            headerSerialNum:"A1223198",
            headerValue: "89"
        };
    };


    componentDidMount() {
        getAWSData();
        getBackendData();
        this.setState({});
        this.state.headerSerialNum = randumNum(90000, 10000);
        this.state.headerValue = randumNum(150, 19);
        let mockDatas = createData(); //mock data
        // arrayMove(mockDatas, 1, 5);
    }

    render() {
        let mockDatas1 = createData(); //mock data

        // let strI = randumNum(7, null);
        // let endI = randumNum(7, null);
        // let mockDatas = arrayMove(mockDatas1, strI, endI);
        // let mockDatas = mockDatas1;
            let mockDatas = mockDatas1
                //arrayMove(mockDatas1, strI, endI);

        console.log("mock data check: "+ mockDatas);



        return (
            <div className="div-home-container">

                <Header
                    headerSerialNum = {this.state.headerSerialNum }
                    headerValue = {this.state.headerValue}
                />

                <div>
                    {   mockDatas.map((mockData) => {
                        return <StoryCard
                            key={ mockData.id }
                            cardId = { mockData.cardId }
                            cardImage = { mockData.cardImage }
                            cardText = { mockData.cardText }
                            cardTitle = { mockData.cardTitle }
                        />
                    })}
                </div>

                <div>
                    <StoryCard
                        cardId = { this.state.cardId }
                        cardImage = { this.state.cardImage }
                        cardText = { this.state.cardText + mockEndDate7()}
                        cardTitle = { this.state.cardTitle }
                    />
                </div>

                <Footer/>
            </div>
        );
    }


};

function randumNum(max, min) {
    return Math.floor(Math.random() * max) + min;
}



