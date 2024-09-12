(
    
    function() {
        let address = ''
        let isDisplayedData = false

    document.getElementById('submit').addEventListener('click',()=>{

        if(isDisplayedData) {
            isDisplayedData = false
            resetData();
        } 
        
        address =  document.getElementById('location').value
        
        getData(address);



    })
    
const getData = (address) => {
    let url = 'https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/' + address + '?key=4KNUZBSMSLFDHXVFH43M2S4UE';

    fetch(url).then((response) => {
        return response.json()
    })
    .then ((data) => {
        data.currentConditions;
        displayData(data.currentConditions.temp + ' F')
        toggleDataDiv()
            
    } )

    .catch((err) => {
        displayData(err)
        toggleDataDiv()
    });
    }

    const displayData = (data) => {
        
        const newDiv = document.createElement('div')
        const pTag = document.createElement('p')
        newDiv.appendChild(pTag)
        pTag.textContent = data

        document.querySelector('.results').appendChild(newDiv)
    }
    const resetData = () => {


        const element = document.querySelector(".results");
        while (element.firstChild) {
          element.removeChild(element.firstChild)
        }        
    }
    const toggleDataDiv = () => {
        isDisplayedData = true
        document.querySelector('.results').style.display = 'block'
    }
})()
    
    
