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

// let productresult = '<section>';
//  for(let i=0;i<productdetaile.length; i++){
//     productresult +='<figure>';
//     productresult +='<img src='+ productdetaile[i].imgURL + 'alt="watch" />';
//     productresult += '<figcaption>'+ productdetaile[i].productTitle +'</figcaption>';
//     productresult += '<figcaption>'+ productdetaile[i].productdiscription +'</figcaption>';
//     productresult += '<figcaption>'+ productdetaile[i].productActualPrice + '</figcaption>';
//     productresult += '<figcaption>'+ productdetaile[i].productSpecialPrice + '</figcaption>';
//     productresult += '<figcaption>'+ productdetaile[i].productDelMode + '</figcaption>';

//     productresult += '</figure>';


// }
//  productresult +='</section>';

// //  console.log(productresult);
 
// document.write(productresult);

// Approch 2  back tick

// let productresult='<section>';
// for(let i =0; i<productdetaile.length;i++){
//      productresult += `<figure>
//      <img src="${productdetaile[i].imgURL}"/>
//      <figcaption>${ productdetaile[i].productTitle} </figcaption>
//      <figcaption>${ productdetaile[i].productdiscription} </figcaption>
//      <figcaption>${ productdetaile[i].productActualPrice} </figcaption>
//      <figcaption>${ productdetaile[i].productSpecialPrice} </figcaption>
//      <figcaption>${ productdetaile[i].productDelMode} </figcaption>
     
//       </figure>`

// }
// productresult += '</section>';
// document.write(productresult);

////////////////////////// approch 3 dom method////////////////////
let parentElement = document.createElement('section');
let figureElement = document.createElement('figure');
let imgElement = document.createElement('img');
 imgElement.setAttribute('src','https://up.yimg.com/ib/th/id/OIP.bSNjVXooUFTNsjtVIwM0bAHaEo?pid=Api&rs=1&c=1&qlt=95&w=181&h=113');
 imgElement.setAttribute('alte','watch');
 let figcaptionElement1 = document.createElement('figcaption');
 let figcaptionElement1Text = document.createTextNode(`productTitle: 'Title:boAt`);
 figcaptionElement1.appendChild(figcaptionElement1Text);

 let figcaptionElement2 = document.createElement('figcaption');
 let figcaptionElement2Text = document.createTextNode(`productdiscription: 'Discriptin: Noise Colorfit Icon'`);
 figcaptionElement2.appendChild(figcaptionElement2Text);

 let figcaptionElement3 = document.createElement('figcaption');
 let figcaptionElement3Text = document.createTextNode(`productActualPrice: 'actualPrice: ₹5,999'`);
 figcaptionElement3.appendChild(figcaptionElement3Text);

 let figcaptionElement4 = document.createElement('figcaption');
 let figcaptionElement4Text = document.createTextNode(`productSpecialPrice: 'specialPrice: ₹1,399'`);
 figcaptionElement4.appendChild(figcaptionElement4Text);

 let figcaptionElement5 = document.createElement('figcaption');
 let figcaptionElement5Text = document.createTextNode(`productDelMode: 'DeliveryMode: Cash on Delivery'`);
 figcaptionElement5.appendChild(figcaptionElement5Text);

figureElement.appendChild(imgElement)
    figureElement.appendChild(figcaptionElement1)
    figureElement.appendChild(figcaptionElement2)
    figureElement.appendChild(figcaptionElement3)
    figureElement.appendChild(figcaptionElement4)
    figureElement.appendChild(figcaptionElement5)

    parentElement.appendChild(figureElement)

    console.log(parentElement);

  document.body.appendChild(parentElement)