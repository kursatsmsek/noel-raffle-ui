import React from "react";

export function isEmailAvailable(emailToCheck, userList) {
  for (const user of userList) {
    if (user.email === emailToCheck) {
      return false; // email already used
    }
  }
  return true;
}
