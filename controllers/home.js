const { response, request } = require("express")

module.exports = {
   
    getHome: (request,response)=>{
        response.render('index.ejs')
    }
}

