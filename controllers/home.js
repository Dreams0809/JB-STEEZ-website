const { response, request } = require("express")

module.exports = {
   
    getHome: (request,response)=>{
        response.render('index.ejs')
    },

    getShop: (request, response)=>{
        response.render('shop.ejs')
    }
}

