exports.run = (client, message, args) => {
  if(message.author.id != "465362236693807115") { // Change my ID to yours
    message.channel.send("You don't have permission to run this command!")
  }
  if(!args[0]) {
    message.channel.send("Please input tag someone!")
  }
  let user = message.guild.member(message.mentions.users.first());
  if(!user) {
    message.channel.send("It seems like I can't find this user in this server.")
  }
  let msg = args.slice(1).join(" ")
  user.send(msg)
  message.channel.send(`<@${message.author.id}> has sent "${msg}" to ${user}`)
  message.delete()
}
