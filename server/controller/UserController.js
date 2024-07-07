const User = require('../model/UserModel'); // Assuming you have a Place model defined

// Create a new place
exports.createUser = async (req, res) => {
    try {
        const { email, password , name , age , gender} = req.body;
        const user = await User.findOne({ email });


        if(!email || !password || !name || !age || !gender ) {
            return res.status(401).json({ message: 'يجب ادخال البيانات بطريقة صحيحة' });

        }
        if(password.length < 8 ) {
            return res.status(401).json({ message: 'كلمة المرور يجب ان تكون اكثر من  8 خانات' });

        }
        if (user) {
            return res.status(401).json({ message: 'البريد الالكتروني مسجل مسبقا' });
        }
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

        if (!email || !password) {
            return res.status(404).json({ message: 'ادخل بيانات الدخول' });
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: 'حساب المستخدم غير موجود' });
        }
        console.log(user);

        // const isMatch = await bcrypt.compare(password, user.password);
        // if (!isMatch) {
        //     return res.status(400).json({ message: 'Invalid credentials' });
        // }

        if (password !== user.password) {
          return res.status(400).json({ message: 'كلمة المرور غير صحيحة' });
        }

        // const token = jwt.sign({ id: user._id }, 'your_jwt_secret', { expiresIn: '1h' });
        res.status(200).json({  user , msg : "ok" });
    } catch (error) {
        console.log(error,);
        res.status(500).json({ message: error.message });
    }
};
