# Code Challenge

## Instruction for you mission:

Fork this project, and provide your own github or bitbucket repository.
Setup this project with all the libraries you needed to set a testing framework
Make sure you work on a feature branch , not on master.
Naming convention for the feature branch should be "feature/<YourName-QloyalCodeTest>".
Once you are complete push code to the feature branch only.
Use best practices to write code which you follow in your day to day development.

## Your mission

- Try to complete as much as possible with in **2 days** base on the **Role you are applying** 
- Ensure you provide a ***README.md*** file explaining how to run your code and the **ROLE that you are applying for**
- **Avoid using .docx** files (this is not easy to read on git repositories)

### REST API 

Go to URL : https://qa-challenges-lightbulb.atlassian.io
Create an automated regression for the below ACs
Using either RestAssure or Newman
API documentation https://qa-challenges-lightbulb.atlassian.io/api/allmethods

- AC1. I want to turn on and off my light

Provide a reports of the exucution and any bugs found ( be creative )


### WEB Automation

Go to URL : http://phptravels.com/demo/

Create an automated smoke test suite using http://devexpress.github.io/testcafe/ or your framework of choice for the below ACs 
(you can do some manual set up, but this must be documented)

- AC1. I want to be able book hotels, flights or tours

Provide a reports of the exucution and any bugs found ( be creative )


### MOBILE Automation


Provide a reports of the exucution and any bugs found ( be creative )


## EXTRA POINTS

+ 10 points each


1. Go to https://github.com/awslabs/aws-device-farm-sample-app-for-ios and run the below feature files
- https://github.com/awslabs/aws-device-farm-sample-app-for-ios/blob/master/features/login_page.feature
- https://github.com/awslabs/aws-device-farm-sample-app-for-ios/blob/master/features/home_page.feature

2. Run Services automation regression in a CI tool like circle-ci, shippable, AWS codebuild

3. Deploy a Selenium grid with Docker and run phptravels smoke test in Chrome and Firefox

4. Provide performance test for https://qa-challenges-lightbulb.atlassian.io services

5. Run lighthouse performance test for http://phptravels.com/demo/ homepage and 3 other pages you think are relevant

6. Fire off SoapUI tests by sending the SoapUI project file to a docker container. 

## NOTE

If you are not able to complete the challenge with the tools requested,
but you have a framework you are familiar with, please submit the alternative with the relevant documentation 
on how to install and run your tool **(Linux base installations are prefered)**


## My Code
Step 1: Imported a class called Selector from the Testcafe module
Step 2: Created a fixture called "Light Bulb" and page URL to use for the test
Step 3: Added the code to test. Go to the page, turn the light off, wait for 3 seconds, turn it back on, wait for 3 seconds and closes the page

## Running the code
Step 1: Go to terminal and CD to location of the *.ts, *.js file
Step 2: Run the file by typing testcafe chrome test.js
Step 3: Chrome brower will open and go through the test code above. Once it's completed the browser will close automatically
Step 4: Observe message in terminal, it should display 1 passed
