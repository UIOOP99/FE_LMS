import memoize from "lodash/memoize";

export const farsiNumbers = memoize((rawMessage) => {
  let message = `${rawMessage}`;
  const nums = '1234567890'.split('');
  const localNums = '۱۲۳۴۵۶۷۸۹۰'.split('');

  nums.forEach((num, i) => {
    message = message.replace(RegExp(num, 'g'), localNums[i]);
  });

  return message;
});