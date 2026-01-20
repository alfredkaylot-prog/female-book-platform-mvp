"use client";

import { useEffect, useRef } from "react";
import intlTelInput from "intl-tel-input";

export default function PhoneInput() {
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (!inputRef.current) return;

    const iti = intlTelInput(inputRef.current, {
      initialCountry: "auto",
      separateDialCode: true,
      geoIpLookup: (callback: (countryCode: string) => void) => {

        fetch("https://ipapi.co/json/")
          .then((res) => res.json())
          .then((data) => callback(data.country_code as any))
          .catch(() => callback("US" as any));

      },
      utilsScript:
        "https://cdn.jsdelivr.net/npm/intl-tel-input@19.5.7/build/js/utils.js",
    });

    return () => {
      iti.destroy();
    };
  }, []);

  return (
    <input
      ref={inputRef}
      type="tel"
      placeholder="Phone number"
      required
      className="phone-input"
    />
  );
}
