var cardArr = [
    {
      id: 0,
      image:
      "./products/product0.jpg",
      title: "Electric Grinder <br> with 2 Blades",
      des: 1250
    },
    
    {
      id: 1,
      image: "./products/product5.jpg",
      title: "Silicon for sink",
      des: 150
    },
    {
      id: 2,
      image: "./products/product3.jpg",
      title: "Water Bottle",
      des:345
    },
    {
      id: 3,
      image: "./products/product2.jpg",
      title: "Mosquito coil",
      des: 345
    },
    {
      id: 4,
      image: "./products/product14.jpg",
      title: "Coffee Mug-450ml",
      des: 650
    },
    {
      id: 5,
      image: "./products/product17.jpg",
      title: "Juicer Blender",
      des:850
    },
    {
      id: 6,
      image: "./products/product16.jpg",
      title: "Hanging Organizer",
      des: 380
    },
    {
      id: 7,
      image: "./products/product11.jpg",
      title: "LED Wall Lamp",
      des: 350
    },
    {
      id: 8,
      image: "./products/product1.jpg",
      title: "Storage Box",
      des: 300
    },
    {
      id: 9,
      image: "./products/product13.jpg",
      title: "Dry fruits Organizer",
      des: 3350
    },
    {
      id: 10,
      image: "./products/product12.jpg",
      title: "brush holder",
      des:250
    },
    
    {
      id: 11,
      image: "./products/product4.jpg",
      title: "Trickle Jug",
      des: 400
    },
    {
      id: 12,
      image: "./products/product7.jpg",
      title: "Folded Kettle",
      des:1550
    },
    {
      id: 13,
      image: "./products/siliconmold.jpg",
      title: "Silicon Moulds",
      des:350
    },
    {
      id: 14,
      image: "./products/product6.jpg",
      title: "heart shap organizer",
      des:500
    },
    
    {
      id: 15,
      image: "./products/product8.jpg",
      title: "Electric Beater",
      des: 1450
    },
     
    {
      id: 16,
      image: "./products/product9.jpg",
      title: "Roti Maker",
      des:2600
    },
     
    {
      id: 17,
      image: "./products/product10.jpg",
      title: "organizer box",
      des: 400
    },
    {
      id: 18,
      image:
      "./products/product0.jpg",
      title: "Electric Grinder <br> with 4 Blades",
      des: 1350
    },
  ];
  
  console.log(cardArr);
  
  var cardCon = document.getElementById("cardContent");
  
  for (var i = 0; i < cardArr.length; i++) {
    var image = cardArr[i].image;
    var title = cardArr[i].title;
    var price = cardArr[i].des;
    var id = cardArr[i].id;
    //   console.log(image);
    cardCon.innerHTML += `
    <div class="card m-2" style="width: 18rem">
          <img
            src=${image}
            class="card-img-top"
            alt="..."
            height="160px"
          />
          <div class="card-body">
            <h5 class="card-title">${title}</h5>
            <p class="card-text">"Rs.<span>
              ${price}</span>
            </p>

            <a href="#" class="btn btn-primary" onclick=(cart(${id}))>Add to Cart</a>
          </div>
        </div>
    `;
  }
  var arr = [];
  function cart(index) {
    //   console.log(index);
    console.log(cardArr[index]);
    var sendingObj = cardArr[index];
    arr.push(sendingObj);
      console.log(arr);
    localStorage.setItem("cartData", JSON.stringify(arr));

    localStorage.setItem("sendingObj",JSON.parse(arr));
   
    window.location.href = "https://wa.me/03158826045"
  }
  