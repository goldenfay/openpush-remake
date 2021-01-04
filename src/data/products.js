const products=[
    {
    name: "Voucher for Burger King",
    image: "/assets/dummy/main/burger_king.png",
    price: 21000
    },
    {
    name: "Voucher for Burger King",
    image: "/assets/dummy/main/burger_king.png",
    price: 9000
    },
    {
    name: "Voucher for Burger King",
    image: "/assets/dummy/main/burger_king.png",
    price: 8700
    },
    {
    name: "Voucher for Burger King",
    image: "/assets/dummy/main/burger_king.png",
    price: 17000
    },


]


export default products.map((el,idx)=>({id: idx, ...el}))