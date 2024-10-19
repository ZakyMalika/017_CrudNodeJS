import express from "express";
const route = express.Router();
const mobil =[

{   merk: "porche",
    model: "sport",
    warna: "kuning",
    tahun: 2021,
    },
{   merk: "bwm",
    model: "sport",
    warna: "pink",
    tahun: 2022,
    },
];
route.get("/", (req,res) => {
    res.send(mobil);
});
export default route;