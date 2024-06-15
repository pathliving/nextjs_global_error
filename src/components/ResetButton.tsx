"use client";

import { useState } from "react";

const ResetButton = ({
  reset,
}: {
  reset: () => void
}) => {
  return (
    <button onClick={() => reset()}>Try again</button>
  );
};

export default ResetButton;
