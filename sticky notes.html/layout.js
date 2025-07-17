let productdetaile = [
    {
        imgURL: 'https://tse4.mm.bing.net/th/id/OIP.QWFXXZsS94GoMfa1cn6EdwHaE8?pid=Api&P=0&h=180',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        
    },
    {
        imgURL: 'https://tse2.mm.bing.net/th/id/OIP.YXTwYHb6IxoVBEAUd97hBgHaJC?pid=Api&P=0&h=180',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        
    },
    {
        imgURL: 'https://tse1.mm.bing.net/th/id/OIP.-FzmSHdgFNuzENCYwBBX_AHaD4?pid=Api&P=0&h=180',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        
    },
    {
        imgURL: 'https://tse4.mm.bing.net/th/id/OIP.GyJo1rPuts_a2_tSlRd0lgHaHa?pid=Api&P=0&h=180',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        
    },
{
        imgURL: 'https://tse4.mm.bing.net/th/id/OIP.qMYIJ-zMPZ-psRzM51iu4QHaG9?pid=Api&P=0&h=180',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        
    },
{
        imgURL: 'https://tse4.mm.bing.net/th/id/OIP.quWmzOzvUUUROnx6kss9_wHaEv?pid=Api&P=0&h=180',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        
    },
{
        imgURL: 'https://tse3.mm.bing.net/th/id/OIP.WLwjdBt0snoZJS2d1RdLywHaHa?pid=Api&P=0&h=180',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        
    },
{
        imgURL: 'https://tse3.mm.bing.net/th/id/OIP.YPSz5ZM0U2O9BNoVPqo03QHaE8?pid=Api&P=0&h=180',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        
    },
    {
        imgURL: 'https://tse2.mm.bing.net/th/id/OIP._efNH1rK-rcc5XNeK1pAfAHaHa?pid=Api&P=0&h=180',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        
    },
    {
        imgURL: 'https://tse1.mm.bing.net/th/id/OIP.Bi6H2bGIVTjoKBmc6_AVFwHaHa?pid=Api&P=0&h=180',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        
    },
    {
        imgURL: 'https://tse4.mm.bing.net/th/id/OIP.FSaDJGP-34oIok4jQ_DNrQHaI9?pid=Api&P=0&h=180',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        
    },
    {
        imgURL: 'https://tse2.mm.bing.net/th/id/OIP.Gcho6CdiGqoRg3F6ECUU3wHaJP?pid=Api&P=0&h=180',
        productTitle: 'Title:boAt',
        productdiscription: 'Discriptin: Noise Colorfit ',
        productActualPrice: 'actualPrice: ₹5,999',
        
    },

]
    let productresult = '<section id=sec>' ;
 for(let i=0;i<productdetaile.length; i++){
    productresult +='<figure id=s>';
    productresult +='<img id=img src=' + productdetaile[i].imgURL + 'alt="watch" />';
    productresult += '<figcaption>'+ productdetaile[i].productTitle +'</figcaption>';
    productresult += '<figcaption>'+ productdetaile[i].productdiscription +'</figcaption>';
    productresult += '<figcaption>'+ productdetaile[i].productActualPrice + '</figcaption>';
    productresult += '<figcaption>'+ productdetaile[i].productSpecialPrice + '</figcaption>';
    productresult += '<figcaption>'+ productdetaile[i].productDelMode + '</figcaption>';

    productresult += '</figure>';


}
 productresult +='</section>';

 document.write(productresult)