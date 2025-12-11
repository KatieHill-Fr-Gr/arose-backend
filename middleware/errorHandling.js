
const errorHandler = (err, req, res, next) => {

    const logError = (err) => {
        console.log('--------------')
        console.log(' ERROR ')
        console.log('Name: ', err.name)
        console.log('Status: ', err.status)
        console.log('Status: ', err.message)
        console.log('--------------')
        console.log('Stack: ')
        console.log(err.stack)
        console.log('--------------')
        console.log('The above error occurred during the below request:')
    }

    if (err.status === 404 || err.name === 'NotFound') {
        return res.status(404).json({ message: err.message })
    }

    if (err.name === 'InvalidData' {
        return res.status(err.status).json({ [err.field]: err.message })
    })



}