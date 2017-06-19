import analytics from './segment.js'

jQuery(function() {
  $('#contact-form form').submit(function(e) {
    e.preventDefault()

    var data = {
      name: $('#name').val(),
      email: $('#email').val(),
      description: $('#message').val()
    }

    analytics.identify(data.email, data)

    try {
      localStorage.setItem('craftsman', JSON.stringify(data))
    } catch (e) { console.error(e) }

    $('#contact-form').html('<div class="8u 12u$(small)">Awesome! ' + data.name + ', thanks for your interest.</div>')
  })
})
