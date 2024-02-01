async function main(args) {
  console.log(args)
  const name = args.name || 'stranger'
  const greeting = 'Hello ' + name + '!'
  console.log(greeting)
  return { "body": greeting }
}

exports.main = main;