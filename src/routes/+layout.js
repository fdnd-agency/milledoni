export function load({ url }) {
    const loggedIn = true; // or false for testing

    return {
        currentPath: url.pathname,
        loggedIn
    };
}