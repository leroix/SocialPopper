var module.exports = exports = {}

exports.popit = function(method, params) {
    params = params || {}

    function _open(url, p) {
        p = p || {}

        var props = 'toolbar=0,' + 
                    'status=0,' + 
                    'width=%%,'.replace('%%', p['width'] || '1024') +
                    'height=%%,'.replace('%%', p['height'] || '500') +
                    'top=%%,'.replace('%%', p['top'] || '50') +
                    'left=%%'.replace('%%', p['left'] || '50')

        return window.open(url, '_blank', props)
    }

    function _buildUrl(url, params, defaults) {
        var lst = []
          , _encuri = encodeURIComponent

        if (defaults) {
            for (var index in defaults) {
                params[index] = params[index] || defaults[index]
            }
        }

        for (var index in params) {
            lst.push('%key=%val'.replace('%key', index)
                                .replace('%val', _encuri(params[index])))
        }

        return url + lst.join('&')
    }

    var defaults = {
         fb: {
             app_id:         '334899416630508'
            ,redirect_uri:   'http://jsbin.com/ezoqac/2'
        }
    }
    , url


    if (method == 'facebook-update') {
        url = _buildUrl('https://www.facebook.com/dialog/feed?',
                        params,
                        defaults.fb)
        
        return _open(url, {title: 'Share on Facebook'})
    }

    if (method == 'twitter-tweet') {
        url = _buildUrl('https://twitter.com/intent/tweet?', params)

        return _open(url, {
             width:         '550'
            ,height:        '420'
            ,top:           '300'
            ,left:          '300'
            ,title:         'Share on Twitter'
        })
    }

    return
}
