
import { Selector } from 'testcafe';

fixture `Light Bulb`
    .page `https://qa-challenges-lightbulb.atlassian.io/`;


test('Click the button to turn light off and back on', async t => {
     await t.click('#switch') // turn light off
     .wait(3000) // just to see the page state
     await t.click('#switch') // turn light on
     .wait(3000) // just to see the page state


});







