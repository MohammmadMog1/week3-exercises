const {
  Notification,
  EmailNotification,
  SmsNotification,
} = require("../Ex5-Class_Hierarchy");

describe("Notification", () => {
  test("should initialize recipient and message", () => {
    const notification = new Notification("mohammad@gmail.com", "Welcome!");
    expect(notification.dest).toBe("mohammad@gmail.com");
    expect(notification.message).toBe("Welcome!");
  });

  test("should throw an error when send is called directly", () => {
    const notification = new Notification("mohammad@gmail.com", "Welcome!");
    expect(() => notification.send()).toThrow(
      "send must be implemnted by a child class only.",
    );
  });
});

describe("EmailNotification", () => {
  test("should initialize using parent constructor", () => {
    const email = new EmailNotification("mohammad@gmail.com", "Welcome!");

    expect(email.dest).toBe("mohammad@gmail.com");
    expect(email.message).toBe("Welcome!");
  });

  test("should send an email notification", () => {
    const email = new EmailNotification("mohammad@gmail.com", "Welcome!");
    expect(email.send()).toBe("Sending EMAIL to mohammad@gmail.com: Welcome!");
  });
});

describe("SmsNotification", () => {
  test("should initialize using parent constructor", () => {
    const sms = new SmsNotification("+963900000000", "Your code is 1234");

    expect(sms.dest).toBe("+963900000000");
    expect(sms.message).toBe("Your code is 1234");
  });

  test("should send an SMS notification", () => {
    const sms = new SmsNotification("+963900000000", "Your code is 1234");

    expect(sms.send()).toBe("Sending SMS to +963900000000: Your code is 1234");
  });
});
