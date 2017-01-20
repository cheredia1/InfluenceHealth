// spec.js
describe('Protractor Influence Health Test', function() {
    //For Scenario A/////////////////////
  var firstNumber = element(by.model('calc.firstNumber'));
  var secondNumber = element(by.model('calc.secondNumber'));
  var goButton = element(by.css('[ng-click="calculate(calc.firstNumber, calc.selectedOperator, calc.secondNumber)"'));
  var latestResult = element(by.css('.large-number'));
    
    
    //For Scenario B//////////////////////
  var adjectiveOne = element(by.css('[value ="Acidic"]'));
  var adjectiveTwo = element(by.css('[value ="Devilish"]'));
  var noun = element(by.css('[value ="porcupine"]'));
  var generateButton = element(by.css('[ng-click="generateMessage(animal)"]'));

  
  //For scenario C////////////////////////
  var numOne = element(by.css('[value ="128"]'));
  var numTwo = element(by.css('[value ="5"]'));
  var numThree = element(by.css('[value ="24"]'));
  var updateButton = element(by.css('[ng-click="getCounts()"]'));
  
    
  //For Scenario D///////////////////////
  var validateButton = element(by.css('[ng-click="validateMessage(message.text)"]'));
  var passTest = element(by.model('message.text'));
  var failTest 
      
      
  beforeEach(function() {
    browser.get('https://serene-beyond-81752.herokuapp.com/#/');
  });


  it('should add one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);
    
    element(by.cssContainingText('option', '+')).click();
    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });
    
    it('should multiply one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);
    
    element(by.cssContainingText('option', 'x')).click();
    goButton.click();

    expect(latestResult.getText()).toEqual('2');
  });
    
    it('should divide six and two', function() {
    firstNumber.sendKeys(6);
    secondNumber.sendKeys(2);
    
    element(by.cssContainingText('option', '÷')).click();
    goButton.click();

    expect(latestResult.getText()).toEqual('3');
  });
    it('should subtract one and two', function() {
    firstNumber.sendKeys(1);
    secondNumber.sendKeys(2);
    
    element(by.cssContainingText('option', '-')).click();
    goButton.click();

    expect(latestResult.getText()).toEqual('-1');
  });
    
    
    
    //Scenario B
    it('should display 2 adjectives and a noun', function() {
    adjectiveOne.click();
    adjectiveTwo.click();
    noun.click();
        
    generateButton.click();
expect(element(by.id('generated_message_input')).getAttribute('value')).toBe('Acidic, Devilish Porcupine');
});
    
    
    //Scenario C
    it('should display new total and change color to orange', function(){
    numOne.click();
    numThree.click();
    numTwo.click();
        //Did not create variable for this due to checks both before and after 'Update //Total' being pressed
        
        //Initial expect to see if information starts correct
    expect(element(by.css('[class="large-number number-neutral ng-binding"]')).getText()).toEqual('473,268');
        //First round of test to determine if the color changes and if the total updates
    updateButton.click();     
    expect(element(by.css('[class="large-number number-neutral ng-binding number-positive"]')).getText()).toEqual('473,425');
        //second click to determine if section C continues to update and keeps the color change
    updateButton.click();    
    expect(element(by.css('[class="large-number number-neutral ng-binding number-positive"]')).getText()).toEqual('473,582');    
    });
    
    //Scenario D
    it('Should validate any word or number combination with no characters of any kind', function(){
        
        //Checks if error message appears for empty
        validateButton.click();
        expect(element(by.id('field_is_empty')).getText()).toEqual('Field must be filled out.');
        
        passTest.sendKeys('A1d');
        validateButton.click();
        
        expect(element(by.css('.ng-scope')).isPresent()).toBe(true);
        
        passTest.sendKeys('..2a');
        validateButton.click();
        expect(element(by.id('field_has_invalid_chars')).getText()).toEqual('Can only use letters and numbers.');
        
    });

});