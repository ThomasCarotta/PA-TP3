const resolveRoutes = (route) => {
    if (route.length <= 3) {
        let validRoute = route === '/' ? '/' : `/:id`;
        return validRoute;
    } else if (route.startsWith('info')) {
        return `/info/:id`;  
    }
    return `/${route}`;
};

export default resolveRoutes;

