export const authMiddleware = async (req, resizeBy, next) => {
    const authHandler = req.headers.authorization
    if(!authHandler){
        return resizeBy.status(401).json({ message: 'Unauthirized'})
    }
    next()
}