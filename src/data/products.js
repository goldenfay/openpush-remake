const products=[
    {
    name: "Voucher for Burger King",
    category: 'Health & Beauty',
    image: "/assets/dummy/main/burger_king.png",
    price: 21000
    },
    {
    name: "Voucher for Burger King",
    category: 'Restaurants',
    image: "/assets/dummy/main/burger_king.png",
    price: 9000
    },
    {
    name: "Voucher for Burger King",
    category: 'Sports & Hobbies',
    image: "/assets/dummy/main/burger_king.png",
    price: 8700
    },
    {
    name: "Voucher for Burger King",
    category: 'Children',
    image: "/assets/dummy/main/burger_king.png",
    price: 17000
    },
    {
    name: "Voucher for Burger King",
    category: 'Food & Drins',
    image: "/assets/dummy/main/burger_king.png",
    price: 22000
    },
    {
    name: "Voucher for Burger King",
    category: 'For home, garden & pets',
    image: "/assets/dummy/main/burger_king.png",
    price: 28000
    },


]


export default products.map((el,idx)=>({id: idx, ...el}))