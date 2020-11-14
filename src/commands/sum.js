module.exports = {
  commands: ["sum"],
  expectedArgs: "<num1> <num2>",
  permissionError: "You need admin permissions to run this command",
  description: "Sum of two number",
  minArgs: 2,
  maxArgs: 2,
  callback: (message, arguments, text, client) => {
    const num1 = +arguments[0];
    const num2 = +arguments[1];

    message.reply(`${num1} + ${num2} = ${num1 + num2}`);
    // client.sendMessage(message.from, `The sum is ${num1 + num2}`);
  },
  permissions: ["ADMINISTRATOR"],
  requiredRoles: [],
};
