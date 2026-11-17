### Inheritance vs. Simple Functions

I used inheritance because `EmailNotification` and `SmsNotification` share common properties (`recipient` and `message`), but implement the `send()` method differently.

**Inheritance** helps reduce code duplication and makes it easier to add new notification types.

**Simple Functions** would be a better choice for small tasks that do not require shared properties or object state.

**Conclusion:** Inheritance is suitable for this exercise because the notification types share common properties but have different behaviors.