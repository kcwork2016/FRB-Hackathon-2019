export function getBackendData() {
    const API = 'https://96befd27-4ecd-40b4-97a7-401231e82ba5.mock.pstmn.io/getStory';
    let backendData;
    fetch(API)
        .then(response => {
            backendData = response.json()
                .then(data=> backendData);
            return backendData;
        });
}


export function getAWSData() {
    const API = 'https://n2uh4u6jvh.execute-api.us-east-1.amazonaws.com/dev/story';
    let backendData;
    fetch(API)
        .then(response => {
            backendData = response.json()
                .then(data=> backendData);
            return backendData;
        });
}