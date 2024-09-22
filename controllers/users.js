const users = require ("../data/index")


// * listUsers
//   * Should retrieve the entire array from _data/index_
  
const listUsers = (req,res)=>{
    res.json(users)

}

// * showUser
//   * Should retrieve just the user that matches the passed-in id
  
const showUser = (req, res)=>{
    const userId = req.params.id
    const foundUser = users.find((user)=> userId == user.id)
    // you can use the ! for the if statement because of the method used .find() that works with an object
    if (!foundUser) {
        return res.status (404).json({message: "user not found"});
    }
    res.json(foundUser)
}


// * createUser
//   * Should add a user to the array

const createUser = (req,res) =>{
    const counter = users.length
    const sampleUser = {id:counter +1, name:req.body.name, username: req.body.username , email: req.body.email ,
         address: req.body.address , phone: req.body.phone, website:req.body.website, company:req.body.company }
    
    users.push(sampleUser)    

    return res.json(users)
}


// * updateUser
//   * Should update one user in the array based on its id

const updateUser = (req,res)=>{
    const sampleUserId = req.params.id
    //this below finds the user by its id
    const foundUserIndex = users.findIndex((sampleUser)=>{
        return sampleUser.id == sampleUserId
    })
    // for the findindex method you use -1 because that means that index wasnt found
    //it also depends on the method you are using and what they return 
    
    if (foundUserIndex == -1)
    return res.status (400).json({message: "bad request"});

    users[foundUserIndex].name = req.body.name
    return res.json(users[foundUserIndex])
}

// * deleteUser
//   * Should delete one user from the array based on its id

const deleteUser = (req,res) => {
    const userId = req.params.id
    const foundUserIndex = users.findIndex((sampleUser)=>{
        return sampleUser.id == userId
    })

     // for the findindex method you use -1 because that means that index wasnt found; it also
     //depends on the method you are using and what they return 
    if (foundUserIndex == -1)
    return res.status (400).json({message: "bad request"});

    users[foundUserIndex].isActive = false
    return res.send("deleted")

}

module.exports = {
    listUsers,
    showUser,
    createUser,
    updateUser,
    deleteUser
}