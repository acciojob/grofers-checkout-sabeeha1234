const allPrices = document.querySelectorAll('.price')
     //function to get sum and append it 
     function getSumAndAppend(){
       
        // step 1:get total sum
        let totalSum = 0;
        for(let price of allPrices){
         totalSum += parseInt(price.innerText)
        }
        //console.log(totalSum)

        const newRow = document.createElement('tr')
        const newData = document.createElement('td')
        newData.colSpan = 2;
        newData.innerText = `total amount : ${totalSum}`// for adding dynamic text with the string


        newRow.appendChild(newData)
        table.appendChild(newRow)
     }
     getSumAndAppend()