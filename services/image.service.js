export const getUserImageSrc = (path) => {
    if (path) {
        return {  uri: path };
    }

    return require("../assets/images/defaultUser.png");
};  