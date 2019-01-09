
const leftNavUrls = {
    'Armory': '/user/:userId',
    'People': '/people/:userId',
    'Command': '/command/:userId',
    'Calendar': '/calendar/:userId'
};

export default {
    getLeftNavigationUrl(key) {
        return leftNavUrls[key];
    }
}