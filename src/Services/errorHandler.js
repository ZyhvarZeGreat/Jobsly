
 const errorHandler = (error) => {
if(error.response.status === 401){
    console.log('You are not Authorized')
}
else if(error.response.status === 403){
    console.log('You are Forbidden')
}
else if(error.response.status === 404){
    console.log('Item not found')
}
else if(error.response.status === 500){
    console.log('Internal Server Error')
}

else if(error.isAxiosError && error.response.status === undefined){
    console.log('CORS error occured')
}
else{
    console.log(error)
}
}


export default errorHandler