// utils/recaptcha.ts

export const getRecaptchaToken = async (action: string): Promise<string> => {
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;

  if (!siteKey) {
    throw new Error("Missing reCAPTCHA site key");
  }

  if (typeof grecaptcha === "undefined") {
    throw new Error("reCAPTCHA not yet loaded");
  }

  return grecaptcha.execute(siteKey, { action });
};
