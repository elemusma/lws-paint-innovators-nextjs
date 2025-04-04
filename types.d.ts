declare global {
    interface Window {
      grecaptcha: ReCaptchaV3;
    }
  
    const grecaptcha: ReCaptchaV3;
  
    interface ReCaptchaV3 {
      execute(siteKey: string, options: { action: string }): Promise<string>;
    }
  }
  
  export { };
  