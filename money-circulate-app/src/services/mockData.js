import {randumNum} from '../utils/util'


export function createData() {

    let mockBackendDatas = [
        {
            cardId: "0",
            cardImage: "https://media.istockphoto.com/photos/bank-picture-id626702872",
            cardText: "",
            cardTitle: ""+mockStartDate0()+" "+mockPintIn1()
        },

        {
            cardId: "1",
            cardImage: "https://media.istockphoto.com/photos/capitol-building-in-washington-dc-picture-id641964952",
            cardText: "",
            cardTitle: ""+mockSendTo2()
        },
        {
            cardId: "2",
            cardImage: "https://media.istockphoto.com/photos/bank-doorway-picture-id1008926982",
            cardText: "",
            cardTitle: ""+mockBankName3()
        },
        {
            cardId: "3",
            cardImage: "https://media.istockphoto.com/photos/sun-shines-through-the-colonnade-of-the-royal-exchange-building-in-picture-id827715068",
            cardText: "",
            cardTitle: ""+mockBankIn4()
        },
        {
            cardId: "4",
            cardImage: "https://media.istockphoto.com/photos/cardboard-boxes-on-conveyor-roller-in-distribution-warehouse-delivery-picture-id1046521978",
            cardText: "",
            cardTitle: ""+mockFirstUseAt5()
        },
        {
            cardId: "5",
            cardImage: "https://media.istockphoto.com/photos/group-of-happy-people-looking-at-camera-picture-id1029925066",
            cardText: "",
            cardTitle: ""+mockFirstUseBy6()
        }
    ];




    return mockBackendDatas;
}

export function mockEndDate7() {

    let endDate7 = ["8/5/19",
        "7/21/19",
        "7/6/19",
        "6/21/19",
        "6/6/19",
        "5/22/19",
        "5/7/19",
        "4/22/19",
        "4/7/19",
        "3/23/19",
        "3/8/19",
        "2/21/19",
        "2/6/19",
        "1/22/19",
        "1/7/19",
        "12/23/18",
        "12/8/18",
        "11/23/18",
        "11/8/18",
        "10/24/18",
        "10/9/18",
        "9/24/18",
        "9/9/18",
        "8/25/18",
        "8/10/18",
        "7/26/18",
        "7/11/18",
        "6/26/18",
        "6/11/18",
        "5/27/18",
        "5/12/18",
        "4/27/18",
        "4/12/18",
        "3/28/18",
        "3/13/18",
        "2/26/18",
        "2/11/18",
        "1/27/18" ];

    let endDateRan = randumNum(35, null);

return endDate7[endDateRan];

}

export function mockStartDate0() {
    let printOnDate0 = [
        "5/10/17",
        "5/25/16",
        "6/10/15",
        "6/25/14",
        "7/10/13",
        "7/25/12",
        "8/10/11",
        "8/25/10",
        "9/9/09",
        "9/24/08",
        "10/10/07",
        "10/25/06",
        "11/9/05",
        "11/24/04",
        "12/10/03",
        "12/25/02",
        "1/9/02",
        "1/24/01",
        "2/9/00",
        "2/24/99",
        "3/11/98",
        "3/26/97",
        "4/10/96",
        "4/26/95",
        "5/11/94",
        "5/26/93",
        "6/10/92",
        "6/26/91",
        "7/11/90",
        "7/26/89",
        "8/10/88",
        "8/26/87",
        "9/10/86",
        "9/25/85",
        "10/10/84",
        "10/26/83",
        "11/10/82",
        "11/25/81",
    ];

    let r = randumNum(35, null);
    return printOnDate0[r];
}

export function mockPintIn1() {
    let printIn1 = [
        "DC", "Texas"
    ];
    let r = randumNum(1, 0);
    return printIn1[r];
}

export function mockSendTo2() {
    let sendTo2 = [
        "St.-Louis",
        "San-Fran",
        "Chicago",
        "Dallas",
        "Richmond",
        "Kansas-City",
        "Atlanta",
        "San-Fran",
        "Boston",
        "Dallas",
        "Kansas-City",
        "Philadelphia",
        "San-Fran",
        "Cleveland",
        "Dallas",
        "Minneapolis",
        "Kansas-City",
        "St.-Louisv",
        "San-Fran",
        "Chicag",
        "Dallas",
        "Richmond",
        "Kansas-City",
        "Atlanta",
        "San-Fran",
        "Boston",
        "Dallas",
        "New-York",
        "Kansas-City",
        "Philadelphia",
        "San-Fran",
        "Cleveland",
        "Dallas",
        "Minneapolis",
        "Kansas-City",
        "Cleveland",
        "Dallas",
    ];

    let r = randumNum(35, null);
    return sendTo2[r];
}

export function mockBankName3() {
    let bankName3 = [
        "Bank-of-America",
        "Chase-Bank",
        "Commerce-Bank",
        "First-National-Bank",
        "Peoples-Bank-of-Choice",
        "Regions-Bank",
        "State-Bank",
        "US-Bank"
];
    let r = randumNum(7, null);
    return bankName3[r];
}

export function mockBankIn4 () {
    let bankIn4 = [
        "LittleRock,AR",
        "Reno,NV",
        "Rockford,IL",
        "Austin,TX",
        "Charlotte,N.C.",
        "Manhattan,KS",
        "Augusta,GA",
        "Boise,ID",
        "Marblehead,MA",
        "Erving,TX",
        "Albany,NY",
        "Topeaka,KS",
        "Hershey,PA",
        "Flagstaff,AZ",
        "Akron,OH",
        "SanAngelo,TX",
        "Bismark,ND",
        "Whitchta,KS",
        "Collinsville,IL",
        "Oceanside,CA",
        "Madison,WI",
        "FortWorth,TX",
        "Charleston,SC",
        "Denver,Colo.",
        "Norcross,GA",
        "Ogden,UT",
        "Essex,MA",
        "SanAntonio,TX",
        "Buffalo,NY",
        "OklahomaCity,Okla.",
        "StateCollege,PA",
        "Astoria,OR",
        "Canton,OH",
        "Houston,TX",
        "Butte,MT",
        "Tucson,Ariz.",
        "Cincinnati,OH",
        "Denton,TX"
    ];
    let r = randumNum(35, null);
    return bankIn4[r];
}

export function mockFirstUseAt5() {
    let firstUseAt5 = [
        "Hardware-store",
        "Grocery-Store",
        "Fast-food-restaurant",
        "Electronics",
        "Coffee-Shop",
        "Dr.-Office",
        "School",
        "Gas-Station",
        "Book-Store",
        "Department-Store",
        "Bank",
        "Beauty-Saloon",
        "Dog-Groomer",
        "Car-wash",
        "Dry-cleaners",
        "Drug-Store",
        "Home-repair",
        "Music",
        "entertainment",
        "Steak-House",
        "Sandwich-shop",
        "Post-Office",
        "restaurant",
        "banking",
        "Software",
        "Newspaper-stand",
        "Drug-Store",
        "Phone",
        "Shoe-store",
        "Department-Store",
        "home-goods",
        "real-estate",
        "ballgame",
        "sports-store",
        "fruit-stand",
        "Clothing",
        "Car-rental",
        "Car-Repair"
    ];
    let r = randumNum(35, null);
    return firstUseAt5[r];
}

export function mockFirstUseBy6() {
    let firstUseBy6 = [
        "18-year-old-boy",
        "18-year-old-girl",
        "Elderly-woman",
        "Elderly-man",
        "College-Grad",
        "Retired-man",
        "Retired-woman",
        "Business-professional",
        "Laborer",
        "Mom",
        "Dad",
        "Teacher",
        "Baseball-player",
        "paramedic",
        "Nurse",
        "Doctor",
        "Farmer",
        "Engineer",
        "Mayor",
        "Pageant-Queen",
        "Musician",
        "Cook",
        "Dancer",
        "Clown",
        "Bookkeeper",
        "Bowler",
        "Museum-Guide",
        "Movie-Star",
        "Astronaut",
        "Park-Ranger",
        "Computer-Expert",
        "Scientist",
        "hair-stylist",
        "Tailor",
        "Balloon-Artist",
        "Pizza-chef",
        "Truck-Driver",
        "Cab-Driver"
    ];
    let r = randumNum(35, null);
    return firstUseBy6[r];
}


    export function mockS3ImageUrl() {

        let s3ImageUrl10 = [
            "https://media.istockphoto.com/photos/bank-picture-id626702872",
     ];

        let endDateRan = randumNum(10, null);

        return s3ImageUrl10[endDateRan];

    }