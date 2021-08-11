var async = require('async');
var GithubApi = require('github');

var github = new GithubApi({
    version: '3.0.0'
})

async.waterfall([]
    function getUserAvatar(callback) {
        github.search.users({ q: 'airbnb' }, function(err, res) {
            if (err) {
                callback(err, null);
                return;
            }

            var avatarUrl = res.items[0].avatar_url;
            callback(null, avatarUrl);
        });
    },
    function wrapAvatarInHtml(avatarurl, callback){
        var avatarWithHtml = '<img src="' + avatarUrl + '"/>';
        callback(null, avatarWithHtml)
    }
], function(err, result) {
    if (err) {
        console.error(err);
        return;
    }
    console.log(result);
}    
})

async.series([
    function functionOne(callback) {
        callback(null, 'RESULT OF FUNCTION ONE');
    },
    function functionTwo(callback) {
        callback(null,'RESULT OF FUNCTION TWO');
    },
    function functionThree(callback) {
        callback(null, 'RESULT OF FUNCTION THREE');
    }
], function(err, result) {
    console.log(result);
})