'use client';

import { useEffect, useState } from 'react';

const CookieConsent = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const hasAcceptedCookies = localStorage.getItem('cookiesAccepted');
    if (!hasAcceptedCookies) {
      setIsVisible(true);
    }
  }, []);

  const handleAcceptCookies = () => {
    localStorage.setItem('cookiesAccepted', 'true');
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-lg text-center z-50">
      <p>This website uses cookies to enhance the user experience. By clicking &quot;Accept&quot;, you agree to our use of cookies.</p>
      <button onClick={handleAcceptCookies} className="mt-2 bg-primary text-white p-2 rounded">
        Accept Cookies
      </button>
    </div>
  );
};

export default CookieConsent; 