const User = require('../model/UserModel'); // Assuming you have a Place model defined

// Create a new place
exports.createUser = async (req, res) => {
    try {
        const { email, password , name , age , gender} = req.body;
        const newUser = new User({ email, password , name , age , gender});
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};




exports.loginUser = async (req, res) => {
    try {
        const { email, password } = req.body;
        // console.log(req.body);

        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        console.log(user);

        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) {
        //     return res.status(400).json({ message: 'Invalid credentials' });
        // }

        if (password !== user.password) {
          return res.status(400).json({ message: 'Invalid credentials' });
        }

        // const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({  user , msg : "ok" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
