const edit = (req,res)=>{
    res.render("edit")
}
const add = (req,res)=>{
    res.render("add")
}

module.exports= {
    edit,
    add
}