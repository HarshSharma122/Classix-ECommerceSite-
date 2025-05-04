const arr = [
  {
    product_id: "68167b118df63d3cfc6ee328",
    product_name: "A Navy Blue Shirt",
    price: "2400",
    description: "A High quality shirt",
    image:
      "https://www.beyours.in/cdn/shop/files/slate-blue-c…f3dd-5ddc-4856-9de7-3ca6fbef35ec.jpg?v=1713157102",
  },
  {
    product_id: "68167bc18df63d3cfc6ee329",
    product_name: "A Navy Blue Shirt",
    price: "2400",
    description: "A High quality shirt",
    image:
      "https://img.freepik.com/free-photo/beautiful-young…97af7ce2695737e1edb35bfd6a22c5a3d2f995bf688&w=740",
  },
  {
    product_id: "68167bc18df63d3cfc6ee329",
    product_name: "A Navy Blue Shirt",
    price: "2400",
    description: "A High quality shirt",
    image:
      "https://img.freepik.com/free-photo/beautiful-young…97af7ce2695737e1edb35bfd6a22c5a3d2f995bf688&w=740",
  },
  {
    product_id: "68167bc18df63d3cfc6ee329",
    product_name: "A Navy Blue Shirt",
    price: "2400",
    description: "A High quality shirt",
    image:
      "https://img.freepik.com/free-photo/beautiful-young…97af7ce2695737e1edb35bfd6a22c5a3d2f995bf688&w=740",
  },
  {
    product_id: "68167bc18df63d3cfc6ee329",
    product_name: "A Navy Blue Shirt",
    price: "2400",
    description: "A High quality shirt",
    image:
      "https://img.freepik.com/free-photo/beautiful-young…97af7ce2695737e1edb35bfd6a22c5a3d2f995bf688&w=740",
  },
];
let sum = 0;
for (let i = 0; i < arr.length - 1; i++) {
  let p = parseInt(arr[i].price);
  sum = sum + p;
  console.log(sum);
}
