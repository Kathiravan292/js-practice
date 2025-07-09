let productdetaile = [
    {
        imgURL: 'https://up.yimg.com/ib/th/id/OIP.bSNjVXooUFTNsjtVIwM0bAHaEo?pid=Api&rs=1&c=1&qlt=95&w=181&h=113',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        productSpecialPrice: 'specialPrice: ₹1,399',
        productDelMode: 'DeliveryMode: Cash on Delivery'
    },
    {
        imgURL: 'https://up.yimg.com/ib/th/id/OIP.bSNjVXooUFTNsjtVIwM0bAHaEo?pid=Api&rs=1&c=1&qlt=95&w=181&h=113',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        productSpecialPrice: 'specialPrice: ₹1,399',
        productDelMode: 'DeliveryMode: Cash on Delivery'
    },
    {
        imgURL: 'https://up.yimg.com/ib/th/id/OIP.bSNjVXooUFTNsjtVIwM0bAHaEo?pid=Api&rs=1&c=1&qlt=95&w=181&h=113',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        productSpecialPrice: 'specialPrice: ₹1,399',
        productDelMode: 'DeliveryMode: Cash on Delivery'
    },
    {
        imgURL: 'https://up.yimg.com/ib/th/id/OIP.bSNjVXooUFTNsjtVIwM0bAHaEo?pid=Api&rs=1&c=1&qlt=95&w=181&h=113',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        productSpecialPrice: 'specialPrice: ₹1,399',
        productDelMode: 'DeliveryMode: Cash on Delivery'
    }
]
// console.log(productdetaile);
//  approch -1 string 

let productresult = '<section>';
 for(let i=0;i<productdetaile.length; i++){
    productresult +='<figure>';
    productresult +='<img src='+ productdetaile[i].imgURL + 'alt="watch" />';
    productresult += '<figcaption>'+ productdetaile[i].productTitle +'</figcaption>';
    productresult += '<figcaption>'+ productdetaile[i].productdiscription +'</figcaption>';
    productresult += '<figcaption>'+ productdetaile[i].productActualPrice + '</figcaption>';
    productresult += '<figcaption>'+ productdetaile[i].productSpecialPrice + '</figcaption>';
    productresult += '<figcaption>'+ productdetaile[i].productDelMode + '</figcaption>';

    productresult += '</figure>';


}
 productresult +='</section>';

//  console.log(productresult);
 
document.write(productresult);