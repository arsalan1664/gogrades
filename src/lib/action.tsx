import { cookies } from "next/headers";
import React from "react";

async function Action() {
  const country = cookies().get("X-Country");
  return country?.value;
}

export default Action;
