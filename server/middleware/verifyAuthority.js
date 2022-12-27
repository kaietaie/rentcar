export const verifyAuthority = (...allowedAuthorities) => {
    return (req, res, next) => {
        if (!req?.headers.authorization) return res.sendStatus(401);
        const rolesArray = [...allowedAuthorities];
        const result = rolesArray.map(role => req.authority.includes(role)).find(val => val === true);
        if (!result) return res.sendStatus(401);
        next();
    }
}