
const leftNavUrls = {
    'Armory': '/user/:id',
    'People': '/people/:id',
    'Command': '/command/:id',
    'Calendar': '/calendar/:id'
};

export default {
    getLeftNavigationUrl(key) {
        return leftNavUrls[key];
    }
}