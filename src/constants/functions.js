export const navOptionHandler = () => ({
    headerShown: false,
    animationEnabled: false,
});

export const validateEmail = (value) => {
    var emailRex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (emailRex.test(value)) {
        return true;
    }
    return false;
};

export const isEmpty = (param) => {
    return (
        param == undefined ||
        param == null ||
        (typeof param === 'string' && param == '')
    );
};