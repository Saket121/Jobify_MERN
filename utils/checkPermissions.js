
import {UnAuthenticatedError} from '../errors/index.js'

const checkPermissions = (request, resourceUserId) => {
    if(requestUser.userId === resourceUserId.toString()) return
    
    throw new UnAuthenticatedError('Not Authorized to access this route')
}

export default checkPermissions