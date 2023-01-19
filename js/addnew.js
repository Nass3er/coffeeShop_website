
 document.getElementById("change").onclick = function () { 
    document.getElementById("colord-span").style.color = "#0f0";
}

// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////

var ob = {id:"" ,name:"" , price:"" ,imgsrc:""};

function previewFile() {
    const file = document.getElementById("imgfs").files[0];
    const reader = new FileReader();
    reader.addEventListener("load", function () {
        ob.imgsrc = reader.result;
    }, false);
    reader.readAsDataURL(file);
}
function setdata() {  
    ob.name = document.getElementById("nm").value;
    ob.price = document.getElementById("am").value;
    var colo = JSON.parse(sessionStorage.getItem("my_date"));
    var idd = document.getElementById("proid");
    if(colo === null){
        idd.value = 5;
        ob.id = idd.value;
        var dat = [];
        dat.push(ob);
        sessionStorage.setItem("my_date", JSON.stringify(dat)); //store colors
    }else{
        var num = colo.length;
        console.log(colo.length);
        idd.value = num+5;
        ob.id = idd.value;
        colo.push(ob);
        sessionStorage.setItem("my_date", JSON.stringify(colo)); //store colors
    }
};


// ////////////////////////////////////////////////////////////////
// ////////////////////////////////////////////////////////////////




const productc = [
    {id:"0" ,name:"PRODUCT1" , price:"100" ,imgsrc:"images/product1.jpg"},
    {id:"1" ,name:"PRODUCT2" , price:"200" ,imgsrc:"images/product2.jpg"},
    {id:"2" ,name:"PRODUCT3" , price:"300" ,imgsrc:"images/product3.jpg"},
    {id:"3" ,name:"PRODUCT4" , price:"400" ,imgsrc:"images/product4.jpg"},
    {id:"4" ,name:"PRODUCT5" , price:"500" ,imgsrc:"images/product5.jpg"}
];

var colo = JSON.parse(sessionStorage.getItem("my_date"));
if(colo === null){

}else{
    for (let i = 0; i < colo.length; i++) {
        productc.push(colo[i]);
        
    }
}


function sum() {

    var tds = document.getElementsByClassName("prod_price");
    var sum = 0 ;
    for (let i = 0; i < tds.length; i++) {
        
        sum += Number(tds[i].textContent);
    }

    document.getElementById("totalprice").textContent = sum;

};

function showprice(event)
{
    event.preventDefault();
    var val = event.target.form.elements["info"].value;

    var tbl = document.getElementById("tableproducts");

    var trr  = document.createElement("tr");
    for (let i = 0; i < productc.length; i++) {
        if(productc[i]["id"] == val)
        {
            var td1 = document.createElement("td");
            td1.textContent = productc[i]["name"];
            var td2 = document.createElement("td");
            td2.textContent = productc[i]["price"];
            td2.classList.add("prod_price");
            trr.appendChild(td1);
            trr.appendChild(td2);
            break;
        }
    }
    tbl.appendChild(trr);
    sum();
}



document.body.onload = function()
{
    var parent = document.getElementsByClassName("main__products-box")[0];
    for (let i = 0; i < productc.length; i++) {
        var form = document.createElement("form");
        var main__products = document.createElement("div");
        main__products.classList.add("main__products-card");
        var product_image = document.createElement("div");
        product_image.classList.add("product-image");
        var aa = document.createElement("a");
        var imgg = document.createElement("img");
        imgg.style.height = "246.375px";
        imgg.classList.add("responsive");
        imgg.alt = "coffee beans";
        imgg.src = productc[i]["imgsrc"];
        
        aa.appendChild(imgg);
        product_image.appendChild(aa);
        main__products.appendChild(product_image);

        var product_info = document.createElement("div");
        product_info.classList.add("product-info");                                
        var hh5 = document.createElement("h5");
        hh5.textContent = productc[i]["name"];

        product_info.appendChild(hh5);

        var product_price = document.createElement("div");
        product_price.classList.add("product-price");
        
        var hh6 = document.createElement("h6");
        hh6.textContent = productc[i]["price"];

        product_price.appendChild(hh6);

        var pp = document.createElement("p");

        var inptsbm = document.createElement("input");
        inptsbm.setAttribute("type", "submit");
        inptsbm.setAttribute("value", "Add to cart");
        inptsbm.setAttribute("name", "add");
        inptsbm.addEventListener("click", showprice);



        pp.appendChild(inptsbm);

        product_price.appendChild(pp);

        var inpttext = document.createElement("input");
        inpttext.setAttribute("type", "text");
        inpttext.setAttribute("value",  productc[i]["id"]);
        inpttext.setAttribute("name", "info");
        inpttext.setAttribute("hidden", "true");

        product_price.appendChild(inpttext);

        product_info.appendChild(product_price);

        main__products.appendChild(product_info);
        
        form.appendChild(main__products);

        parent.appendChild(form);
    }

    // var forms = parent.children;
    // console.log(forms);
    // for (let i = 0; i < forms.length; i++) {
    //   var btn = forms[i].elements["add"];
    //   btn.addEventListener("click", function() {
    //     evt.preventDefault();
    //     var val = this.parent('form').get(0).elements["info"].value;
    //   });
    // }
}


