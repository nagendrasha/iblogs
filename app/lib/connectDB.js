const {username,password} = process.env;

export const connctionStr= "mongodb+srv://"+username+":"+password+"@iblog.npulg.mongodb.net/postDB?retryWrites=true&w=majority&appName=iblog";

