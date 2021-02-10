const _Environments = {
    development: {
        BASE_URL: 'http://10.0.2.2:3333/api/1/1.0.0/',

        REGISTER: 'user',
        LOGIN: 'user/login',
        LOGOUT: 'user/logout',
        GET_USER_INFO: 'user',
        UPDATE_USER_INFO: 'user'
    },
};

function getEnvironment() {
    const platform = 'development';
    return _Environments[platform];
}

const Environment = getEnvironment();
module.exports = Environment;