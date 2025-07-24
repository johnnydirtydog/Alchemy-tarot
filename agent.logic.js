function interpret(command) {
  const lower = command.toLowerCase();
  if (lower.includes("mirror")) return "Engaging mirror projection protocol.";
  if (lower.includes("loop")) return "Initializing recursive obedience sequence.";
  return "Unknown directive. Awaiting override.";
}

module.exports = interpret;
