export const errorMiddleWare = (err, req, res, next) => {
    err.message || (err.message = "Internal server error");
    err.statusCode || (err.statusCode = 500);
    return res.status(err.statusCode).json({
        success: false,
        message: err.message
    });
};
