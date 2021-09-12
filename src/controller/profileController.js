const Profile = require("../models/profile")

async function index(req, res){
    const Allprofilers = await Profile.findAll()
    res.json({ Allprofilers })
}

async function create(req, res){
    const { profile, password } = req.body
    const newProfiler = await Profile.create({
        profile,
        password
    })

    return res.json({ newProfiler })
}



module.exports = { index, create }