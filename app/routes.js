//
// For guidance on how to create routes see:
// https://prototype-kit.service.gov.uk/docs/create-routes
//

const govukPrototypeKit = require('govuk-prototype-kit')
const router = govukPrototypeKit.requests.setupRouter()

// Add your routes here

// Run this code when a form is submitted to 'superhero-location-answer'
router.post('/superhero-location-answer', function (req, res) {

  // Make a variable and give it the value from 'superhero-location'
  // references the radio class of superheroLocation not the URL of the page
  var isUKLocation = req.session.data['superheroLocation']

  // Check whether the variable matches a condition
  if (isUKLocation == "abroad"){
    // Send user to next page
    res.redirect('/ineligible')
  } else {
    // Send user to ineligible page
    res.redirect('/superhero-power')
  }

})