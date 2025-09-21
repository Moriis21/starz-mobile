import React, { useState } from 'react';
import { RefreshCw, ExternalLink } from 'lucide-react';

const HomeTab = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const handleIframeLoad = () => {
    setIsLoading(false);
    setError(false);
  };

  const handleIframeError = () => {
    setIsLoading(false);
    setError(true);
  };

  const refreshPage = () => {
    setIsLoading(true);
    setError(false);
    // Force iframe reload by changing src
    const iframe = document.getElementById('home-iframe');
    if (iframe) {
      iframe.src = iframe.src;
    }
  };

  const openInNewTab = () => {
    window.open('https://starzit.com', '_blank');
  };

  return (
    <div className="relative h-full">
      {/* Header */}
      <div className="starz-primary p-4 flex items-center justify-between">
        <h1 className="starz-font-serif text-xl font-bold text-white">
          Starz University
        </h1>
        <div className="flex gap-2">
          <button
            onClick={refreshPage}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            title="Refresh"
          >
            <RefreshCw size={20} className="text-white" />
          </button>
          <button
            onClick={openInNewTab}
            className="p-2 rounded-full hover:bg-gray-700 transition-colors"
            title="Open in new tab"
          >
            <ExternalLink size={20} className="text-white" />
          </button>
        </div>
      </div>

      {/* Loading Indicator */}
      {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 starz-border-gold mx-auto mb-4"></div>
            <p className="starz-font-sans text-gray-600">Loading website...</p>
          </div>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
          <div className="text-center p-8">
            <div className="text-red-500 mb-4">
              <svg className="w-16 h-16 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L3.732 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              Unable to load website
            </h3>
            <p className="text-gray-600 mb-4">
              Please check your internet connection and try again.
            </p>
            <button
              onClick={refreshPage}
              className="starz-accent starz-accent-hover px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      )}

      {/* Website Iframe */}
      <iframe
        id="home-iframe"
        src="https://starzit.com"
        className="iframe-container"
        onLoad={handleIframeLoad}
        onError={handleIframeError}
        title="Starz University Website"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups allow-popups-to-escape-sandbox"
      />
    </div>
  );
};

export default HomeTab;

