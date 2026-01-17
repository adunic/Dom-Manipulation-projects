var products = [
    {
        name: "Wooden chair", headline: "Polished chair", price: "9,499", image: "https://images.unsplash.com/photo-1487015307662-6ce6210680f1?q=80&w=685&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    { name: "Single sofa", headline: "Modern design", price: "10,499", image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8f}Hdvb2RlbiUyMGNoYWlyfGVufDB8fDB8fHww" },
    { name: "Wooden chair for classrooms", headline: "Simple design", price: "6,499", image: "https://media.istockphoto.com/id/518147675/photo/chair.webp?a=1&b=1&s=612x612&w=0&k=20&c=CoqWCbdEkHQ8cqWzAdfeXB6CbVAoxZD07KXuILSCPtU=" }

];
var popular = [{
    name: "Antique Chair", headline: "Premium Chair", price: "15,999", image: "https://plus.unsplash.com/premium_photo-1759432613840-4e2012d79ee6?q=80&w=1144&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
},
{ name: "Accent Chair", headline: "Room Chair", price: "12,499", image: "https://plus.unsplash.com/premium_photo-1723834562788-8d88f18087ec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
{ name: "Office Chair", headline: "Modern Design", price: "18,999", image: "https://plus.unsplash.com/premium_photo-1705169612261-2cf0407141c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDN8fHxlbnwwfHx8fHw%3D" }];

function addproduct() {
    var clutter = "";
    products.forEach(function (product, index) {
        clutter += `<div class="product w-fit rounded-xl p-2 bg-white">
                <div class="image w-[14rem] h-[13rem] bg-zinc-200 rounded-xl overflow-hidden">
                <img class ="w-full h-full object-cover"src ="${product.image}"   />
                </div>
                <div class="data w-full px-2 py-5">
                    <h1 class="font-semibold text-xl leading-none tracking-tight">${product.name}</h1>
                    <div class="flex justify-between w-full items-center mt-2">
                        <div class="w-1/2">
                            <h3 class="font-semibold opacity-20">${product.headline}</h3>
                            <h4 class="font-semibold mt-2">&#x20b9; ${product.price}</h4>
                        </div>
                        <button data-index="${index}" class="add w-10 h-10 rounded-full shader text-yellow-400"><i data-index="${index}"
                                class="add ri-add-line"></i></button>
                    </div>
                </div>
            </div>`

    })
    document.querySelector(".products").innerHTML = clutter;
}
function addpopularproduct() {
    var clutter = "";
    popular.forEach(function (product) {
        clutter += `<div class="popular bg-white p-2 rounded-2xl flex items-start gap-3 w-[60%] flex-shrink-0">
                    <div class="w-20 h-20  flex-shrink-0 rounded-2xl border-4 border-white overflow-hidden">
                        <img class="w-full h-full object-cover"
                            src="${product.image}"
                            alt="">
                    </div>
                    <div class="data py-2 w-full">
                        <h1 class="leading-none font-semibold">${product.name}</h1>
                        <h4 class="leading-none mt-2 text-sm font-semibold opacity-20">${product.headline}</h4>
                        <h4 class="mt-3 font-semibold text-zinc-500">&#x20b9;${product.price}</h4>
                    </div>
                </div>`
    })
    document.querySelector(".populars").innerHTML = clutter;
}
var cart = [];
function addtocart() {
    var saman = document.querySelector(".products");
    saman.addEventListener("click", function (details) {
        if (details.target.classList.contains('add')) {
            cart.push(products[details.target.dataset.index]);
        }
    })
}
function showcart() {
    document.querySelector(".carticon").addEventListener("click", function () {
        document.querySelector(".cartexpnd").style.display = "block";

        var clutter = "";
        cart.forEach(function (prod, index) {
            clutter += `<div class ="flex gap-2 bg-white p-2 rounded-lg">
            <div class="w-10 h-10 flex-shrink-0 rounded-lg  overflow-hidden">
            <img class="w-full h-full object-cover"src="${prod.image}">
            </div>
            <div>
            <h3 class="font-semibold">"${prod.name}"</h3>
            <h5 class="text-sm font-semibold opacity-80">"&#x20b9;${prod.price}"</h5>
            </div>
            </div>`;
        })
        document.querySelector(".cartexpnd").innerHTML = clutter;
    });
}
showcart();
addtocart();
addpopularproduct();
addproduct();
