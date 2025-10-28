 const allPrices = document.querySelectorAll('.price')
     //function to get sum and append it 
     function getSumAndAppend(){
        console.log(allPrices)
        // step 1:get total sum
        let totalSum = 0;
        for(let price of allPrices){
         totalSum += parseInt(price.innerText)
        }
		   getSumAndAppend()
	 


