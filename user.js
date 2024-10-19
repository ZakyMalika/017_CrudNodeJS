import express from "express";
const route = express.Router();
const user =[

{   nama:"alpan",
    umur:"20",
    alamat:"kasihan",
    status:"anak 1",
    },
{   nama:"udin",
    umur:"20",
    alamat:"rajawali",
    status:"duda",
    },
{   nama:"arya",
    umur:"24",
    alamat:"gombong",
    status:"istri dua",
    },

];
route.get("/", (req,res) => {
    res.send(user);
});
export default route;