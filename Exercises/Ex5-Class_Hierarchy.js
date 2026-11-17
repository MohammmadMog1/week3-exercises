class Notification {
  constructor(dest, message) {
    this.dest = dest;
    this.message = message;
  }
  send() {
    throw new Error("send must be implemnted by a child class only.");
  }
}

class EmailNotification extends Notification {
  constructor(dest, message) {
    super(dest, message);
  }
  send() {
    return `Sending EMAIL to ${this.dest}: ${this.message}`;
  }
}

class SmsNotification extends Notification {
  constructor(dest, message) {
    super(dest, message);
  }
  send() {
    return `Sending SMS to ${this.dest}: ${this.message}`;
  }
}

// const email = new EmailNotification("user@example.com", "Welcome!");
// const sms = new SmsNotification("+963900000000", "Your code is 1234");
// console.log(email.send());
// console.log(sms.send());
// console.log(email instanceof Notification);
// console.log(sms instanceof Notification);

module.exports = {
  Notification,
  EmailNotification,
  SmsNotification,
};
