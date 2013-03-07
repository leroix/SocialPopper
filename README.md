Opens a popup window for a desired social action



    var socialPopper = require('./SocialPopper')
    
    socialPopper.popit('facebook-update', {
         app_id: '342352342341123'
        ,description: 'This is a description'
    })
    
    socialPopper.popit('twitter-tweet', {
         text: 'Hey, whats up?'
        ,url: 'http://www.google.com'
    })
