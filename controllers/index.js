const mongoose = require('mongoose');
const User = mongoose.model('User');

exports.getUsers = async (req, res) => {
    try {
        const users = await User.find().lean();
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({message: "something made wrong!!!"})
    }
}

exports.addUser = async (req, res) => {
    try {
        const {email, firstName, lastName} = req.body;
        const user = await User.findOne({email})
        if (user) {
            return res.status(400).json({message: 'email already exists'})
        }
        const newUser = await User.create({email, firstName, lastName});
        return res.status(200).json(newUser.toObject());
    }catch (error) {
        return res.status(500).json({message: "something made wrong!!!"})
    }
}

exports.setUserStatus = async (req, res) => {
    try {
        const {id} = req.params;
        const {status} = req.body;
        const user = await User.findByIdAndUpdate(id, {status});
        if(!user)
            return res.status(404).json({message: "user not exists"})
        return res.status(200).json({success: true})
    } catch (error){
        return res.status(500).json({message: "something made wrong!!!"})
    }
}

exports.removeUsers = async (req, res) => {
    try {
        const {users} = req.body;
        await User.deleteMany({_id: { $in: users}})
        return res.status(200).json({success: true})
    } catch (error) {
        return res.status(500).json({message: "something made wrong!!!"})
    }
}