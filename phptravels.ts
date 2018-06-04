import { Selector } from 'testcafe';

fixture `PHP Travels`
    .page `https://www.phptravels.net/`;


test('Click on flights link', async t => {

	 const flights = Selector('#body > section.grey-box > div > div > div:nth-child(1) > div > div > div.col-md-9 > div.col-md-12 > div > div:nth-child(1) > div > a');



  	await t
     	.click(flights) // click on button flights
     	.wait(3000); // just to see the page state
    	
    


});



