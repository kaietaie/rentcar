export const verifyAuthority = (req, ...allowedAuthorities) => {
        if (!req?.headers?.authorization) return false;
        const rolesArray = [...allowedAuthorities];
        const authority = [req.authority];
        const result = rolesArray.map(role => authority.includes(role)).find(val => val === true);
        if (!result) return false;
        return true;
    
}
// -------------------------------------------------------------------
// export const verifyAuthority = (...allowedAuthorities) => {
//     return (req, res, next) => {
//         if (!req?.headers.authorization) return res.sendStatus(401);
//         const rolesArray = [...allowedAuthorities];
//         const authority = [req.authority];
//         const result = rolesArray.map(role => authority.includes(role)).find(val => val === true);
//         if (!result) return res.sendStatus(401);
//         next();
//     }
// }