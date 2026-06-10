function maskEmail(email){
  const atPoint = email.indexOf("@");
  const censoredPart = email.slice(1,atPoint-1);
  const asterickPart = "*".repeat(atPoint-2);
  return email.replace(censoredPart,asterickPart);
}
