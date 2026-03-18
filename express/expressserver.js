import express from 'express';

const app = express();
const port = 3001;

const users = [
    { id: 1, name: "Parshvi", email: "parshvi@email.com" },
    { id: 2, name: "Jane Doe", email: "janedoe@email.com" }
];

app.use(express.json());

app.get('/users', (req, res) => {
    res.status(200).json(users);
});

app.get('/users/:id', (req, res) => {
    const userId = parseInt(req.params.id);
    const user = users.find(u => u.id === userId);

    if (user) {
        res.status(200).json(user);
    } else {
        res.status(404).json({ message: "User not found" });
    }
});

app.post('/users', (req, res) => {
    const { name, email } = req.body;

    if (!name || !email) {
        return res.status(400).json({ message: "User data incomplete" });
    }

    const exists = users.find(u => u.email === email);
    if (exists) {
        return res.status(409).json({ message: "User already exists" });
    }

    const newUser = {
        id: Date.now(),
        name,
        email
    };

    users.push(newUser);
    res.status(201).json(newUser);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});