const { response, request } = require("express")

module.exports = {
   
    getHome: (request,response)=>{
        response.render('index.ejs')
    },

    getShop: (request, reponse)=>{
        response.render('shop.ejs')
    }
}

