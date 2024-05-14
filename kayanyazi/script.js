


KayanYazi=function(nesne,zaman){ //nesne:kayan metnin gösterileceği div iken,zaman:her harfin kayma hızını belirler.
    let yaziNesne=nesne; // girilen değeri nesneye attık

    setInterval(function(){
        let yazi=yaziNesne.innerHTML; //yazi değişkeni kayan metnin mevcut içeriğini aldı.
        let harf=yazi.substring(0,1); //harf değişkeninin ilk harfini aldık.
        let kalan=yazi.substring(1,yazi.lenght); //kalan değişkeni ilk harften sonrasını aldı.
        kalan=kalan+harf+" "  // kalan değişkenine ilk harf eklendi. böylece metin kaymış oldu.
        yaziNesne.innerHTML=kalan; //kayan metin bir önceki adımda hazırlanan yeni içerikle gösterildi.
    }, zaman);
}

var nesne=document.getElementById("yazi"); //ekranda gösterildi.
    KayanYazi(nesne,300); // nesne:div içindeki yazı,300:güncellenme hızı

   