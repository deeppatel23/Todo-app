const { Sequelize } = require("sequelize");
const Todo = require("../models/todo.model");

exports.getAllTodos = async (req, res) => {
  try {
    const todos = await Todo.findAll();
    res.json(todos);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.createTodo = async (req, res) => {
  const { title, description } = req.body;
  console.log("I GOT THIS" + req.body.title + req.body.description);
  try {
    const todo = await Todo.create({ title, description });
    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.getTodoById = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByPk(id);
    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.updateTodo = async (req, res) => {
  const id = req.params.id;
  const { title, description } = req.body;
  try {
    const todo = await Todo.findByPk(id);
    todo.title = title != "" ? title : todo.title;
    todo.description = description != "" ? description : todo.description;
    await todo.save();
    res.json(todo);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

exports.deleteTodo = async (req, res) => {
  const id = req.params.id;
  try {
    const todo = await Todo.findByPk(id);
    await todo.destroy();
    res.json({ message: "Todo Deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};
