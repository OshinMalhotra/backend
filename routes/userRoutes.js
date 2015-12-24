/**
 * Created by Oshin Malhotra on 12/23/2015.
 */
var routes=[
    {
        method: 'POST',
        path: '/hey',
        handler: function (request, reply) {
            reply('hey!');
        }
    },
    {
        method: 'GET',
        path: '/Spanish',
        handler: function (request, reply) {
            reply('Spanish!');
        }
    }
]
module.exports=[routes];